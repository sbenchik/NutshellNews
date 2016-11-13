$(document).ready(function() {

    var source = "techcrunch";  //"the-next-web" is default
    var sortBy = "latest";  //top, latest, popular
    var cityName = "Nashville";
    

    $.get("https://newsapi.org/v1/articles?source=" + source + "&sortBy=" + sortBy +"&apiKey=eba604d3c61e4c06a49c9c2d727b7659", function(data, status){
        //console.log(data);  //just for visualization

        var author; var description; var publishedAt; var title; var url; var urlToImage;

        for (var i = 0; i < data['articles'].length; i++) {
            author = data['articles'][i]['author'];
            description = data['articles'][i]['description'].substring(0, 100) + "...";
            publishedAt = data['articles'][i]['publishedAt'];
            title = data['articles'][i]['title'];
            url = data['articles'][i]['url'];
            urlToImage = data['articles'][i]['urlToImage'];            
                                    
            
            $("#title" + i).text(title);
            $("#newsImage" + i).attr("src", urlToImage);
            $("#description" + i).text(description);
            $("#description" + i).attr("href", url);

            
            
            
            
            

        }
        

    });


    $.get("http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=imperial&APPID=a29fff7fa1bce3c0229d7f6f97530e87", function(data, status){
        //console.log(data);  //just for visualization

        var name = data['name'];
        var humidity = data['main']['humidity'];
        var temp = data['main']['temp'];
        var temp_max = data['main']['temp_max'];
        var temp_min = data['main']['temp_min'];
        var windDeg = data['wind']['deg'];
        var windSpeed = data['wind']['speed'];
        var description = data['weather']['0']['description'];
        
        
        $("#temp").text(temp + "°F");

    });
    
});
