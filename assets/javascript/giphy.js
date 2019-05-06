var buttonsTopic = ["funny", "emotional", "fantastic" , "great" , "amusing"];
var divider = 0;
var apiKey = "ieKS1cEoA0whNt3E5nXD19zwZzqeZo8I"; //FROM MY MAGICAL CAT BUTTON API
var searchResult = "";

//shorthanded console log
// function q(x){
//   console.log(x + " console log");
// };

$(document).ready(function () {



  function showButtons() {

    divider++;
    $("#addButtons").empty();
    for (var i = 0; i < buttonsTopic.length; i++)
    
    { 
// created method to color the button differently 
      if (divider % 5 == 0 ) {
        var button = $("<button>");
        button.addClass("buttonMaker btn btn-danger");
        button.attr("data-name", buttonsTopic[i]);
        button.text(buttonsTopic[i]);
        $("#addButtons").append(button);
        // q(divider);
      }

      else if (divider % 4 == 0)
      {
        var button = $("<button>");
        button.addClass("buttonMaker btn btn-primary");
        button.attr("data-name", buttonsTopic[i]);
        button.text(buttonsTopic[i]);
        $("#addButtons").append(button);

      }
      else if (divider % 3 == 0)
      {
        var button = $("<button>");
        button.addClass("buttonMaker btn btn-secondary");
        button.attr("data-name", buttonsTopic[i]);
        button.text(buttonsTopic[i]);
        $("#addButtons").append(button);

      }
      else if (divider % 2 == 0)
      {
        var button = $("<button>");
        button.addClass("buttonMaker btn btn-warning");
        button.attr("data-name", buttonsTopic[i]);
        button.text(buttonsTopic[i]);
        $("#addButtons").append(button);

      }
      else if (divider % 1 == 0)
      {
        var button = $("<button>");
        button.addClass("buttonMaker btn btn-success");
        button.attr("data-name", buttonsTopic[i]);
        button.text(buttonsTopic[i]);
        $("#addButtons").append(button);
      }
      else {
        var button = $("<button>");
        button.addClass("buttonMaker btn btn-dark");
        button.attr("data-name", buttonsTopic[i]);
        button.text(buttonsTopic[i]);
        $("#addButtons").append(button);


      }
      // console.log(divider);
      divider++
    }
  }

    $(document).on("click", ".buttonMaker", searchGifs);

 


  $("#searchButton").on("click", function (event) {
    event.preventDefault();
    searchResult = $("#searchInput").val().trim();
    if (searchResult != "") {
      buttonsTopic.push(searchResult);
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
    // console.log(topic)
    // console.log("function SearchGif proc")
    var offset = Math.floor(Math.random() * 999);
    // console.log(offset)
  
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchImage + "&api_key=" + apiKey +"&limit=10&offset="+offset+"&random";
  
    //ajax
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var results = response.data;
        console.log(results)
        for (var i = 0; i < results.length; i++) {
            var x = i + 1;
            var resultDiv = $("<div class='flex-column result'>");                                
            var pTag = $("<p class='d-flex p-2 desc' >").text("Rating: " + results[i].rating);    
            var topicTag = $("<p class='d-flex p-2 desc1' >").text("Topic: " + topic );
            var download = $('<a>').text("DOWNLOAD");
            
            var mainURL = response.data[i].images.original.url;
            var parsedDL ="https://i.giphy.com"+mainURL.slice(24);
            var imgURL = response.data[i].images.fixed_width_still.url;
            var imgURLStill = response.data[i].images.fixed_width_still.url;
            var imgURLAnimate = response.data[i].images.fixed_width_downsampled.url;
            var newGif = $("<img>").attr("src", imgURL).attr("data-still", imgURLStill).attr("data-animate", imgURLAnimate).attr("data-state", "still");
            newGif.addClass("giffy");
            download.addClass("btn btn-outline-dark");
            download.attr("download","FILE_NAME.jpg");
            download.attr("href",parsedDL);
            download.attr("target","_blank");



            $("#gifImage").append(newGif);
            resultDiv.append(newGif);              
            resultDiv.append(pTag);
            resultDiv.append(topicTag);
            resultDiv.append(download);              
            $("#gifImage").prepend(resultDiv);     
        }
    });
  }

  showButtons();



  $(document).on("click",".giffy",animateGif);



  function animateGif() {
    // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
    var state = $(this).attr("data-state");
    // console.log(state)
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
  function noBG() {
    $(".navbar").css("background", "black");
    $(".navbar-brand.mb-0.h1").css("color", "black");
    $(".jumbotron").css("background", "black");
    $("body").css("background", "black");
    $(".btn.btn-info.btn-lg.search").css("background", "black");
    $("#clearButton").css("background", "black");
  }

  function reBG() {

    $(".navbar").css("color","midnightblue");
    $(".navbar").css("background-image","url('assets/images/nav.gif')");
   
    $(".navbar-brand.mb-0.h1").css("color", "white");


    $(".jumbotron").css("background-image","url('assets/images/bodybg.gif')");
    $(".jumbotron").css("background-position","center");
    $(".jumbotron").css("background-repeat","no-repeat");
    $(".jumbotron").css("background-size","cover");

    $("body").css("background-image","url('assets/images/bgbod.gif')");

    $(".btn.btn-info.btn-lg.search").css("background-image","url('assets/images/buttonbg.gif')");

    $("#clearButton").css("background-image","url('assets/images/clearhover.gif')");
  }


  var togler = false;

// TOGGLE FUNCTION 
  $("#toggler").click(function(){
    console.log("clicking")
    if (togler === true){
    reBG();
    togler = false;
    console.log("togler NO BG")}
    else  {
    noBG();
    console.log("togler REBG")
    togler = true;
    }
  });

  $("#clearButton").click(function(){
    $("#gifImage").empty();

  });

  $("#clearTopic").click(function(){
    buttonsTopic = ["funny", "emotional", "fantastic" , "great" , "amusing"];
    showButtons();
  });


  
  });
