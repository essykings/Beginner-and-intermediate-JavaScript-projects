document.addEventListener("DOMContentLoaded", function () {
    function updateTime() {
      const currentTime = new Date();
      const hours = document.querySelector(".hours");
      const minutes = document.querySelector(".minutes");
      const seconds = document.querySelector(".seconds");
  
      hours.innerHTML = currentTime.getHours().toString().padStart(2, "0");
      minutes.innerHTML = currentTime.getMinutes().toString().padStart(2, "0");
      seconds.innerHTML = currentTime.getSeconds().toString().padStart(2, "0");
    }
    updateTime();
  
    setInterval(updateTime, 1000);
  });
  