let currentIndex = 0;
let isMoving = false; // Flag to check if the moveSlide function is currently running
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  if (index < 0) {
    index = slides.length - 1;
  } else if (index >= slides.length) {
    index = 0;
  }

  const offset = -index * 600; // Adjust 500px to the width of your images
  const container = document.querySelector('.carousel-container');
  container.style.transform = `translateX(${offset}px)`;

  currentIndex = index;
}

function moveSlide(offset) {
  // Check if the moveSlide function is already running
  if (isMoving) {
    return;
  }

  // Set the flag to true to indicate that the moveSlide function is running
  isMoving = true;

  showSlide(currentIndex + offset);

  // Reset the flag to false after the moveSlide function is complete
  setTimeout(() => {
    isMoving = false;
  }, 1000); // Adjust the timeout value as needed
}

setInterval(() => moveSlide(1), 10000); // Automatically advance the carousel every 5.5 seconds
showSlide(currentIndex); // Initialize the carousel
