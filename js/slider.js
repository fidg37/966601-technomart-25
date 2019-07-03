var slider = document.querySelector(".promo-slider");
var slides = slider.querySelectorAll(".slide");
var pagination = slider.querySelectorAll(".pg-button");

var nextSlide = slider.querySelector(".next-slide");
var previousSlide =slider.querySelector(".previous-slide");

var clickHandler = function (pgButton, slide) {
  pgButton.addEventListener("click", function() {
    for (var i = 0; i < slides.length; i++) {
      if (slides[i].classList.contains("slide-current")) {
        slides[i].classList.remove("slide-current");
        pagination[i].classList.remove("pg-current");
      }
    }
    slide.classList.add("slide-current");
    pgButton.classList.add("pg-current");
  })
};

nextSlide.addEventListener("click", function() {
  for (var i = 0; i < slides.length; i++) {
    if (slides[i].classList.contains("slide-current") && i + 1 < slides.length) {
        slides[i].classList.remove("slide-current");
        slides[i + 1].classList.add("slide-current");
        pagination[i].classList.remove("pg-current");
        pagination[i + 1].classList.add("pg-current");
        i = slides.length;
    } else if (slides[i].classList.contains("slide-current") && i + 1 >= slides.length) {
        slides[i].classList.remove("slide-current");
        slides[0].classList.add("slide-current");
        pagination[i].classList.remove("pg-current");
        pagination[0].classList.add("pg-current");
        i = slides.length;
    }
  }
});

previousSlide.addEventListener("click", function() {
    for (var i = 0; i < slides.length; i++) {
      if (slides[i].classList.contains("slide-current") && i !== 0) {
          slides[i].classList.remove("slide-current");
          slides[i - 1].classList.add("slide-current");
          pagination[i].classList.remove("pg-current");
          pagination[i - 1].classList.add("pg-current");
          i = slides.length;
      } else if (slides[i].classList.contains("slide-current") && i == 0) {
          slides[i].classList.remove("slide-current");
          slides[slides.length - 1].classList.add("slide-current");
          pagination[i].classList.remove("pg-current");
          pagination[slides.length - 1].classList.add("pg-current");
          i = slides.length;
      }
    }
  });


for (var i = 0; i < pagination.length; i++) {
  clickHandler(pagination[i], slides[i])
};