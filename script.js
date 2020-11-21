const API_KEY = "&appid=31d71cb5a78f78a82e0bd617cfe323be&units=imperial";

const submitForm = $("#run-search");
const cityInput = $("#cityInput");
const cityNameH1 = $("#cityName");
var day1El = $("#day1")
var day2El = $("#day2")
var day3El = $("#day3")
var day4El = $("#day4")
var day5El = $("#day5")
var currentDayEl = $("#currentDay")

// var currentWind = $("#wind")
// var currentDate = $()
var currentIcon = $("#icon")


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
      // currentWind.text(response.wind.speed);
      // day1El.text(response.date);

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

$("#wind").text("Wind speed:" + response.list[8].wind.speed);      
$("#temp").text("Temp(F):" + response.list[8].main.temp);

      // for (var i = 0; i < response.list.length; i++) {
      //   if (true) { // find some evaluation for noon
          // console.log(response.list.find()
      //   }
      // }
  
    })
    .catch(function (err) {
      console.warn(err);
      currentIcon.text(response.list)
    });
}

// function findNoon(forcastArr) {
//   return ( === "")
// }

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
