document.addEventListener("DOMContentLoaded", function () {
    const quotes = [
      "The best way to get started is to quit talking and begin doing. - Walt Disney",
      "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty. - Winston Churchill",
      "Don’t let yesterday take up too much of today. - Will Rogers",
      "You learn more from failure than from success. Don’t let it stop you. Failure builds character. - Unknown",
      "It’s not whether you get knocked down, it’s whether you get up. - Vince Lombardi",
      "If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you. - Steve Jobs",
      "People who are crazy enough to think they can change the world, are the ones who do. - Rob Siltanen",
      "Failure will never overtake me if my determination to succeed is strong enough. - Og Mandino",
      "Entrepreneurs are great at dealing with uncertainty and also very good at minimizing risk. That’s the classic entrepreneur. - Mohnish Pabrai",
      "We may encounter many defeats but we must not be defeated. - Maya Angelou"
    ];
    const searchButton = document.getElementById("search-btn");
    const searchInput = document.getElementById("search");
  
    const currentTimeElement = document.getElementById("current-time");
    const currentDay = document.getElementById("current-day");
    const weatherElement = document.getElementById("weather");
    const weatherIcon = document.getElementById("weather-icon");
    const locationElement = document.getElementById("location");
  
    async function getWeather() {
      try {
        const locationResponse = await fetch("https://ipapi.co/json/");
        const location = await locationResponse.json();
        locationElement.textContent = location.city;
  
        const ApiKey = "04419024fb0f20edd3f1abd06e46dd6d";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location.city}&units=metric&appid=${ApiKey}`;
  
        const response = await fetch(url);
        const weatherData = await response.json();
        console.log(weatherData);
  
        const temperature = weatherData.main.temp;
        const weatherIconUrl = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`;
  
        weatherElement.textContent = `${Math.round(temperature)}°C`;
        weatherIcon.src = weatherIconUrl;
      } catch (error) {
        console.error("Error fetching weather data:", error);
        locationElement.textContent = "Error fetching weather";
      }
    }
  
    getWeather();
  
    searchButton.addEventListener("click", function () {
      const query = searchInput.value;
      const url = `https://www.google.com/search?q=${query}`;
      window.open(url, "_blank");
    });
  
    searchInput.addEventListener("keydown", (e) => {
      if (e.key == "Enter") {
        const query = e.target.value;
        const url = `https://www.google.com/search?q=${query}`;
        window.open(url, "_blank");
      }
    });
  
    function updateTime() {
      const now = new Date();
      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      };
      const formattedTime = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      });
      currentTimeElement.textContent = ` ${formattedTime}`;
  
      const formattedDate = now.toLocaleDateString("en-US", options);
      currentDay.textContent = `${formattedDate} `;
    }
  
    setInterval(updateTime, 1000);
    updateTime();
  
    function getQuote() {
      const quoteIndex = Math.floor(Math.random() * quotes.length);
      const randomQuote = quotes[quoteIndex];
      document.getElementById("random-quote").textContent = randomQuote;
    }
    getQuote();
  });
  


