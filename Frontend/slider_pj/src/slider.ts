const left = <HTMLIFrameElement>document.querySelector(".left");
const right = <HTMLIFrameElement>document.querySelector(".right");
const slider = <HTMLDivElement>document.querySelector(".slider");
const images: NodeListOf<HTMLImageElement> =
  document.querySelectorAll(".image");
const bottom = <HTMLDivElement>document.querySelector(".bottom");

let slideNumber: number = 1;
const len: number = images.length;

const nextSlide = () => {
  slider.style.transform = `translateX(-${slideNumber * 800}px)`;
  slideNumber++;
};

const prevSlide = () => {
  slider.style.transform = `translateX(-${(slideNumber - 2) * 800}px)`;
  slideNumber--;
};

const getFirstSlide = () => {
  slider.style.transform = `translateX(0px)`;
  slideNumber = 1;
};

const getLastSlide = () => {
  slider.style.transform = `translateX(-${(len - 1) * 800}px)`;
  slideNumber = len;
};

right.addEventListener("click", () => {
  slideNumber < len ? nextSlide() : getFirstSlide();
});

left.addEventListener("click", () => {
  slideNumber > 1 ? prevSlide() : getLastSlide();
});

for (let i = 0; i < len; i++) {}
