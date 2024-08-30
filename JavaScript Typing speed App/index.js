const phrase = `People often look for ways to improve their lives. They want to be happy, healthy, and successful. 
To achieve these goals, they work hard, spend time with family and friends, and enjoy hobbies. 
Eating well and staying active are important for health. 
Learning new things and setting goals can help people grow.
Everyone has challenges, but staying positive and focused can make a big difference.
Helping others and being kind can also bring joy. 
Life is a journey, and every day is a chance to make it better.
Enjoy the little things and appreciate what you have. 
It's important to stay connected with others, communicate openly, and listen carefully. 
Reading books, exploring new places, and trying new activities can expand our horizons. 
Balancing work and relaxation helps maintain a healthy lifestyle. 
Remember to laugh often, love deeply, and live fully. 
Taking time to reflect on our experiences and learn from them can lead to personal growth. 
The support of loved ones can provide strength and comfort. 
Every moment is an opportunity to create lasting memories and build a fulfilling life.
In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln`;

const text = phrase.replace(/[\r\n]+\s*/g, " ").replace(/\s{2,}/g, " ");
// console.log(text);

const word = document.getElementById("word");
const timerDisplay = document.getElementById("timer");
const errorDisplay = document.getElementById("errors");
const wpm = document.getElementById("wpm");

word.textContent = text.split(" ").slice(0, 10).join(" ");
const displayLength = 80;

let duration = 60;
let timerStarted = false;
let interval;
const timerElement = document.getElementById("countdown");
const textInput = document.querySelector(".text_input");
const resetContainer = document.getElementById("reset");

textInput.addEventListener("input", (e) => {
  if (!timerStarted) {
    startTimer();
    timerStarted = true;
    console.log(timerElement.value);
  }

  const typedText = textInput.value;
  let displayText = "";
  let startIndex = Math.max(0, typedText.length - displayLength / 2);
  let endIndex = startIndex + displayLength;

  for (let i = startIndex; i < endIndex && i < text.length; i++) {
    if (i < typedText.length) {
      if (typedText[i] === text[i]) {
        displayText += `<span class="correct">${text[i]}</span>`;
      } else {
        displayText += `<span class="incorrect">${text[i]}</span>`;
      }
    } else {
      displayText += text[i];
    }
  }

  word.innerHTML = displayText;
});

function updateTyping() {
  mainContainer = document.getElementById("main");
  mainContainer.style.display = "none";
  const wordsTypedValue = document.querySelector(".text_input").value;
  const wordsTyped = wordsTypedValue.trim().split(/\s+/).length;

  wpm.textContent = `Your speed was: ${(wordsTyped * 60) / duration} WPM `;

  resetContainer.style.display = "block";
}

function startTimer() {
  let timer = duration;
  
  interval = setInterval(() => {
    timer--;
    timerElement.textContent = `${timer}s`;

    if (timer <= 0) {
      clearInterval(interval);
      timerElement.textContent = "Time's up!";
      updateTyping();
    }
  }, 1000);
}

const reset_btn = document.getElementById("reset_btn");
reset_btn.addEventListener("click", (e) => {
  mainContainer = document.getElementById("main");
  resetContainer.style.display = "none";
  mainContainer.style.display = "block";
  textInput.value = "";
  word.textContent = text.split(" ").slice(0, 10).join(" ");
  wpm.textContent = "";
  timerElement.textContent = "60s";
  timerStarted = false;
  
});
