document.addEventListener("DOMContentLoaded", (event) => {
    const restart = document.getElementById("restart");
    const timerElement = document.getElementById("timer");
    const gameOverContainer = document.getElementById("gameOverContainer");
    const gameOverMessage = document.querySelector(".gameOver");
  
    let timerStarted = false;
    let clickedCards = [];
    let matchedCards = 0;
    
    const numbers = [...Array(2)].flatMap(() => [1, 2, 3, 4, 5, 6, 7, 8]);
  
    const cards = document.querySelectorAll(".card");
  
    let timer;
    let timeLeft = 60;
  
    restart.addEventListener("click", restartGame);
  
    function startTimer() {
      timer = setInterval(() => {
        timeLeft--;
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerElement.textContent = `Time left: ${minutes}:${
          seconds < 10 ? "0" : ""
        }${seconds}`;
  
        if (timeLeft <= 0) {
          clearInterval(timer);
          endGame(false);
        }
      }, 1000);
    }
  
    // function restartGame() {
    //   gameOverContainer.classList.remove("show");
  
    //   timeLeft = 60;
    //   timerElement.textContent = "Time left: 1:00";
    //   clearInterval(timer);
    //   timerStarted = false;

    //   clickedCards = [];
    //   matchedCards = 0;
    // }
  

    function restartGame() {
        gameOverContainer.classList.remove("show");

        timeLeft = 60;
        timerElement.textContent = "Time left: 1:00";
        clearInterval(timer);
        timerStarted = false;

    
        cards.forEach((card, index) => {
          card.querySelector(".card-front").textContent =
            shuffledNumbers[index];
          card.classList.remove("flipped");
        });

        clickedCards = [];
        matchedCards = 0;
      }
    function endGame(isWin) {
      console.log("endGame called with isWin:", isWin);
      gameOverMessage.textContent = isWin
        ? "Congratulations! You won!"
        : "You have failed!";
      gameOverMessage.style.color = isWin ? "#FFD700" : "red";
      gameOverContainer.classList.add("show");
    }
  
    const shuffledNumbers = [...numbers].sort(() => 0.5 - Math.random());
    cards.forEach((card, index) => {
      card.querySelector(".card-front").textContent = shuffledNumbers[index];
    });
  
    cards.forEach((card) => {
      card.addEventListener("click", () => {
        if (!timerStarted) {
          startTimer();
          timerStarted = true;
        }
  
        card.classList.add("flipped");
        clickedCards.push(card);
  
        if (clickedCards.length === 2) {
          if (
            clickedCards[0].querySelector(".card-front").textContent ===
            clickedCards[1].querySelector(".card-front").textContent
          ) {
            clickedCards = [];
            matchedCards += 2;
            if (matchedCards === cards.length) {
              clearInterval(timer);
              endGame(true);
            }
          } else {
            setTimeout(() => {
              clickedCards.forEach((card) => card.classList.remove("flipped"));
              clickedCards = [];
            }, 1000);
          }
        }
      });
    });
  });
  