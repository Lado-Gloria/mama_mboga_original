document.addEventListener("DOMContentLoaded", function() {
    var menuButton = document.querySelector(".hamburger-menu");
    var menu = document.querySelector(".menu");
  
    menuButton.addEventListener("click", function() {
      menu.classList.toggle("open");
    });
  });
  