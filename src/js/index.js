import "../scss/main.scss";

console.log("IT IS ALL WORKING!!!");


var waveMenu = document.querySelector('.wave-menu');
var hamburger = document.querySelector('.h-to-x');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('--is-open');
  waveMenu.classList.toggle('--is-expanded');
});