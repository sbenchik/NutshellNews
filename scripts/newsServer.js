var sortBy = "latest";  //top, latest, popular
var cityName = "Nashville";


$.get("https://newsapi.org/v1/articles?source=the-next-web&sortBy=" + sortBy +"&apiKey=eba604d3c61e4c06a49c9c2d727b7659", function(data, status){
        console.log(data);
    });


$.get("http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&APPID=a29fff7fa1bce3c0229d7f6f97530e87", function(data, status){
        console.log(data);
    });
