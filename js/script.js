// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

$("#search-button").click(function(){
//   var userInput = $("input").val();
  var request_url = "https://api.giphy.com/v1/gifs/search?q=puppy&rating=pg&api_key=dc6zaTOxFJmzC";

  fetch(request_url)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
     var pic_url = data[0];
        // $('body').append('<img src=' + pic_url + '>');
        console.log(data)
        console.log(data.images.original.url)
    })
  
});

