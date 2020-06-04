import Glide from '../libs/glide/glide.min.js';

const burger = document.querySelector(`.burger`);
const menu = document.querySelector(`.header__menu`);
const logo = document.querySelector(`.header__logo`);


burger.onclick = () => {
    burger.classList.toggle(`burger--open`);
    menu.classList.toggle(`header__menu--open`);
    logo.classList.toggle(`header__logo--open`);
};

new Glide('.glide').mount()

