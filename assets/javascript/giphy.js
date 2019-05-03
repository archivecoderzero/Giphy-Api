$(document).ready(function () {


  var feels = ["lucky", "awesome", "hyped" , "bad" , "sad"];
  var divider = 0;

  console.log(divider)
  function showButtons() {

 
    $("#addButtons").empty();
    for (var i = 0; i < feels.length; i++)
    
    { 
// created method to color the button differently 
      if (divider % 5 == 0 ) {
        var button = $("<button>");
        button.addClass("feels btn btn-danger");
        button.attr("data-name", feels[i]);
        button.text(feels[i]);
        $("#addButtons").append(button);
        divider++
        console.log(divider)

      }

      else if (divider % 4 == 0)
      {
        var button = $("<button>");
        button.addClass("feels btn btn-primary");
        button.attr("data-name", feels[i]);
        button.text(feels[i]);
        $("#addButtons").append(button);
        divider++

      }
      else if (divider % 3 == 0)
      {
        var button = $("<button>");
        button.addClass("feels btn btn-secondary");
        button.attr("data-name", feels[i]);
        button.text(feels[i]);
        $("#addButtons").append(button);
        divider++

      }
      else if (divider % 2 == 0)
      {
        var button = $("<button>");
        button.addClass("feels btn btn-warning");
        button.attr("data-name", feels[i]);
        button.text(feels[i]);
        $("#addButtons").append(button);
        divider++

      }
      else if (divider % 1 == 0)
      {
        var button = $("<button>");
        button.addClass("feels btn btn-success");
        button.attr("data-name", feels[i]);
        button.text(feels[i]);
        $("#addButtons").append(button);
        divider++
      }
      else {
        var button = $("<button>");
        button.addClass("feels btn btn-dark");
        button.attr("data-name", feels[i]);
        button.text(feels[i]);
        $("#addButtons").append(button);
        divider++


      }


    }
  }

  showButtons();

  $("#searchButton").on("click", function (event) {
    event.preventDefault();

    searchResult = $("#searchInput").val().trim();
    if (searchResult != "") {
      feels.push(searchResult);
      showButtons();
     

    }

    // added this else statement so that it wont generate any blank buttons , 
    else { alert("pick a topic please") }

    showButtons();
  });


});

