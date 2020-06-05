import Glide from '../libs/glide/glide.min.js';
import { openMenu } from './burger.js';
import { scrollDown } from './scrollDown.js';
import { togglePopup } from './popup.js';

openMenu();

scrollDown();

togglePopup();

if (window.innerWidth >= 768) {
    new Glide(`.glide`, {
        perView: 2
    }).mount()
} else {
    new Glide(`.glide`, {
        perView: 1
    }).mount()
};

window.addEventListener('resize', function () {
    if (window.innerWidth >= 768) {
        new Glide(`.glide`, {
            perView: 2
        }).mount()
    } else {
        new Glide(`.glide`, {
            perView: 1
        }).mount()
    };
});





