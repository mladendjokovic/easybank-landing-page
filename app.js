let navToggle = document.querySelector('.mobile-toggle');
let hamburger = document.querySelector('.hamburger');
let closeNav = document.querySelector('.close');
let nav = document.getElementById('nav-menu');
let navBackground = document.querySelector('nav > .navbar >#nav-background');

navToggle.addEventListener('click', function() {
   nav.classList.toggle('show');
   navBackground.classList.toggle('nav-bg');
   hamburger.classList.toggle('display-n');
   closeNav.classList.toggle('display-i-b');
});