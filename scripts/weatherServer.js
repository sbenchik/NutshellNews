$(document).ready(function() {
    
    var cityName = "Nashville";    

    $.get("http://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&units=imperial&APPID=a29fff7fa1bce3c0229d7f6f97530e87", function(data, status){
            console.log(data);  //just for visualization

            var name; var dateTime; var temp; var temp_max; var temp_min; var description; var windDeg; var windSpeed;

            for (var i = 0; i < data['list'].length; i++) {
                name = data['city']['name'];
                dateTime = data['list'][i]['dt_txt'];
                temp = data['list'][i]['main']['temp'];
                temp_max = data['list'][i]['main']['temp_max'];
                temp_min = data['list'][i]['main']['temp_min'];
                description = data['list'][i]['weather']['0']['description'];
                windDeg = data['list'][i]['wind']['deg'];
                windSpeed = data['list'][i]['wind']['speed'];
                
                console.log(description);
                
                if (i == 0) {
                    $("#currentTemp").text("");
                    $("#currentTemp").append("<li>Location: " + name + "</li>");
                    $("#currentTemp").append("<li>Date: " + dateTime + "</li>");
                    $("#currentTemp").append("<li>Current Temp: " + temp + "°F</li>");
                    $("#currentTemp").append("<li>High Temp: " + temp_max + "°F</li>");
                    $("#currentTemp").append("<li>Low Temp: " + temp_min + "°F</li>");
                    $("#currentTemp").append("<li>Wind Degree: " + windDeg + "°</li>");
                    $("#currentTemp").append("<li>Wind Speed: " + windSpeed + " mph</li>");
                    
                    
                } else if (i == 1) {
                    if (description.includes("sky")) {
                        $("#icon1").attr('src', 'icons/sunny.png');
                    } else if (description.includes("clouds")) {
                        $("#icon1").attr('src', 'icons/cloudy_no_sun.png');
                    } else if (description.includes("rain")) {
                        $("#icon1").attr('src', 'icons/rainy.png');
                    } else if (description.includes("sun")) {
                        $("#icon1").attr('src', 'icons/sunny.png');
                    } else if (description.includes("snow")) {
                        $("#icon1").attr('src', 'icons/snow.png');
                    } else if (description.includes("storm")) {
                        $("#icon1").attr('src', 'icons/storm.png');
                    } else if (description.includes("clear")) {
                        $("#icon1").attr('src', 'icons/sunny.png');
                    } else {
                        $("#icon1").attr('src', 'icons/cloudy.png');
                    }
                    
                    $("#highTemp1").text(temp_max + "°F");
                    $("#description").text(description);
                } else if (i == 8) {
                    if (description.includes("sky")) {
                        $("#icon2").attr('src', 'icons/sunny.png');
                    } else if (description.includes("clouds")) {
                        $("#icon2").attr('src', 'icons/cloudy_no_sun.png');
                    } else if (description.includes("rain")) {
                        $("#icon2").attr('src', 'icons/rainy.png');
                    } else if (description.includes("sun")) {
                        $("#icon2").attr('src', 'icons/sunny.png');
                    } else if (description.includes("snow")) {
                        $("#icon2").attr('src', 'icons/snow.png');
                    } else if (description.includes("storm")) {
                        $("#icon2").attr('src', 'icons/storm.png');
                    } else if (description.includes("clear")) {
                        $("#icon2").attr('src', 'icons/sunny.png');
                    } else {
                        $("#icon2").attr('src', 'icons/cloudy.png');
                    }
                    
                    
                    $("#highTemp2").text(temp_max + "°F");
                    $("#description2").text(description);
                } else if (i == 16) {
                    if (description.includes("sky")) {
                        $("#icon3").attr('src', 'icons/sunny.png');
                    } else if (description.includes("clouds")) {
                        $("#icon3").attr('src', 'icons/cloudy_no_sun.png');
                    } else if (description.includes("rain")) {
                        $("#icon3").attr('src', 'icons/rainy.png');
                    } else if (description.includes("sun")) {
                        $("#icon3").attr('src', 'icons/sunny.png');
                    } else if (description.includes("snow")) {
                        $("#icon3").attr('src', 'icons/snow.png');
                    } else if (description.includes("storm")) {
                        $("#icon3").attr('src', 'icons/storm.png');
                    } else if (description.includes("clear")) {
                        $("#icon3").attr('src', 'icons/sunny.png');
                    } else {
                        $("#icon3").attr('src', 'icons/cloudy.png');
                    }
                    
                    $("#highTemp3").text(temp_max + "°F");
                    $("#description3").text(description);
                } else if (i == 24) {
                    if (description.includes("sky")) {
                        $("#icon4").attr('src', 'icons/sunny.png');
                    } else if (description.includes("clouds")) {
                        $("#icon4").attr('src', 'icons/cloudy_no_sun.png');
                    } else if (description.includes("rain")) {
                        $("#icon4").attr('src', 'icons/rainy.png');
                    } else if (description.includes("sun")) {
                        $("#icon4").attr('src', 'icons/sunny.png');
                    } else if (description.includes("snow")) {
                        $("#icon4").attr('src', 'icons/snow.png');
                    } else if (description.includes("storm")) {
                        $("#icon4").attr('src', 'icons/storm.png');
                    } else if (description.includes("clear")) {
                        $("#icon4").attr('src', 'icons/sunny.png');
                    } else {
                        $("#icon4").attr('src', 'icons/cloudy.png');
                    }
                    
                    $("#highTemp4").text(temp_max + "°F");                
                    $("#description4").text(description);
                } else if (i == 32) {
                    if (description.includes("sky")) {
                        $("#icon5").attr('src', 'icons/sunny.png');
                    } else if (description.includes("clouds")) {
                        $("#icon5").attr('src', 'icons/cloudy_no_sun.png');
                    } else if (description.includes("rain")) {
                        $("#icon5").attr('src', 'icons/rainy.png');
                    } else if (description.includes("sun")) {
                        $("#icon5").attr('src', 'icons/sunny.png');
                    } else if (description.includes("snow")) {
                        $("#icon5").attr('src', 'icons/snow.png');
                    } else if (description.includes("storm")) {
                        $("#icon5").attr('src', 'icons/storm.png');
                    } else if (description.includes("clear")) {
                        $("#icon5").attr('src', 'icons/sunny.png');
                    } else {
                        $("#icon5").attr('src', 'icons/cloudy.png');
                    }
                    
                    $("#highTemp5").text(temp_max + "°F");
                    $("#description5").text(description);
                }
            }
            
    });
    
    
});