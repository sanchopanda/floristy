import Glide from '../libs/glide/glide.min.js';

const slider = document.querySelector(`.example__slider`);

const getSlideGap = () => {
    if (window.innerWidth >= 1366) {
        return 20;
    } else if (window.innerWidth >= 768) {
        return 24;
    } else {
        return 15;
    };
};

export function exampleSlider() {
    if (slider) {
        new Glide(slider, {
            type: "carousel",
            perView: 4,
            gap: getSlideGap()
        }).mount();

        window.addEventListener('resize', function () {
            new Glide(slider, {
                type: "carousel",
                perView: 4,
                gap: getSlideGap()
            }).mount();
        });
    }

}

