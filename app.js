// const menuToggle = document.querySelector('.menu-toggle');
// const primaryMenu = document.getElementById('primary-menu');

// menuToggle.addEventListener('click', function() {
//   primaryMenu.classList.toggle('show'); // Toggle the 'show' class on the menu
//   menuToggle.setAttribute('aria-expanded', primaryMenu.classList.contains('show')); // Update aria-expanded attribute
// });

const menuToggle = document.querySelector('.ham-menu');
const navLinks = document.querySelector('.off-screen-menu');

menuToggle.addEventListener('click', function() {
  navLinks.classList.toggle('active');
  menuToggle.classList.toggle('active');
});
