const logIn = document.querySelector(".navbar-login");
const userPopup = document.querySelector(".userPopup");
const resourcePopup = document.querySelector(".resourcePopup");
const closePopup = document.querySelector(".close-icon");
const closePopup2 = document.querySelector(".closePop-icon");
const closePopup3 = document.querySelector(".close-icon2");
const body = document.querySelector("body");
const signUpLink = document.querySelector(".signUpLink");
const signInLink = document.querySelector(".signInLink");
const logInForm = document.querySelector(".login-form");
const signUpForm = document.querySelector(".signUp-form");
const signInEmail = document.querySelector(".signInEmail");
const signInPassword = document.querySelector(".signInPassword");
const loginBtn = document.querySelector(".login-btn");
const signUpUser = document.querySelector(".signUp-username");
const signUpEmail = document.querySelector(".signUp-email");
const signUpPassword = document.querySelector(".signUp-password");
const signUpPassword2 = document.querySelector(".signUp-password2");
const signUpBtn = document.querySelector(".signUp-btn");
const errorMessage = document.querySelector(".errorMessage");
const resourceBtn = document.querySelector(".hero-btn");
const createResource = document.querySelector(".resource-btn");
const webName = document.querySelector(".websiteName");
const webLink = document.querySelector(".websiteLink");
const webDescription = document.querySelector("#webDescription");
const resourceForm = document.querySelector(".resourceForm");
const resourceContainer = document.querySelector(".resource-container");

let resources = [];

function printOnUi() {
  resourceContainer.textContent = "";

  resources.forEach(function (allResources) {
    let printSiteName = allResources.siteName;
    let printSiteLink = allResources.siteLink;
    let printDescription = allResources.siteDescription;

    // let previousDIV = document.createElement("div");
    // previousDIV.classList.add("previous-box");
    // let previousIcon = document.createElement("span");
    // previousIcon.classList.add("material-symbols-outlined");
    // previousIcon.textContent = "navigate_before";

    let resourceDIV = document.createElement("div");
    resourceDIV.classList.add("resource-box");

    let resourceHeaderDIV = document.createElement("div");
    resourceHeaderDIV.classList.add("resource-header");
    let nameOfWebsiteText = document.createElement("a");
    nameOfWebsiteText.setAttribute("href", `${printSiteLink}`);
    nameOfWebsiteText.setAttribute("target", "_blank");
    nameOfWebsiteText.textContent = printSiteName;

    let deleteIcon = document.createElement("span");
    deleteIcon.className = "material-symbols-outlined";
    deleteIcon.textContent = "delete";

    let descriptionDIV = document.createElement("div");
    descriptionDIV.classList.add("description");

    let descriptionText = document.createElement("p");
    descriptionText.classList.add("description-text");
    descriptionText.textContent = printDescription;

    // let nextDIV = document.createElement("div");
    // nextDIV.classList.add("next-box");
    // let nextIcon = document.createElement("span");
    // nextIcon.classList.add("material-symbols-outlined");
    // nextIcon.textContent = "navigate_next";

    descriptionDIV.append(descriptionText);
    resourceHeaderDIV.append(nameOfWebsiteText, deleteIcon);
    resourceDIV.append(resourceHeaderDIV, descriptionDIV);

    resourceContainer.append(resourceDIV);
  });
}

logIn.addEventListener("click", popUpLogIn);
signUpLink.addEventListener("click", popUpSignUp);
signInLink.addEventListener("click", popUpSignIn);
closePopup.addEventListener("click", closePopUp);
closePopup2.addEventListener("click", closePopUp2);
closePopup3.addEventListener("click", closePopUp3);

function popUpLogIn(e) {
  userPopup.style.display = "flex";
}

function closePopUp(e) {
  userPopup.style.display = "none";
}

function closePopUp2(e) {
  e.preventDefault;
  userPopup.style.display = "none";
}
function closePopUp3(e) {
  e.preventDefault;
  resourcePopup.style.display = "none";
}

function popUpSignUp(e) {
  e.preventDefault;
  signUpForm.style.display = "flex";
  logInForm.style.display = "none";
  closePopUp.style.display = "none";
}

function popUpSignIn(e) {
  e.preventDefault;
  signUpForm.style.display = "none";
  logInForm.style.display = "flex";
}

loginBtn.addEventListener("click", validateUser);
signUpBtn.addEventListener("click", validateRegistration);

function validateUser(e) {
  e.preventDefault;

  let signInEmailValue = signInEmail.value.trim();
  let signInPasswordValue = signInPassword.value.trim();

  if (signInEmailValue === "") {
    signInEmail.style.borderColor = "red";
  } else {
    signInEmail.style.borderColor = "green";
  }
  if (signInPasswordValue === "") {
    signInPassword.style.borderColor = "red";
  } else {
    signInPassword.style.borderColor = "green";
  }
}

function validateRegistration(e) {
  let signUpUserValue = signUpUser.value.trim();
  let signUpEmailValue = signUpEmail.value.trim();
  let signUpPasswordValue = signUpPassword.value.trim();
  let signUpPassword2Value = signUpPassword2.value.trim();

  if (signUpUserValue === "") {
    signUpUser.style.borderColor = "red";
  } else {
    signUpUser.style.borderColor = "green";
  }
  if (signUpEmailValue === "") {
    signUpEmail.style.borderColor = "red";
  } else {
    signUpEmail.style.borderColor = "green";
  }
  if (
    (signUpPasswordValue === "", signUpPasswordValue !== signUpPassword2Value)
  ) {
    signUpPassword.style.borderColor = "red";
  } else {
    signUpPassword.style.borderColor = "green";
  }
  if (signUpPassword2Value === "") {
    signUpPassword2.style.borderColor = "red";
  } else if (signUpPasswordValue !== signUpPassword2Value) {
    errorMessage.innerHTML = "Password does not match. Please try again";
    signUpPassword2.style.borderColor = "red";
  } else {
    signUpPassword2.style.borderColor = "green";
    errorMessage.innerHTML = "";
  }
}

resourceBtn.addEventListener("click", resourceRegPop);

function resourceRegPop(event) {
  event.preventDefault;

  resourcePopup.style.display = "flex";
}

// createResource.addEventListener("click", resourceValidate);

// function resourceValidate(event) {
//   event.preventDefault;

//   let webNameValue = webName.value.trim();
//   let webLinkValue = webLink.value.trim();
//   let webDescriptionValue = webDescription.value.trim();
// }

function fetchResources() {
  if (localStorage.getItem("resources")) {
    resources = JSON.parse(localStorage.getItem("resources"));
  }

  printOnUi();
}

fetchResources();

resourceForm.addEventListener("submit", handleForm);

function handleForm(e) {
  e.preventDefault();

  let nameOfWeb = webName.value.trim();
  let nameOfLink = webLink.value.trim();
  let description = webDescription.value.trim();

  if (nameOfWeb === "") {
    webName.style.borderColor = "#cc3333";
  } else {
    webName.style.borderColor = "green";
  }
  if (nameOfLink === "") {
    webLink.style.borderColor = "#cc3333";
  } else {
    webLink.style.borderColor = "green";
  }
  if (description=== "") {
    webDescription.style.borderColor = "#cc3333";
  } else {
    webDescription.style.borderColor = "green";
  }

  const createdResources = {
    siteName: nameOfWeb,
    siteLink: nameOfLink,
    siteDescription: description,
  };

  resources.push(createdResources);
  localStorage.setItem("resources", JSON.stringify(resources));

  fetchResources();
  resourceForm.reset();
  closePopUp3();
}
