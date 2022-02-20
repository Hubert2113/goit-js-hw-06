"use strict";
const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", (ev) => {
  nameOutput.textContent = ev.currentTarget.value;
  if (ev.currentTarget.value === "") {
    nameOutput.textContent = "Anonymous";
  }
});
