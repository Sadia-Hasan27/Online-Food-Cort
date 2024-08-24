document.addEventListener('DOMContentLoaded', function() {
  const wrappers = document.querySelectorAll('.wrapper');
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');
  let currentIndex = 0;

  function updateSlider() {
      const translateXValue = -currentIndex * 100;
      wrappers.forEach((wrapper) => {
          wrapper.style.transform = `translateX(${translateXValue}%)`;
      });
  }

  nextButton.addEventListener('click', () => {
      if (currentIndex < wrappers.length - 1) {
          currentIndex++;
      } else {
          currentIndex = 0; // Loop back to the first slide
      }
      updateSlider();
  });

  prevButton.addEventListener('click', () => {
      if (currentIndex > 0) {
          currentIndex--;
      } else {
          currentIndex = wrappers.length - 1; // Loop to the last slide
      }
      updateSlider();
  });
});