$(document).ready(function () {


  var feels = ["lucky" ,"awesome" , "hyped" ];  
      function showButtons() {

        $("#addButtons").empty();
        for (var i = 0; i < feels.length; i++) {
            var button = $("<button>");
            button.addClass("feels btn btn-danger");     
            button.attr("data-name", feels[i]);  
            button.text(feels[i]);                 
            $("#addButtons").append(button);         
        }
    }

    showButtons();

    // on click of the search button, call function that saves text input 
    $("#searchButton").on("click", function (event) {
        event.preventDefault();                                //prevents page from refreshing

        searchResult = $("#searchInput").val().trim();    //grab the text entered into the form
        console.log("input: " + searchResult);

        feels.push(searchResult);
        console.log(feels);

        showButtons();
    });


});

