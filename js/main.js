// Hamburger Menu
const toggleBtn = document.querySelector('.navbar_toggleBtn');
const menu = document.querySelector('.nav_menu');
const navbar = document.querySelector('.navbar');
const nav_menu = document.querySelectorAll('.nav_menu li');

toggleBtn.addEventListener('click', (e) => {
  e.preventDefault();
  menu.classList.toggle('active');
  if (menu.classList.contains('active')) {
    navbar.style.padding = '10px 0px 0px 0px';
  } else {
    navbar.style.padding = '14px 0px';
  }
});

//Free load Images
const imagesLoad = [];
function preload() {
  for (let i = 0; i < arguments.length; i++) {
    imagesLoad[i] = new Image();
    imagesLoad[i].src = preload.arguments[i];
  }
}

preload(
  '../img/art/drawing_1.png',
  '../img/art/drawing_2.png',
  '../img/art/drawing_3.png',
  '../img/art/drawing_4.png',
  '../img/art/drawing_5.png',
  '../img/art/eros1.png',
  '../img/art/matilda.jpg',
  '../img/art/pho.jpg',
  '../img/art/merry.jpg'
);

// Activating Nav Bar
function clickSingleA(a) {
  items = document.querySelectorAll('.single.active');

  if (items.length) {
    items[0].className = 'single';
  }

  a.className = 'single active';
}
