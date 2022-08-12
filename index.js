const slides = document.getElementsByClassName("carousel-item");
// console.log(slides);
let slidePosition = 0;

const totalSlides = slides.length;

document
  .getElementById("carousel-btn-next")
  .addEventListener("click", moveToNextSlide);

document
  .getElementById("carousel-btn-prev")
  .addEventListener("click", moveToPreviousSlide);

function invisble() {
  for (let slide of slides) {
    slide.classList.remove("carousel-item-visible");
  }
}

function moveToNextSlide() {
  invisble();
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }

  slides[slidePosition].classList.add("carousel-item-visible");
}

function moveToPreviousSlide() {
  invisble();
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }
  slides[slidePosition].classList.add("carousel-item-visible");
}
