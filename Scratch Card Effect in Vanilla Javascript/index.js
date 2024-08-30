const card = document.getElementById("card");
const canvas = document.getElementById("scratch-pad");
const ctx = canvas.getContext("2d");

function generateRandomCode(length) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let code = "";
  for (let i = 0; i < length; i++) {
    code += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return code;
}
document.getElementById("code").textContent = generateRandomCode(12);

canvas.width = card.offsetWidth;
canvas.height = card.offsetHeight;

const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
gradient.addColorStop(0, "#DFBD69");
gradient.addColorStop(1, "#926F34");

ctx.fillStyle = gradient;
ctx.fillRect(0, 0, canvas.width, canvas.height);

let isDrawing = false;
canvas.addEventListener("mousemove", (e) => {
  isDrawing = true;
  scratch(e);
});

// canvas.addEventListener("mouseup", () => {
//   isDrawing = false;
// });

canvas.addEventListener("touchstart", (e) => {
  isDrawing = true;
  scratch(e.touches[0]);
});

canvas.addEventListener("touchmove", (e) => {
  if (isDrawing) {
    scratch(e.touches[0]);
  }
});

function scratch(e) {
  const rect = canvas.getBoundingClientRect();
  console.log(rect);
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  ctx.globalCompositeOperation = "destination-out";
  ctx.beginPath();
  ctx.arc(x, y, 20, 0, Math.PI * 2, false);
  ctx.fill();
}
