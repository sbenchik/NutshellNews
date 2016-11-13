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

            }

            console.log(name);
            console.log(dateTime);
            console.log(temp);
            console.log(temp_max);
            console.log(temp_min);
            console.log(description);
            console.log(windDeg);
            console.log(windSpeed);
    });
});