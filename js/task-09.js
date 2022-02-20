"use strict";
const $body = document.querySelector("body");
const $currentColor = document.querySelector(".color");
const $changeColorBtn = document.querySelector(".change-color");

$changeColorBtn.addEventListener("click", () => {
  colorChanger(getRandomHexColor());
});

function colorChanger(color) {
  $body.style.backgroundColor = color;
  $currentColor.textContent = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
