var emotions = ["lucky", "awesome", "hyped" , "bad" , "sad"];
var divider = 0;
var apiKey = "ieKS1cEoA0whNt3E5nXD19zwZzqeZo8I"; //magical cat button API
var searchResult = "";

$(document).ready(function () {



  function showButtons() {

    divider++;
    $("#addButtons").empty();
    for (var i = 0; i < emotions.length; i++)
    
    { 
// created method to color the button differently 
      if (divider % 5 == 0 ) {
        var button = $("<button>");
        button.addClass("buttonMaker btn btn-danger");
        button.attr("data-name", emotions[i]);
        button.text(emotions[i]);
        $("#addButtons").append(button);

      }

      else if (divider % 4 == 0)
      {
        var button = $("<button>");
        button.addClass("buttonMaker btn btn-primary");
        button.attr("data-name", emotions[i]);
        button.text(emotions[i]);
        $("#addButtons").append(button);

      }
      else if (divider % 3 == 0)
      {
        var button = $("<button>");
        button.addClass("buttonMaker btn btn-secondary");
        button.attr("data-name", emotions[i]);
        button.text(emotions[i]);
        $("#addButtons").append(button);

      }
      else if (divider % 2 == 0)
      {
        var button = $("<button>");
        button.addClass("buttonMaker btn btn-warning");
        button.attr("data-name", emotions[i]);
        button.text(emotions[i]);
        $("#addButtons").append(button);

      }
      else if (divider % 1 == 0)
      {
        var button = $("<button>");
        button.addClass("buttonMaker btn btn-success");
        button.attr("data-name", emotions[i]);
        button.text(emotions[i]);
        $("#addButtons").append(button);
      }
      else {
        var button = $("<button>");
        button.addClass("buttonMaker btn btn-dark");
        button.attr("data-name", emotions[i]);
        button.text(emotions[i]);
        $("#addButtons").append(button);


      }

      // console.log(divider);
      divider++
    }
  }

 

  $("#searchButton").on("click", function (event) {
    event.preventDefault();

    searchResult = $("#searchInput").val().trim();
    if (searchResult != "") {
      emotions.push(searchResult);
      event.preventDefault();
      searchGifs();
    }

    // added this else statement so that it wont generate any blank buttons , 
    else { alert("pick a topic please") }

    showButtons();
  });

  showButtons();

  $(".buttonMaker").on("click", function (event) {
    event.preventDefault();
    var searchResult =  $(this).attr("data-name");
    console.log(searchResult)
    clickButton(searchResult);
  });


  function clickButton(searchResult) {
    // set the search term to the value input by the user
    var searchImage = searchResult;

    var offset = Math.floor(Math.random() * 999);
    console.log(offset)
  
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchImage + "&api_key=" + apiKey +"&limit=10&offset="+offset+"&random";
    // console.log(apiKey) ;
    console.log( "this is the " + searchResult + " query");
  
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var results = response.data;
        for (var i = 0; i < results.length; i++) {
  
            var resultDiv = $("<div class='flex-column result'>");                                
            var pTag = $("<p class='d-flex p-2 desc' >").text("Rating: " + results[i].rating);    
            var newGif = $("<img class='d-flex pic'>").attr('data-state', 'animate');       
  
            let gifUrl = results[i].images.original.url;           
            newGif.attr("src", gifUrl);                              
            newGif.addClass("gif");
  
            let stillURL = results[i].images.fixed_width_still.url;    
            newGif.attr("data-animate", gifUrl);
            newGif.attr("data-still", stillURL);
  
            $("#gifImage").append(newGif);
            resultDiv.append(newGif);              
            resultDiv.append(pTag);
  
            $("#gifImage").prepend(resultDiv);     
        }
    });
  }


  //onclick event for when the user clicks a button
  function searchGifs() {
    // set the search term to the value input by the user
    var searchImage = $(this).attr("data-name");

    // console.log("attribute of " + searchImage)
    if (searchImage === undefined) {
      searchImage = searchResult;
    }
    var offset = Math.floor(Math.random() * 999);
    console.log(offset)
  
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchImage + "&api_key=" + apiKey +"&limit=10&offset="+offset+"&random";
    // console.log(apiKey) ;
    console.log( "this is the " + searchImage + " query");
  
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var results = response.data;
        for (var i = 0; i < results.length; i++) {
  
            var resultDiv = $("<div class='flex-column result'>");                                
            var pTag = $("<p class='d-flex p-2 desc' >").text("Rating: " + results[i].rating);    
            var newGif = $("<img class='d-flex pic'>").attr('data-state', 'animate');       
  
            let gifUrl = results[i].images.original.url;           
            newGif.attr("src", gifUrl);                              
            newGif.addClass("gif");
  
            let stillURL = results[i].images.fixed_width_still.url;    
            newGif.attr("data-animate", gifUrl);
            newGif.attr("data-still", stillURL);
  
            $("#gifImage").append(newGif);
            resultDiv.append(newGif);              
            resultDiv.append(pTag);
  
            $("#gifImage").prepend(resultDiv);     
        }
    });
  }


  
        $(".gif").on("click", function () {

            var state = $(this).attr("data-state");

            if (state == "still") {
                $(this).attr("src", $(this).attr("data-animate"));
                $(this).attr("data-state", "animate")

            } else {
                $(this).attr("src", $(this).attr("data-still"));
                $(this).attr("data-state", "still")
            }
        });

  
  
  });
