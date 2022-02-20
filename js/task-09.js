"use strict";
const $body = document.querySelector("body");
const $currentColor = document.querySelector(".color");
const $changeColorBtn = document.querySelector(".change-color");

$changeColorBtn.addEventListener("click", () => {
  colorChanger(getRandomHexColor());
});

function colorChanger(callback) {
  $body.style.backgroundColor = callback;
  $currentColor.textContent = callback;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
