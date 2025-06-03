document.addEventListener('DOMContentLoaded', function() {
  // Get the hamburger button and nav menu
  var menuToggle = document.querySelector('.menu-toggle');
  var navMenu = document.querySelector('nav ul');

  // Only add event if both exist
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', function() {
      navMenu.classList.toggle('open'); // Show/hide nav links
      // Change button label for accessibility
      if (navMenu.classList.contains('open')) {
        menuToggle.setAttribute('aria-label', 'Close navigation menu');
      } else {
        menuToggle.setAttribute('aria-label', 'Open navigation menu');
      }
    });
    // Optional: Close menu when a link is clicked (for better UX)
    navMenu.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        navMenu.classList.remove('open');
        menuToggle.setAttribute('aria-label', 'Open navigation menu');
      });
    });
  }
});