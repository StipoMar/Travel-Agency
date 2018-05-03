$(document).ready(function () {
  // Side Nav with mobile
  $('.button-collapse').sideNav();
  // Sliders
  $('.slider').slider({
    height: 600,
    interval: 5000,
    transition: 500,
    indicators: false
  });
  // Scrollspy
  $('.scrollspy').scrollSpy();

});