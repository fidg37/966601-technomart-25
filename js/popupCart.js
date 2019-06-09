var cart = document.querySelector(".modal-cart");
var cartLink = document.querySelectorAll(".buy-button");
var overlay = document.querySelector(".overlay");
var cartClose = cart.querySelector(".modal-close");
var continueButton = cart.querySelector(".continue"); 

for (var i = 0; i < cartLink.length; i++) {
  cartLink[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    cart.classList.add("cart-show");
    overlay.classList.add("overlay-active");
  })
};

cartClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  cart.classList.remove("cart-show");
  overlay.classList.remove("overlay-active");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (cart.classList.contains("cart-show")) {
      cart.classList.remove("cart-show");
      overlay.classList.remove("overlay-active"); 
    }
  }
});

overlay.addEventListener("click", function (evt) {
  evt.preventDefault();
  cart.classList.remove("cart-show");
  overlay.classList.remove("overlay-active");
});

continueButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  cart.classList.remove("cart-show");
  overlay.classList.remove("overlay-active");
});