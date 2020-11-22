$("#currentDay").append(moment().format('dddd, MMM Do'));


const API_KEY = "&appid=31d71cb5a78f78a82e0bd617cfe323be&units=imperial";

const submitForm = $("#run-search");
const cityInput = $("#cityInput");
const cityNameH1 = $("#cityName");
var day1El = $("#day1")
var day2El = $("#day2")
var day3El = $("#day3")
var day4El = $("#day4")
var day5El = $("#day5")

// var currentWind = $("#wind")
// var currentDate = $()
var currentIcon = $("#icon")


var humid = $("#humid")
var humid1 = $("#humid1");
var humid2 = $("#humid2");
var humid3 = $("#humid3");
var humid4 = $("#humid4");
var humid5 = $("#humid5");

var classNames= [".higherUV", ".highUV", ".medUV", ".aveUV", ".lowUV"]




submitForm.on("submit", function (e) {
  e.preventDefault();

  var city = cityInput.val();
  cityInput.val("");

  getWeather(city);
  getForecast(city);
});

function getWeather(cityName) {
  const WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather?q=";
  const URL = WEATHER_URL + cityName + API_KEY;

  $.get(URL)
    // var response = $.get(): when the value is resolved
    .then(function (response) {
      console.log(response);

      cityNameH1.text(response.name);
      // currentWind.text(response.wind.speed);
      // day1El.text(response.date);

      $("#wind").text("Wind speed:" + response.wind.speed + "mph");      
      $("#temp").text("Temp(F):" + response.main.temp);
      humid.text("Humidity:" + response.main.humidity);
      $("#icon").text(response.weather[0].icon);
      $("#weatherCurr").text(response.weather[0].description);

      getUVI(response.coord);
    })
    .catch(function (err) {
      console.warn(err);
    });
    
    


}

function getForecast(cityName) {
  const FORECAST_URL = "https://api.openweathermap.org/data/2.5/forecast?q=";
  const URL = FORECAST_URL + cityName + API_KEY;
  $.get(URL)
    // var response = $.get(): when the value is resolved
    .then(function (response) {
      console.log(response);




$("#date1").text(response.list[4].dt_txt);      
$("#temp1").text("Temp(F):" + response.list[4].main.temp);
$("#wind1").text("Wind speed:" + response.list[4].wind.speed + "mph");
humid1.text("Humidity:" + response.list[4].main.humidity);

$("#date2").text(response.list[12].dt_txt);      
$("#temp2").text("Temp(F):" + response.list[12].main.temp);
$("#wind2").text("Wind speed:" + response.list[12].wind.speed + "mph");
humid2.text("Humidity:" + response.list[12].main.humidity);

$("#date3").text(response.list[20].dt_txt);      
$("#temp3").text("Temp(F):" + response.list[20].main.temp);
$("#wind3").text("Wind speed:" + response.list[20].wind.speed + "mph");
humid3.text("Humidity:" + response.list[20].main.humidity);

$("#date4").text(response.list[28].dt_txt);      
$("#temp4").text("Temp(F):" + response.list[28].main.temp);
$("#wind4").text("Wind speed:" + response.list[28].wind.speed + "mph");
humid4.text( "Humidity:" +response.list[28].main.humidity)

$("#date5").text(response.list[36].dt_txt);      
$("#temp5").text("Temp(F):" + response.list[36].main.temp);
$("#wind5").text("Wind speed:" + response.list[36].wind.speed + "mph");
humid5.text("Humidity:" + response.list[36].main.humidity)



      // for (var i = 0; i < response.list.length; i++) {
      //   if (true) { // find some evaluation for noon
          // console.log(response.list.find()
      //   }
      // }
  
    })
    .catch(function (err) {
      console.warn(err);
    });
}

// function findNoon(forcastArr) {
//   return ( === "")
// }

function getUVI(coord) {
  const UVI_URL = "https://api.openweathermap.org/data/2.5/uvi?";
  const LAT = "lat=" + coord.lat;
  const LON = "&lon=" + coord.lon;
  const URL = UVI_URL + LAT + LON + API_KEY;

  $.get(URL)
    // var response = $.get(): when the value is resolved
    .then(function (response) {
      console.log(response);
      $("#uv").text("UV Index: " + response.value);
      if (response.value >= 11){
        $("#uv").removeClass(classNames);

        $("#uv").addClass("higherUV");
      };
      if (response.value < 11 && response.value >= 8){
        $("#uv").removeClass(classNames);

        $("#uv").addClass("highUV");
      }
      if (response.value < 8 && response.value >= 6){
        $("#uv").removeClass(classNames);

        $("#uv").addClass("medUV");
      }
      if (response.value < 6 && response.value >= 3){
        $("#uv").removeClass(classNames);

        $("#uv").addClass("aveUV");
      }
      if (response.value < 3 && response.value >= 0){
        $("#uv").removeClass(classNames);

        $("#uv").addClass("lowUV");
      }

      // how to clear class aft

      
     
    })
    .catch(function (err) {
      console.warn(err);
    });

}

