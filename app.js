function slidesPlugin(activeSlide = 0){
  const slide = document.querySelectorAll(".slide");

  slide[activeSlide].classList.add('active');

  slide.forEach((slide) => {
    slide.addEventListener("click", () => {
      clearActiveListeenr();
      slide.classList.add("active");
    });
  });

  function clearActiveListeenr() {
    slide.forEach((slide) => {
      slide.classList.remove("active");
    });
  }
}
slidesPlugin()