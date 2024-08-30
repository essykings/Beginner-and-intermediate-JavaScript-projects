const date = new Date();
const currentDate = document.querySelector(".date p");

const searchButton = document.querySelector(".location button");
const weatherDetails = document.querySelector(".weather-details");
const weather = document.querySelector(".weather");

const image = document.querySelector(".weather img");

currentDate.textContent = date.toString().split(" ").slice(0, 4).join(" ");
searchButton.addEventListener("click", function () {
  const cityInput = document.querySelector(".location input");
  const city = cityInput.value;
  const APIKEY = "04419024fb0f20edd3f1abd06e46dd6d";
  const BASE_URL = ` https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`;

  fetch(BASE_URL)
    .then((resp) => resp.json())
    .then((data) => {
      if (data.cod === 200) {
        const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        image.src = iconUrl;

        const description = document.querySelector(".description");
        const temp = document.querySelector(".temp");
        const cityName = document.querySelector(".cityName");
        const windSpeed = document.querySelector(".speed");
        const humidity = document.getElementById("humidity");
        const feeeling = document.getElementById("feeeling");

        cityName.textContent = data.name;
        description.textContent = data.weather[0].description;
        const roundedCelsius = Math.round(data.main.temp / 18.14);
        temp.textContent = `${roundedCelsius}°C `;

        windSpeed.textContent = `${data.wind.speed} m/s`;
        humidity.textContent = `${data.main["humidity"]} %`;
        feeeling.textContent = `${Math.round(
          data.main["feels_like"] / 18.14
        )} °C`;

        weatherDetails.style.visibility = "visible";
        weather.style.visibility = "visible";
        cityInput.value = " ";
      } else {
        weather.innerHTML = "City Not found";
        weather.style.visibility = "visible";
        weatherDetails.style.visibility = "hidden";

      
         cityInput.value = " ";
      }
    });
});
