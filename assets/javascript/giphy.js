$(document).ready(function () {

    
    var apiKey = "7MTC1g2AgJ1zKwZ1HoRkVWLwVHIP9Rqp"


    $("#cat-button").on("click", function() {
      var request = prompt("What Gif do you Want?")

      //

      var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=" + apiKey +  "&tag=" + request ;

      //
      $.ajax({
        url: queryURL,
        method: "GET"
      })

      //
        .then(function(response) {

        //
          var imageUrl = response.data.image_original_url;

          //
          var catImage = $("<img>");

          //
          catImage.attr("src", imageUrl);
          catImage.attr("alt", "cat image");

          //
          $("#images").prepend(catImage);
        });
    });

  });
