$(document).ready(function () {


  var emotions = ["lucky", "awesome", "hyped" , "bad" , "sad"];
  var divider = 0;
  var apiKey = "ieKS1cEoA0whNt3E5nXD19zwZzqeZo8I"; //magical cat button API

  function showButtons() {

    divider++;
    $("#addButtons").empty();
    for (var i = 0; i < emotions.length; i++)
    
    { 
// created method to color the button differently 
      if (divider % 5 == 0 ) {
        var button = $("<button>");
        button.addClass("emotions btn btn-danger");
        button.attr("data-name", emotions[i]);
        button.text(emotions[i]);
        $("#addButtons").append(button);

      }

      else if (divider % 4 == 0)
      {
        var button = $("<button>");
        button.addClass("emotions btn btn-primary");
        button.attr("data-name", emotions[i]);
        button.text(emotions[i]);
        $("#addButtons").append(button);

      }
      else if (divider % 3 == 0)
      {
        var button = $("<button>");
        button.addClass("emotions btn btn-secondary");
        button.attr("data-name", emotions[i]);
        button.text(emotions[i]);
        $("#addButtons").append(button);

      }
      else if (divider % 2 == 0)
      {
        var button = $("<button>");
        button.addClass("emotions btn btn-warning");
        button.attr("data-name", emotions[i]);
        button.text(emotions[i]);
        $("#addButtons").append(button);

      }
      else if (divider % 1 == 0)
      {
        var button = $("<button>");
        button.addClass("emotions btn btn-success");
        button.attr("data-name", emotions[i]);
        button.text(emotions[i]);
        $("#addButtons").append(button);
      }
      else {
        var button = $("<button>");
        button.addClass("emotions btn btn-dark");
        button.attr("data-name", emotions[i]);
        button.text(emotions[i]);
        $("#addButtons").append(button);


      }

      console.log(divider);
      divider++
    }
  }

  showButtons();

  $("#searchButton").on("click", function (event) {
    event.preventDefault();

    searchResult = $("#searchInput").val().trim();
    if (searchResult != "") {
      emotions.push(searchResult);
      showButtons();
      searchGifs();
     

    }

    // added this else statement so that it wont generate any blank buttons , 
    else { alert("pick a topic please") }

    showButtons();
  });





function searchGifs() {
  // set the search term to the value input by the user
  var searchImage = $(this).attr("data-name");
  if (searchImage === undefined) {
    searchImage = searchResult;
  }

  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchImage + "&api_key=" + apiKey +"&limit=10&offset=0";
  console.log(apiKey) ;
  console.log(searchImage);

  $.ajax({
      url: queryURL,
      method: "GET"
  }).then(function (response) {
      var results = response.data;
      for (var i = 0; i < results.length; i++) {

          var resultDiv = $("<div>");                                
          var p = $("<p>").text("Rating: " + results[i].rating);    
          var newGif = $("<img>").attr('data-state', 'animate');       

          let gifUrl = results[i].images.original.url;           
          newGif.attr("src", gifUrl);                              
          newGif.addClass("gif");

          let stillURL = results[i].images.fixed_width_still.url;    
          newGif.attr("data-animate", gifUrl);
          newGif.attr("data-still", stillURL);

          $("#gifImage").append(newGif);
          resultDiv.append(newGif);              
          resultDiv.append(p);

          $("#gifImage").prepend(resultDiv);     
      }
  });
}


});