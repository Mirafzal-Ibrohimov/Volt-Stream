$(document).ready(function(){
  $('.carousel').slick({
  slidesToShow: 3,
  dots:true,
  centerMode: true,
  });
});

window.addEventListener('DOMContentLoaded', function () {

  const mainMenu = document.querySelector('.site-nav');
  const closeMenu = document.querySelector('.closeMenu');
  const openMenu = document.querySelector('.openMenu');
  openMenu.addEventListener('click', show);
  closeMenu.addEventListener('click', close);

  function show() {
      mainMenu.style.display = 'flex';
      mainMenu.style.top = '';
  }

  function close() {
      mainMenu.style.top = '-100%';
  }
})

let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.site-nav');
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})