$(function() {
    $(".devour").on("click", function(event) {
      var id = $(this).data("id");
      var eaten = $(this).data("devouered");
  
      var newEatenState = {
        devouered: eaten
      };
  
      // Send the PUT request.
      $.ajax("/" + id, {
        type: "PUT",
        data: newEatenState
      }).then(
        function() {
          console.log("changed devouered to", eaten)
          // Reload the page to get the updated list
          location.reload();
        }
      );
      
      
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        name: $("#ba").val().trim(),
        
      };
  
      // Send the POST request.
      $.ajax("/", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  