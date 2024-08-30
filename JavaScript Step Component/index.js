document.addEventListener("DOMContentLoaded", function () {
    const progressBar = document.querySelectorAll(".progress-bar")[0];
    const StatusBar = document.querySelectorAll(".status-bar")[0];

    const circles = document.querySelectorAll(".circle");
    const previousBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    const submitBtn = document.querySelector(".submit");

    let activeStepperIndex = 0;

    previousBtn.addEventListener("click", function () {
    previousBtn.disabled = activeStepperIndex === 0;

      activeStepperIndex = Math.max(activeStepperIndex - 1, 0);
      const percentageWidth =
        (activeStepperIndex / (circles.length - 1)) * 100;
      StatusBar.style.width = percentageWidth + "%";
      StatusBar.style.backgroundColor = "green";
      updateStepper();
    });

    nextBtn.addEventListener("click", function () {
      activeStepperIndex++;
      console.log(activeStepperIndex);
      previousBtn.addEventListener("click", function () {});
      const percentageWidth =
        (activeStepperIndex / (circles.length - 1)) * 100;
      StatusBar.style.width = percentageWidth + "%";
      StatusBar.style.backgroundColor = "green";

      updateStepper();
    });

 
    function updateStepper() {
    previousBtn.disabled = activeStepperIndex === 0;

      circles.forEach((circle, index) => {
        const checkIcon = circle.querySelector("i");
        
        console.log(index);
    

        if (index === activeStepperIndex) {
          
          checkIcon.style.display = "block";
          circle.classList.add("animate");
        }
        if (activeStepperIndex === circles.length - 1) {
          nextBtn.style.display = "none";
          submitBtn.style.display = "block";
        }

        if(index >activeStepperIndex){
          circle.classList.remove("animate")

        }
        if(!(activeStepperIndex === circles.length - 1)){
          nextBtn.style.display = "block";
          submitBtn.style.display = "none";
        }
        
      });
    }
    

    const message = document.querySelector(".message");
    const container = document.querySelector(".container");

    submitBtn.addEventListener("click", function () {
      message.style.display = "block";
      container.style.display = "none";
    });
  });