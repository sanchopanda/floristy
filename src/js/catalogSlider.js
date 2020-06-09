import Glide from '../libs/glide/glide.min.js';

const slider = document.querySelector(`.catalog__slider`);

const getSlideCount = () => {
    if (window.innerWidth >= 1366) {
        return 4;
    } else if (window.innerWidth >= 768) {
        return 2;
    } else {
        return 1;
    };
};

const getSlideGap = () => {
    if (window.innerWidth >= 1366) {
        return 60;
    };
    return 28;
};



export function catalogSlider() {
    if (slider) {
        new Glide(`.catalog__slider`, {
            perView: getSlideCount(),
            gap: getSlideGap()
        }).mount();

        window.addEventListener('resize', function () {
            new Glide(`.catalog__slider`, {
                perView: getSlideCount(),
                gap: getSlideGap()
            }).mount();
        });
    }


}

