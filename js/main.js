// Hamburger Menu
const toggleBtn = document.querySelector('.navbar_toggleBtn');
const menu = document.querySelector('.nav_menu');
const navbar = document.querySelector('.navbar');
const nav_menu = document.querySelectorAll('.nav_menu li');

toggleBtn.addEventListener('click', (e) => {
  e.preventDefault();
  menu.classList.toggle('active');
});

//Free load Images
const imagesLoad = [];
function preload() {
  for (let i = 0; i < arguments.length; i++) {
    imagesLoad[i] = new Image();
    imagesLoad[i].src = preload.arguments[i];
  }
}

// Activating Nav Bar
function clickSingleA(a) {
  items = document.querySelectorAll('.single.active');

  if (items.length) {
    items[0].className = 'single';
  }

  a.className = 'single active';
}
