import Glide from '../libs/glide/glide.min.js';

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



export function glideSlider() {
    let slideGap = 28;

    new Glide(`.glide`, {
        perView: getSlideCount(),
        gap: getSlideGap()
    }).mount();

    window.addEventListener('resize', function () {
        new Glide(`.glide`, {
            perView: getSlideCount(),
            gap: getSlideGap()
        }).mount();
    });

}

