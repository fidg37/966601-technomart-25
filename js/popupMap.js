var map = document.querySelector(".modal-map");
var mapLink = document.querySelector(".map-link");
var mapClose = map.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  map.classList.add("modal-show");
  overlay.classList.add("overlay-active");
});

mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    map.classList.remove("modal-show");
    overlay.classList.remove("overlay-active");
    console.log("Клик");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (map.classList.contains("modal-show")) {
      map.classList.remove("modal-show");
      overlay.classList.remove("overlay-active");
      
    }
  }
});

overlay.addEventListener("click", function (evt) {
  evt.preventDefault();
  map.classList.remove("modal-show");
  overlay.classList.remove("overlay-active");
});