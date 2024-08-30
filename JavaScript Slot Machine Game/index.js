const reels = document.querySelectorAll(".reel");
const spinButton = document.querySelector(".spin_btn");
const messageDisplay = document.querySelector(".message");
const reelSound = document.getElementById("reelSound");
const winSound = document.getElementById("winSound");

const symbols = ["🍒", "🔔", "🍋", "🍉", "⭐", "7️⃣", "🍊", "🍓", "🍈", "🍍"];

let reelStates = [
  ["🍒", "🍒", "🍒", "🍋", "🍋", "🍉"],
  ["🍒", "🍋", "🍋", "🍉", "🍒", "7️⃣"],
  ["🍒", "7️⃣", "🍋", "🍒", "🍓", "🍋"]
];

let spinning = false;
let balance = 1000;
let betAmount = 10;

function updateBalanceDisplay() {
  const balanceDisplay = document.querySelector(".balance");
  balanceDisplay.textContent = `Balance: $${balance}`;
}

function placeBet() {
  if (balance >= betAmount) {
    balance -= betAmount;
    updateBalanceDisplay();
    spinReels();
  } else {
    alert("Not enough balance to place a bet!");
  }
}

spinButton.addEventListener("click", placeBet);

function spinReels() {
  if (spinning) return;
  spinning = true;
  reelSound.play();
  messageDisplay.textContent = "Spinning.........";
  reels.forEach((reel, index) => {
    setTimeout(() => {
      spinReel(reel, index);
    }, index * 500);
  });
}

function spinReel(reel, index) {
  const spinCount = 10 + Math.floor(Math.random() * 5);
  let currentSpin = 0;
  console.log(spinCount);
  const interval = setInterval(() => {
    reelStates[index].unshift(reelStates[index].pop());
    reel.innerHTML = "";
    reelStates[index].forEach((symbol) => {
      const symbolDiv = document.createElement("div");
      symbolDiv.classList.add("symbol");
      symbolDiv.textContent = symbol;
      reel.appendChild(symbolDiv);
    });
    currentSpin++;
    if (currentSpin >= spinCount) {
      clearInterval(interval);
      if (index === reels.length - 1) {
        spinning = false;
        reelSound.pause();
        reelSound.currentTime = 0;
        checkWin();
      }
    }
  }, 50 + index * 50);
}

function checkWin() {
  const [reel1, reel2, reel3] = reelStates.map((reel) => reel[0]);
  const [reel4, reel5, reel6] = reelStates.map((reel) => reel[1]);

  if (
    (reel1 === reel2 && reel2 === reel3) ||
    (reel4 === reel5 && reel5 === reel6)
  ) {
    const payout = betAmount * 5;
    balance += payout;
    winSound.play();
    messageDisplay.textContent = " ";
  } else {
    messageDisplay.textContent = " Try Again";
  }
  updateBalanceDisplay();
}
