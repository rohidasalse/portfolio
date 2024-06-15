const menuToggle = document.querySelector('.ham-menu');
const navLinks = document.querySelector('.off-screen-menu');

menuToggle.addEventListener('click', function() {
  navLinks.classList.toggle('active');
  menuToggle.classList.toggle('active');
});
