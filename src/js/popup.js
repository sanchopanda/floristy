const popup = document.querySelector(".popup");
const popupClose = document.querySelector(".popup__close");
const button = document.querySelector(".popup-opener");

const openPopup = () => {
    popup.classList.add(`popup--open`);
};
const closePopup = () => popup.classList.remove(`popup--open`);


export function togglePopup() {
    button.addEventListener('click', () => {
        openPopup();
        popupClose.addEventListener('click', () => {
            closePopup();
        });
        document.querySelector(`body`).addEventListener('mousedown', (e) => {
            if (e.target != popup && !popup.contains(e.target)) {
                closePopup();
            };
        });
    });
};



