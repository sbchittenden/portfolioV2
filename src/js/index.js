import '../scss/main.scss';

var template = require('./indexTemplate.hbs');
var portfolioJSON = require('../portfolio.json');

console.log(portfolioJSON);

var waveMenu = document.querySelector('.wave-menu');
var hamburger = document.querySelector('.h-to-x');
var contentEntry = document.querySelector('.content-wrapper');

contentEntry.innerHTML = template(portfolioJSON);

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('--is-open');
  waveMenu.classList.toggle('--is-expanded');
});



