const X_CLASS = "x";
const CIRCLE_CLASS = "circle";

const HOVER_X_CLASS = "hover-x";
const HOVER_CIRCLE_CLASS = "hover-circle";
const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const cellElements = document.querySelectorAll("[data-cell]");

const board = document.getElementById("board");
const restartButton = document.getElementById("restartButton");
const winner = document.getElementById("winnner");
const resultMessage = document.getElementById("results");

const closeButton = document.querySelector(".modal .close");

let circleTurn;

startGame();

function startGame() {
  circleTurn = false;
  cellElements.forEach((cell) => {
    cell.classList.remove(X_CLASS);
    cell.classList.remove(CIRCLE_CLASS);
    cell.removeEventListener("click", handleClick);
    cell.addEventListener("click", handleClick, { once: true });
  });
}

function handleClick(e) {
  const cell = e.target;
  const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;
  console.log(currentClass);

  cell.classList.add(currentClass);
  circleTurn = !circleTurn;

  if (checkWin(currentClass)) {
    showResult(`${currentClass.toUpperCase()} wins`);
  } else if (isDraw()) {
    showResult(`It's a Draw`);
  } else {
    setBoardHoverClass();
  }
}

function setBoardHoverClass() {
  board.classList.remove(HOVER_X_CLASS);
  board.classList.remove(HOVER_CIRCLE_CLASS);
  if (circleTurn) {
    board.classList.add(HOVER_CIRCLE_CLASS);
  } else {
    board.classList.add(HOVER_X_CLASS);
  }
}
function checkWin(currentClass) {
  return WINNING_COMBINATIONS.some((combination) => {
    return combination.every((index) => {
      return cellElements[index].classList.contains(currentClass);
    });
  });
}
function isDraw() {
  return [...cellElements].every((cell) => {
    return (
      cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS)
    );
  });
}

function showResult(message) {
  resultMessage.textContent = message;
  resultModal.show();
}

restartButton.addEventListener("click", startGame);
document.getElementById("playBtn").addEventListener("click", startGame);
const resultModal = new bootstrap.Modal(
  document.getElementById("resultModal"),
  {
    keyboard: false
  }
);

closeButton.addEventListener("click", () => {
  resultModal.hide();
  startGame();
});
