"use strict";
const $loginForm = document.querySelector(".login-form");

$loginForm.addEventListener("submit", loginHandler);

function loginHandler(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Please, enter your login details");
  } else {
    const loginDetails = {
      email: email.value,
      password: password.value,
    };
    console.log(loginDetails);
    event.currentTarget.reset();
  }
}
