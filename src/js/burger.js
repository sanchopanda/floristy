const burger = document.querySelector(`.burger`);
const menu = document.querySelector(`.header__menu`);
const logo = document.querySelector(`.header__logo`);
const container = document.querySelector(`.header__burger-container`);
const title = document.querySelector(`.header__title`);

export function openMenu() {
    container.onclick = () => {
        burger.classList.toggle(`burger--open`);
        menu.classList.toggle(`header__menu--open`);
        logo.classList.toggle(`header__logo--open`);
        title.classList.toggle(`header__title--close`)
    };
};
