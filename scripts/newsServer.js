$(document).ready(function() {

    var source = "techcrunch";  //"the-next-web" is default
    var sortBy = "latest";  //top, latest, popular
    var cityName = "Nashville";    


    $.get("https://newsapi.org/v1/articles?source=" + source + "&sortBy=" + sortBy +"&apiKey=eba604d3c61e4c06a49c9c2d727b7659", function(data, status){
        console.log(data);  //just for visualization

        var author; var description; var publishedAt; var title; var url; var urlToImage;

        for (var i = 0; i < data['articles'].length; i++) {
            author = data['articles'][i]['author'];
            description = data['articles'][i]['description'].substring(0, 100) + "...";
            publishedAt = data['articles'][i]['publishedAt'];
            title = data['articles'][i]['title'];
            url = data['articles'][i]['url'];
            urlToImage = data['articles'][i]['urlToImage'];            

            if (author == null || author.lenth == 0 ) {
                $("#title" + i).text(title);    
            } else {
                $("#title" + i).text(author + " - " + title);
            }
            
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
    
    $("#theNextWeb").click(function() {
        //reseting the button colors
        $("#theNextWeb").css('color', '#49BF59');
        $("#BBC").css('color', 'white');
        $("#CNN").css('color', 'white');
        $("#WIRED").css('color', 'white');
        $("#Time").css('color', 'white');
        $("#IGN").css('color', 'white');
        $("#techCrunch").css('color', 'white');
        
        source = "the-next-web";
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


                if (author == null || author.lenth == 0 ) {
                    $("#title" + i).text(title);    
                } else {
                    $("#title" + i).text(author + " - " + title);
                }
                $("#newsImage" + i).attr("src", urlToImage);
                $("#description" + i).text(description);
                $("#description" + i).attr("href", url);

            }


        });
    });
    
    
    $("#BBC").click(function() {
        //reseting the button colors
        $("#theNextWeb").css('color', 'white');
        $("#BBC").css('color', '#49BF59');
        $("#CNN").css('color', 'white');
        $("#WIRED").css('color', 'white');
        $("#Time").css('color', 'white');
        $("#IGN").css('color', 'white');
        $("#techCrunch").css('color', 'white');
        
        source = "bbc-news";
        sortBy = "top";
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


                if (author == null || author.lenth == 0 ) {
                    $("#title" + i).text(title);    
                } else {
                    $("#title" + i).text(author + " - " + title);
                }
                $("#newsImage" + i).attr("src", urlToImage);
                $("#description" + i).text(description);
                $("#description" + i).attr("href", url);

            }


        });

        sortBy = "latest";
    });

    
    $("#CNN").click(function() {
        //reseting the button colors
        $("#theNextWeb").css('color', 'white');
        $("#BBC").css('color', 'white');
        $("#CNN").css('color', '#49BF59');
        $("#WIRED").css('color', 'white');
        $("#Time").css('color', 'white');
        $("#IGN").css('color', 'white');
        $("#techCrunch").css('color', 'white');;
        
        source = "cnn";
        sortBy = "top";
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


                if (author == null || author.lenth == 0 ) {
                    $("#title" + i).text(title);    
                } else {
                    $("#title" + i).text(author + " - " + title);
                }
                $("#newsImage" + i).attr("src", urlToImage);
                $("#description" + i).text(description);
                $("#description" + i).attr("href", url);

            }


        });

        sortBy = "latest";
    });
    
    $("#WIRED").click(function() {
        //reseting the button colors
        $("#theNextWeb").css('color', 'white');
        $("#BBC").css('color', 'white');
        $("#CNN").css('color', 'white');
        $("#WIRED").css('color', '#49BF59');
        $("#Time").css('color', 'white');
        $("#IGN").css('color', 'white');
        $("#techCrunch").css('color', 'white');
        
        source = "espn";
        sortBy = "popular";
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


                if (author == null || author.lenth == 0 ) {
                    $("#title" + i).text(title);    
                } else {
                    $("#title" + i).text(author + " - " + title);
                }
                $("#newsImage" + i).attr("src", urlToImage);
                $("#description" + i).text(description);
                $("#description" + i).attr("href", url);

            }


        });

        sortBy = "latest";
    });
    
    $("#Time").click(function() {
        //reseting the button colors
        $("#theNextWeb").css('color', 'white');
        $("#BBC").css('color', 'white');
        $("#CNN").css('color', 'white');
        $("#WIRED").css('color', 'white');
        $("#Time").css('color', '#49BF59');
        $("#IGN").css('color', 'white');
        $("#techCrunch").css('color', 'white');
        
        source = "time";
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


                if (author == null || author.lenth == 0 ) {
                    $("#title" + i).text(title);    
                } else {
                    $("#title" + i).text(author + " - " + title);
                }
                $("#newsImage" + i).attr("src", urlToImage);
                $("#description" + i).text(description);
                $("#description" + i).attr("href", url);

            }


        });
    });
    
    $("#IGN").click(function() {
        //reseting the button colors
        $("#theNextWeb").css('color', 'white');
        $("#BBC").css('color', 'white');
        $("#CNN").css('color', 'white');
        $("#WIRED").css('color', 'white');
        $("#Time").css('color', 'white');
        $("#IGN").css('color', '#49BF59');
        $("#techCrunch").css('color', 'white');
        
        source ="ign";
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


                if (author == null || author.lenth == 0 ) {
                    $("#title" + i).text(title);    
                } else {
                    $("#title" + i).text(author + " - " + title);
                }
                $("#newsImage" + i).attr("src", urlToImage);
                $("#description" + i).text(description);
                $("#description" + i).attr("href", url);

            }


        });
    });
    
    $("#techCrunch").click(function() {
        //reseting the button colors
        $("#theNextWeb").css('color', 'white');
        $("#BBC").css('color', 'white');
        $("#CNN").css('color', 'white');
        $("#WIRED").css('color', 'white');
        $("#Time").css('color', 'white');
        $("#IGN").css('color', 'white');
        $("#techCrunch").css('color', '#49BF59');
        
        source = "techcrunch";
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


                if (author == null || author.lenth == 0 ) {
                    $("#title" + i).text(title);    
                } else {
                    $("#title" + i).text(author + " - " + title);
                }
                $("#newsImage" + i).attr("src", urlToImage);
                $("#description" + i).text(description);
                $("#description" + i).attr("href", url);

            }


        });
    });
});
