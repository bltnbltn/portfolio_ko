// Hamburger Menu
const toggleBtn = document.querySelector('.navbar_toggleBtn');
const menu = document.querySelector('.nav_menu');
const navbar = document.querySelector('.navbar');
const nav_menu = document.querySelectorAll('.nav_menu li');

toggleBtn.addEventListener('click', (e) => {
  e.preventDefault();
  menu.classList.toggle('active');

  // 햄버거 메뉴가 활성화되면 스크롤을 금지
  if (menu.classList.contains('active')) {
    document.body.style.overflow = 'hidden';
    navbar.style.backgroundColor = '#fff';
  } else {
    document.body.style.overflow = '';
  }
});

// 스크롤 이벤트 발생 시, 햄버거 메뉴가 열려있을 때 스크롤을 막음
window.addEventListener('scroll', function () {
  if (menu.classList.contains('active')) {
    window.scrollTo(0, 0);
  }
});

document
  .querySelector('.navbar_toggleBtn')
  .addEventListener('click', function () {
    this.classList.toggle('active');
  });

window.addEventListener('scroll', function () {
  var navbar = document.querySelector('.navbar');
  if (window.innerWidth <= 768) {
    // 모바일 뷰포트 너비 체크
    if (window.scrollY > 0) {
      navbar.style.backgroundColor = '#fff';
    } else {
      navbar.style.backgroundColor = 'transparent';
    }
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

// Activating Nav Bar
function clickSingleA(a) {
  items = document.querySelectorAll('.single.active');

  if (items.length) {
    items[0].className = 'single';
  }

  a.className = 'single active';
}

document.addEventListener('DOMContentLoaded', function () {
  var link = document.querySelector('.project_arrow');
  var container = document.querySelector('.project_section');

  link.addEventListener('click', function (e) {
    e.preventDefault();
    var isMobile = window.innerWidth <= 768; // 모바일인지 확인
    var navbarHeight = document.querySelector('.navbar').offsetHeight;
    var scrollOffset = isMobile ? navbarHeight : 0; // 모바일이면 네비게이션 바 높이를 뺌
    var containerTop = container.getBoundingClientRect().top;
    window.scrollTo({ top: containerTop - scrollOffset, behavior: 'smooth' });
  });
});
