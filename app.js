let navToggle = document.querySelector('.mobile-toggle');
let hamburger = document.querySelector('.hamburger');
let closeNav = document.querySelector('.close');
let menu = document.querySelector('#menu ul');
let background = document.querySelector('#menu');

navToggle.addEventListener('click', function() {
   if(menu.style.opacity != 1) {
      menu.style.opacity = 1;
      menu.style.pointerEvents = "all";
      hamburger.style.display = "none";
      closeNav.style.display = "inline-block";
      background.style.bottom = 0;
      background.style.opacity = 1;
   }
   else {
      menu.style.opacity = 0;
      menu.style.pointerEvents = "none";
      closeNav.style.display = "none";
      hamburger.style.display = "inline-block"
      background.style.bottom = "unset";
      background.style.opacity = 0;
   }
});