window.addEventListener("DOMContentLoaded", function () {
    const emojis = [
        {
          text: "Awful",
          url: "https://essykings.github.io/JavaScript/svg-emojis/Disappointed.svg"
        },
       {
          text: "Bad",
          url: "https://essykings.github.io/JavaScript/svg-emojis/Sad.svg"
        },
        {
          text: "Okay",
          url: "https://essykings.github.io/JavaScript/svg-emojis/Expressionless.svg"
        },
        {
          text: "Good",
          url: "https://essykings.github.io/JavaScript/svg-emojis/Smile.svg"
        },
        {
          text: "Great",
          url: "https://essykings.github.io/JavaScript/svg-emojis/love.svg"
        }]
        
    const container = document.querySelector(".container");
    const slider = document.getElementById("slider");
    const emoji = document.querySelector(".emoji");
    const rate = document.getElementById("message");
    const colors = ["#FD3F3F", "#FF7B7A", "#FF9B00", "#9BAF08", "#4EBE38"];
  
    function setProperties(index) {
      emoji.src = emojis[index].url;
      rate.textContent = emojis[index].text;
      container.style.backgroundColor = colors[index];
    }
  
    slider.addEventListener("input", UpdateRating);
  
    function UpdateRating() {
      const value = slider.value;
  
      if (value >= 0 && value < 20) {
        setProperties(0);
      } else if (value >= 20 && value < 40) {
        setProperties(1);
      } else if (value >= 40 && value < 60) {
        setProperties(2);
      } else if (value >= 60 && value < 80) {
        setProperties(3);
      } else if (value >= 80 && value <= 100) {
        setProperties(4);
      }
    }
  });
  