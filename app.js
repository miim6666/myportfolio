$(function() {
  $('a').click(function() {
    $('.nav-links.open').fadeOut();
  });  
  $('.hamburger').click(function() {
    $('.nav-links.open').fadeIn();
  });
  });


const hamburger = document.querySelector('.hamburger');
const navlinks = document.querySelector('.nav-links');
const links = document.querySelector('.nav-links li');

hamburger.addEventListener('click', () => {
  navlinks.classList.toggle('open');
});