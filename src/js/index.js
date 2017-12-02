import '../scss/main.scss';

var template = require('./indexTemplate.hbs');
var portfolioJSON = require('../portfolio.json');




var waveMenu = document.querySelector('.wave-menu');
var hamburger = document.querySelector('.h-to-x');
var contentEntry = document.querySelector('.content-wrapper');


contentEntry.innerHTML = template(portfolioJSON);




hamburger.addEventListener('click', function () {
  toggleMenu();
});

waveMenu.addEventListener('click', function(e){
  if (e.target.nodeName === 'A') {
    toggleMenu();
  }
});

window.addEventListener('hashchange', renderView);

window.onload = function() {
  renderView();
};
/* ======================================================

function definitions

======================================================== */

function renderView(e) {

  // e.preventDefault();

  var pages = queryPages();
  var newHash = getNewHash(e);
  var oldHash = getOldHash(e);
  var targetPage;

  var previousPage = Array.from(pages).filter(item => item.classList.contains(oldHash))[0] || document.querySelector(`.hello`);

  if (newHash) {
    targetPage = document.querySelector(`.${newHash}`);
  } else {
    if (window.location.hash !== '') {
      targetPage = document.querySelector(`.${window.location.hash.substr(1)}`);
    } else {
      targetPage = document.querySelector(`.hello`);
    }
  }

  //swap section visiblity
  previousPage.classList.remove('--is-visible');
  targetPage.classList.add('--is-visible');

}

function getNewHash(e) {
  if (e !== undefined) {
    return e.newURL.substr(e.newURL.indexOf('#') + 1);
  }
}

function getOldHash(e) {
  if (e && e.oldURL.indexOf('#') !== -1 ) {
    return e.oldURL.substr(e.oldURL.indexOf('#') + 1) || 'hello';
  }
  return null;
}

function queryPages() {
  return document.getElementsByClassName('section');
}

function toggleMenu() {
  hamburger.classList.toggle('--is-open');
  waveMenu.classList.toggle('--is-expanded');
}