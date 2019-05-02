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

    $("#searchButton").on("click", function (event) {
        event.preventDefault();                          

        searchResult = $("#searchInput").val().trim();
        if (searchResult != ""){
        feels.push(searchResult);}

        // added this else statement so that it wont generate any blank buttons , 
        else {alert("pick a topic please")}

        showButtons();
    });


});

