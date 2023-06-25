document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector(".slider");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    const slides = slider.querySelectorAll("img");
    const slideCount = slides.length;
    const imageWidth = slider.clientWidth / slideCount;
    let currentPosition = 0;
  
    function slideTo(position) {
      slider.style.transform = `translateX(-${position}px)`;
      currentPosition = position;
    }
  
    function slidePrev() {
      currentPosition -= imageWidth;
      if (currentPosition < 0) {
        currentPosition = (slideCount - 1) * imageWidth;
      }
      slideTo(currentPosition);
    }
  
    function slideNext() {
      currentPosition += imageWidth;
      if (currentPosition >= slideCount * imageWidth) {
        currentPosition = 0;
      }
      slideTo(currentPosition);
    }
  
    prevBtn.addEventListener("click", slidePrev);
    nextBtn.addEventListener("click", slideNext);
  });