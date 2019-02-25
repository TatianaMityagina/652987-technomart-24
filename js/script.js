var buyLink = document.querySelectorAll(".js-buy");

var basketPopup = document.querySelector(".modal-basket");

if (buyLink.length && basketPopup) {
  var basketClose = basketPopup.querySelector(".modal-close"); 
  var basketOrder = basketPopup.querySelector(".order-button");
  var basketContinue = basketPopup.querySelector(".continue-button");

  for (var i=0; i<buyLink.length; i++) {
    buyLink[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      basketPopup.classList.add("modal-show-basket");
    });
  }

  basketClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    basketPopup.classList.remove("modal-show-basket");
  });
  
  basketOrder.addEventListener("click", function (evt) {
    evt.preventDefault();
    basketPopup.classList.remove("modal-show-basket");
  });
  
  basketContinue.addEventListener("click", function (evt) {
    evt.preventDefault();
    basketPopup.classList.remove("modal-show-basket");
  });
}

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (basketPopup.classList.contains("modal-show-basket")) {
      basketPopup.classList.remove("modal-show-basket");
    }
  }
});


var contactlink = document.querySelector(".js-write");

var popup = document.querySelector(".modal-login");

if (contactlink && popup) {
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
}

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});



var mapLink = document.querySelector(".js-map");

var mapPopup = document.querySelector(".modal-map");

if (mapLink && mapPopup) {
  var mapClose = mapPopup.querySelector(".modal-close");

  mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show-map");
  });
  
  mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show-map");
  });
}

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show-map")) {
      mapPopup.classList.remove("modal-show-map")
    }
  }
});







