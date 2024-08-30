document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("text");
    const textArray = [
      "Software Engineer",
      "Data Scientist",
      "UX Designer",
      "Product Manager",
      "Project Manager",
      "DevOps Engineer",
      "Data Engineer",
      "Business Analyst",
      "Systems Analyst",
      "Web Developer",
      "App Developer",
      "Network Engineer",
      "Frontend Developer",
      "Backend Developer",
      "Full Stack",
      "Scrum Master",
      "Technical Support",
      "Database Admin"
    ];
  
    let pipe = true;
    let index = 0;
    let speed = 200;
    let isTyping = true;
    let textIndex = 0;
  
    function typeText() {
      let text = textArray[textIndex];
      if (pipe) {
        text += "|";
      }
  
      if (isTyping) {
        if (index < text.length) {
          textElement.value += text[index];
          index++;
        } else {
          isTyping = false;
        }
      } else {
        if (index > 0) {
          textElement.value = text.slice(0, index - 1);
          index--;
        } else {
          isTyping = true;
          textIndex = (textIndex + 1) % textArray.length;
        }
      }
  
      setTimeout(typeText, speed);
    }
  
    typeText();
  });
  