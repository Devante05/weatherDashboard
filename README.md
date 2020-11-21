Use the [OpenWeather API](https://openweathermap.org/api)

    Weather API
    - http://api.openweathermap.org/data/2.5/weather
    example query:
    http://api.openweathermap.org/data/2.5/weather?q=austin&appid=31d71cb5a78f78a82e0bd617cfe323be&units=imperial

    Forcast API
    - http://api.openweathermap.org/data/2.5/forecast
    example query:
    http://api.openweathermap.org/data/2.5/forecast?q=austin&appid=31d71cb5a78f78a82e0bd617cfe323be&units=imperial


    UVI API
    - http://api.openweathermap.org/data/2.5/uvi

    http://api.openweathermap.org/data/2.5/uvi?lat=37.75&lon=-122.37&appid=31d71cb5a78f78a82e0bd617cfe323be

    Use weather API to get longitude and latitude coordinates
    example query:
    http://api.openweathermap.org/data/2.5/uvi?appid=31d71cb5a78f78a82e0bd617cfe323be&lat=30.27&lon=-97.74


// weather API
$.ajax({}).then(function(response) {
    consol.log(response);

    // UVI API => pass coordinates from weather API to UVI API
    $.ajax({}).then(function(response){

    });

    // 5 day forcast 
    $.ajax({}).then(function(response){

    });
});# weatherDashboard
