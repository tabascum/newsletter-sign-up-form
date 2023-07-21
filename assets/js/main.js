const emailAdress = document.getElementById("email");
const sucessEmail = document.querySelector("#dynamic-email");

const subscribeBtn = document.querySelector("#subscribe-btn");
const subscribePage = document.querySelector(".subscribe");
const sucessPage = document.querySelector(".sucess");
const error = document.querySelector("#label-error");
const dismissBtn = document.querySelector(".button");

subscribeBtn.onclick = () => {
  const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  emailAdress.value.match(validRegex)
    ? (error.style.display = "none") &&
      (sucessPage.style.display = "flex") &&
      (subscribePage.style.display = "none")
    : (error.style.display = "flex") && (sucessPage.style.display = "none");
};

dismissBtn.onclick = () => {
  sucessPage
    ? (sucessPage.style.display = "none") &&
      (subscribePage.style.display = "flex") &&
      (emailAdress.value = "")
    : (sucessPage.style.display = "flex") &&
      (subscribePage.style.display = "none");
};

emailAdress.oninput = () => {
  sucessEmail.innerText = emailAdress.value;
};
