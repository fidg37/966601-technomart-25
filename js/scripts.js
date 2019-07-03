var contactsWindow = document.querySelector(".map-right");
var writeUsLink = contactsWindow.querySelector(".write-us-button");
var writeUs = document.querySelector(".modal-contact-form");
var writeClose = writeUs.querySelector(".modal-close");
var userName = writeUs.querySelector(".user-name");
var userEmail = writeUs.querySelector(".user-email");
var writeForm = writeUs.querySelector(".write-us-form");
var userText = writeUs.querySelector(".user-text");
var overlay = document.querySelector(".overlay");


var isStorageSupport = true;
var storageName = "";
var storageEmail = "";

var userContent = [userName, userEmail, userText];

try {
  storageName = localStorage.getItem("name");
} catch (err) {
    isStorageSupport = false;
};

try {
    storageEmail = localStorage.getItem("email");
  } catch (err) {
      isStorageSupport = false;
};

writeUsLink.addEventListener("click", function (evt) {
  evt.preventDefault();

  writeUs.classList.add("modal-show");
  overlay.classList.add("overlay-active");
  
  
  if (storageName) {
      userName.value = storageName;
      userEmail.value = storageEmail;
      userText.focus();
  } else {
      userName.focus();
      if (storageEmail) {
          userEmail.value = storageEmail;            
        }
  }

  if (userName && userEmail) {
    userText.focus();
  }
});

writeClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeUs.classList.remove("modal-show");
  overlay.classList.remove("overlay-active");
  writeUs.classList.remove("modal-error");
  for (var i = 0; i < userContent.length; i++) {
    userContent[i].classList.remove("text-error");   
  }
});

writeForm.addEventListener("submit", function (evt) {
  if (!userName.value || !userEmail.value || !userText.value) {
    evt.preventDefault();
    writeUs.classList.remove("modal-error");
    writeUs.offsetWidth = writeUs.offsetWidth;
    writeUs.classList.add("modal-error");
    
    for (var i = 0; i < userContent.length; i++) {
        userContent[i].classList.add("text-error");  
    }

    for (var i = 0; i < userContent.length; i++) {
       var contentValue = userContent[i];
       if (!contentValue.value) {
         contentValue.focus();
         i = userContent.length;
       }
    }
    
  } else if (isStorageSupport) {
      localStorage.setItem("name", userName.value);
      localStorage.setItem("email", userEmail.value);
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (writeUs.classList.contains("modal-show")) {
      writeUs.classList.remove("modal-show");
      overlay.classList.remove("overlay-active");
      writeUs.classList.remove("modal-error");
      for (var i = 0; i < userContent.length; i++) {
        userContent[i].classList.remove("text-error");   
      }
    }
  }
});

overlay.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeUs.classList.remove("modal-show");
  overlay.classList.remove("overlay-active");
  writeUs.classList.remove("modal-error");
  for (var i = 0; i < userContent.length; i++) {
    userContent[i].classList.remove("text-error");   
  }
});

//Карта

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

//Слайдер

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

//Корзина

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

//Слайдер сервисов
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