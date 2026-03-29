const burgerBtn = document.getElementById('burger-btn');
const menu = document.getElementById('menu');

burgerBtn.addEventListener('click', e => {
  e.stopPropagation();
  menu.classList.toggle('open');
});

document.addEventListener('click', e => {
  if (!menu.contains(e.target)) {
    menu.classList.remove('open');
  }
});
