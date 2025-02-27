const apiUrl = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/strasbourg/today?unitGroup=metric&include=current&key=PJQCV9M4WZ6Y5JCJ3472AHQZF&contentType=json";

const fetchWeather = () => {
  fetch(apiUrl)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      console.log(response.resolvedAddress);
      console.log(response.days[0].temp);
    })
    .catch((err) => {
      console.log(err);
    })
}

document.addEventListener("DOMContentLoaded", () => {
  fetchWeather();
});