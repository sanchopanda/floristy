

const menu = document.querySelectorAll(`.menu__item--header`);

export function activeMenuItem() {
    menu.forEach((item) => {
        if (window.location.pathname.includes(item.querySelector(`.menu__link`).getAttribute('href'))) {
            item.classList.add('menu__item--active');
        };
    });
}

