
var hamburgerMenu = document.querySelector('.hamburger-menu');
var navLinks = document.querySelector('.nav-links');

document.addEventListener('click', function(event) {
  var targetElement = event.target;

  if (targetElement !== hamburgerMenu && !hamburgerMenu.contains(targetElement)) {
    navLinks.classList.remove('active');
  }
});

hamburgerMenu.addEventListener('click', function() {
  navLinks.classList.toggle('active');
});