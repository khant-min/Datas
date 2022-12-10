"use strict";
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".image");
// let slideNumber: number = 1;
// const len: number = images.length;
// const nextSlide = () => {
//   slider.style.transform = `translateX(-${slideNumber * 800}px)`;
//   slideNumber++;
// };
// const prevSlide = () => {
//   slider.style.transform = `translateX(-${(slideNumber - 2) * 800}px)`;
//   slideNumber--;
// };
// const getFirstSlide = () => {
//   slider.style.transform = `translateX(0px)`;
//   slideNumber = 1;
// };
// const getLastSlide = () => {
//   slider.style.transform = `translateX(-${(len - 1) * 800}px)`;
//   slideNumber = len;
// };
// right.addEventListener("click", () => {
//   slideNumber < len ? nextSlide() : getFirstSlide();
// });
// left.addEventListener("click", () => {
//   slideNumber > 1 ? prevSlide() : getLastSlide();
// });
let slideNumber = 1;
right.addEventListener("click", () => {
    if (slideNumber < images.length) {
        slider.style.transform = `translateX(-${slideNumber * 800}px)`;
        slideNumber++;
    }
    else {
        slider.style.transform = `translateX(-0px)`;
        slideNumber = 1;
    }
});
left.addEventListener("click", () => {
    if (slideNumber > 1) {
        slider.style.transform = `translateX(-${(slideNumber - 2) * 800}px)`;
        // slider.style.transform = `translateX(-${(slideNumber - 2) * 800}px)`;
        slideNumber--;
    }
    else {
        slider.style.transform = `translateX(-${(images.length - 1) * 800}px)`;
        slideNumber = images.length;
    }
});
