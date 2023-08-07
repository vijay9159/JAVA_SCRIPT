window.onload = function() {
    var navbar = document.getElementById("navbar");
    navbar.addEventListener("click", function(event) {
      event.preventDefault();
      window.location.href = event.target.href;
    });
  };