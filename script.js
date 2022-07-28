const menu_burger = document.querySelector('.menu-burger');
const menu = document.querySelector('.header-menu');
const body = document.querySelector('body');

menu_burger.addEventListener("click", function (e) {
    menu_burger.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('lock');
});