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
    navbar.style.backgroundColor = '#fff'; // 배경색을 빨간색으로 변경
  } else {
    document.body.style.overflow = ''; // 스크롤 금지 해제
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

// 화살표 클릭하면 project conianter로 스크롤링
document.addEventListener('DOMContentLoaded', function () {
  var link = document.querySelector('.project_arrow');
  var container = document.querySelector('.project_container');

  link.addEventListener('click', function (e) {
    e.preventDefault();
    var navbarHeight = document.querySelector('.navbar').offsetHeight;
    var scrollToPosition = container.offsetTop - navbarHeight;
    window.scrollTo({ top: scrollToPosition, behavior: 'smooth' });
  });
});
