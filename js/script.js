var contactlink = document.querySelector(".js-write");

var popup = document.querySelector(".modal-login");
var close = popup.querySelector(".modal-close");

var form = popup.querySelector("form");
var login = popup.querySelector("[name=your-name]");
var email = popup.querySelector("[name=email]");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}     

contactlink.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  if (storage) {
    login.value = storage;
    email.focus();
  } else {
    login.focus();
  }  
});      

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  if (!login.value || !email.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", login.value);
    } 
  }
});     

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});


var buylink = document.querySelector(".js-buy"); 

var popupbasket = document.querySelector(".modal-login");
var basketclose = popup.querySelector(".modal-close");

buylink.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupbasket.classList.add("modal-show");
});     

basketclose.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupbasket.classList.remove("modal-show");
});      

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupbasket.classList.contains("modal-show")) {
      popupbasket.classList.remove("modal-show");
    }
  }
});




