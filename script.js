const API_KEY = "&appid=31d71cb5a78f78a82e0bd617cfe323be&units=imperial";

const submitForm = $("#run-search");
const cityInput = $("#cityInput");
const cityNameH1 = $("#cityName");


submitForm.on("submit", function (e) {
  e.preventDefault();

  var city = cityInput.val();
  cityInput.val("");

  getWeather(city);
  getForecast(city);
});

function getWeather(cityName) {
  const WEATHER_URL = "http://api.openweathermap.org/data/2.5/weather?q=";
  const URL = WEATHER_URL + cityName + API_KEY;

  $.get(URL)
    // var response = $.get(): when the value is resolved
    .then(function (response) {
      console.log(response);

      cityNameH1.text(response.name);

      getUVI(response.coord);
    })
    .catch(function (err) {
      console.warn(err);
    });
}

function getForecast(cityName) {
  const FORECAST_URL = "http://api.openweathermap.org/data/2.5/forecast?q=";
  const URL = FORECAST_URL + cityName + API_KEY;

  $.get(URL)
    // var response = $.get(): when the value is resolved
    .then(function (response) {
      console.log(response);

      for (var i = 0; i < response.list.length; i++) {
        if (true) { // find some evaluation for noon
          console.log(response.list[i].dt_txt);
        }
      }
    })
    .catch(function (err) {
      console.warn(err);
    });
}

function getUVI(coord) {
  const UVI_URL = "http://api.openweathermap.org/data/2.5/uvi?";
  const LAT = "lat=" + coord.lat;
  const LON = "&lon=" + coord.lon;
  const URL = UVI_URL + LAT + LON + API_KEY;

  $.get(URL)
    // var response = $.get(): when the value is resolved
    .then(function (response) {
      console.log(response);
    })
    .catch(function (err) {
      console.warn(err);
    });
}
