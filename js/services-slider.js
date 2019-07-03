var servicesControl = document.querySelectorAll(".services-pg-item");
var servicesSlides = document.querySelectorAll(".service-item");

var servicesClickHandler = function (pgButton, slide) {
  pgButton.addEventListener("click", function(evt) {
  	evt.preventDefault();
    for (var i = 0; i < servicesSlides.length; i++) {
      if (servicesSlides[i].classList.contains("service-item-current")) {
        servicesSlides[i].classList.remove("service-item-current");
        servicesControl[i].classList.remove("services-pg-item-current");
      }
    }
    slide.classList.add("service-item-current");
    pgButton.classList.add("services-pg-item-current");
  })
};

for (var i = 0; i < servicesControl.length; i++) {
  servicesClickHandler(servicesControl[i], servicesSlides[i])
};