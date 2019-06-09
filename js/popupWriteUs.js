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