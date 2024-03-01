const xmark = document.querySelector(".x--mark");
console.log(xmark);

function falseBars() {
    const ul = document.querySelector(".nav--ul");
    ul.style.postion = "absolute";
    ul.style.left = "-100%";
    ul.style.transition = "0.3s ease";
};

const bars = document.querySelector(".bars");
function trueBars() {
    const ul = document.querySelector(".nav--ul");
    ul.style.postion = "absolute";
    ul.style.left = "0%";
    ul.style.transition = "0.3s ease";
};