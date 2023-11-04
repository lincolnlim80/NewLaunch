let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  if (index < 0) {
    index = slides.length - 1;
  } else if (index >= slides.length) {
    index = 0;
  }

  const offset = -index * 900; // Adjust 500px to the width of your images
  const container = document.querySelector('.carousel-container');
  container.style.transform = `translateX(${offset}px)`;

  currentIndex = index;
}

function moveSlide(offset) {
  showSlide(currentIndex + offset);
}

setInterval(() => moveSlide(1), 5500); // Automatically advance the carousel every 3 seconds
showSlide(currentIndex); // Initialize the carousel

