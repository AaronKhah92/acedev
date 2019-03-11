// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBrand = document.querySelector('.menu-brand');
const navItems = document.querySelectorAll('.nav-item')

// Set the initial state of the menu
let menuShowing  = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if(!menuShowing) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBrand.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));

    // Set menu state
    menuShowing = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBrand.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));

    // Set menu state
    menuShowing = false;

  }
}


