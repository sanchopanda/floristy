

const menu = document.querySelectorAll(`.menu__item--header`);

export function activeMenuItem() {
    menu.forEach((item) => {
        if (item.querySelector(`.menu__link`).getAttribute('href') == window.location.pathname) {
            item.classList.add('menu__item--active');
        };
    });
}

