var nav = document.querySelector('.main-nav');
var toggle = document.querySelector('.logo__toggle');
var navMenu = document.querySelector('.site-list');

nav.classList.remove('main-nav--no-js');

toggle.addEventListener('click', function () {
  toggle.classList.toggle('logo__toggle--open');
  navMenu.classList.toggle('site-list--open');
});
