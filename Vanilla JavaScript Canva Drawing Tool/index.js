let isDrawing = false;
let startX = 0;
let startY = 0;
let initialImageData;

const canvas = document.querySelector("canvas");
selectTool = document.getElementById("tool");


let currentTool = selectTool.value;

selectedColor = document.getElementById("drawcolor");
let color = selectedColor.value;

selectedColor.addEventListener("input", () => {
  color = selectedColor.value;
});

selectTool.addEventListener("change", () => {
  currentTool = selectTool.value;
});

ctx = canvas.getContext("2d", { willReadFrequently: true });
canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mousemove", drawing);
canvas.addEventListener("mouseup", stopDrawing);

function startDrawing(e) {
  ctx.lineWidth = 5;
  startX = e.offsetX;
  startY = e.offsetY;
  isDrawing = true;
  ctx.beginPath();

  ctx.fillStyle = color;
  ctx.strokeStyle = color;
  initialImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
}

function drawing(e) {
  if (!isDrawing) return;
  ctx.putImageData(initialImageData, 0, 0);

  switch (currentTool) {
    case "freehand":
      ctx.moveTo(startX, startY);
      ctx.lineTo(e.offsetX, e.offsetY);
      ctx.stroke();
      startX = e.offsetX;
      startY = e.offsetY;
      break;

    case "rectangle":
      const width = e.offsetX - startX;
      const height = e.offsetY - startY;
      ctx.fillRect(startX, startY, width, height);
      ctx.beginPath();
      break;

    case "circle":
      const radius = Math.sqrt(
        (e.offsetX - startX) ** 2 + (e.offsetY - startY) ** 2
      );
      ctx.beginPath();
      ctx.arc(startX, startY, radius, 0, 2 * Math.PI);
      ctx.fill();
      ctx.stroke();
      break;

    case "eraser":
      ctx.strokeStyle = "#fff";
      ctx.moveTo(startX, startY);
      ctx.lineTo(e.offsetX, e.offsetY);
      ctx.stroke();
      startX = e.offsetX;
      startY = e.offsetY;
      break;

    default:
      break;
  }
}

function stopDrawing(e) {
  isDrawing = false;
  ctx.closePath();
}
