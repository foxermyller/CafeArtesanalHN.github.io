const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const slideWidth = slides[0].clientWidth;
let counter = 0;

function slide() {
  counter++;
  if (counter === slides.length) {
    counter = 0;
  }
  slider.style.transform = `translateX(-${slideWidth * counter}px)`;
}

setInterval(slide, 3000); // Cambia de imagen cada 3 segundos
