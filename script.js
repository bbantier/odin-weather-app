const weatherForm = document.querySelector(".weather-form");

const fetchWeather = (location) => {

  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/today?unitGroup=metric&include=current&key=PJQCV9M4WZ6Y5JCJ3472AHQZF&contentType=json`;

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      const weatherInfo = {
        location: response.resolvedAddress,
        conditions: response.days[0].description,
        temp: response.days[0].temp,
      };

      console.log(weatherInfo);
    })
    .catch((err) => {
      console.log(err);
    });
};

weatherForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const locationInput = document.querySelector(".location-input");
  const location = locationInput.value;
  
  fetchWeather(location);
});