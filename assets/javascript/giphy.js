var emotions = ["lucky", "awesome", "hyped" , "bad" , "sad"];
var divider = 0;
var apiKey = "ieKS1cEoA0whNt3E5nXD19zwZzqeZo8I"; //FROM MY MAGICAL CAT BUTTON API
var searchResult = "";

//shorthanded console log
function q(x){
  console.log(x + " console log");
};

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
        q(divider);
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

    $(document).on("click", ".buttonMaker", searchGifs);
    $(document).on("click",".giffy",animateGif);

 


  $("#searchButton").on("click", function (event) {
    event.preventDefault();
    searchResult = $("#searchInput").val().trim();
    if (searchResult != "") {
      emotions.push(searchResult);
      event.preventDefault();
      searchGifs(searchResult);
      showButtons();
    }

    // added this else statement so that it wont generate any blank buttons , 
    else { alert("pick a topic please") }
    showButtons();
  });

  //onclick event for when the user clicks a button
  function searchGifs() {
    var searchImage = $(this).attr("data-name");
    if (searchImage === undefined) {
        searchImage = searchResult;
    }
    
    var topic =  searchImage;
    console.log(topic)
    console.log("function SearchGif proc")
    var offset = Math.floor(Math.random() * 999);
    console.log(offset)
  
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchImage + "&api_key=" + apiKey +"&limit=10&offset="+offset+"&random";
  
    //ajax
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var results = response.data;
        for (var i = 0; i < results.length; i++) {
  
            var resultDiv = $("<div class='flex-column result'>");                                
            var pTag = $("<p class='d-flex p-2 desc' >").text("Rating: " + results[i].rating);    
            var topicTag = $("<p class='d-flex p-2 desc1' >").text("Topic: " + topic );

            var imgURL = response.data[i].images.fixed_width_still.url;
            var imgURLStill = response.data[i].images.fixed_width_still.url;
            var imgURLAnimate = response.data[i].images.fixed_width_downsampled.url;
            var newGif = $("<img>").attr("src", imgURL).attr("data-still", imgURLStill).attr("data-animate", imgURLAnimate).attr("data-state", "still");
            newGif.addClass("giffy");

            resultDiv.prepend(newGif);              
            resultDiv.prepend(pTag);
            resultDiv.prepend(topicTag);
            $("#gifImage").prepend(resultDiv);     
        }
    });
  }

  showButtons();


  function animateGif() {
    // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
    var state = $(this).attr("data-state");
    console.log(state)
    // If the clicked image's state is still, update its src attribute to what its data-animate value is.
    // Then, set the image's data-state to animate
    // Else set src to the data-still value
    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
  };
  
  
  });