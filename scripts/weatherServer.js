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
                    $("#currentTemp").text("Current Temp: " + temp + "°F High Temp: " + temp_max);
                    
                } else if (i == 1) {
                    if (description.startsWith("cl") {
                        console.log("hi");
                    }
                    
                    $("#highTemp1").text(temp_max + "°F");
                    $("#description").text(description);
                } else if (i == 8) {
                    $("#highTemp2").text(temp_max + "°F");
                    $("#description2").text(description);
                } else if (i == 16) {
                    $("#highTemp3").text(temp_max + "°F");
                    $("#description3").text(description);
                } else if (i == 24) {
                    $("#highTemp4").text(temp_max + "°F");                
                    $("#description4").text(description);
                } else if (i == 32) {
                    $("#highTemp5").text(temp_max + "°F");
                    $("#description5").text(description);
                }
            }
            
    });
    
    
});