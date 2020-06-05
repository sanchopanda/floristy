const down = document.querySelector(`.down`);
const target = document.querySelector(`.catalog`);



export function scrollDown() {
    down.onclick = () => {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
    };
};
