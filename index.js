const loginPopUp = document.querySelector(".login-pop-up");
const regPopUp = document.querySelector(".reg-pop-up");
const register = document.querySelector(".register");
const signInLink = document.querySelector("#signInLink");
const signUpLink = document.querySelector("#signUpLink");
const signUpBtn = document.querySelector("#signUpBtn");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");

const loginBox = function () {
  loginPopUp.style.visibility = "visible";
  loginPopUp.style.left = "50%";
  regPopUp.style.visibility = "hidden";
    regPopUp.style.left = "-50%";
};

const regBox = function () {
  regPopUp.style.visibility = "visible";
  regPopUp.style.left = "50%";
  loginPopUp.style.visibility = "hidden";
  loginPopUp.style.left = "-50%";
};

register.addEventListener("click", function (e) {
  e.preventDefault;
  loginBox();
});

signUpLink.addEventListener("click", function (e) {
  e.preventDefault;
  regBox();
});

signInLink.addEventListener("click", function (e) {
  e.preventDefault;

  loginBox();
});
