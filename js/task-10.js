"use strict"
const $howMuchBoxes = document.querySelector("input[type='number']");
const $createBtn = document.querySelector("button[data-create]");
const $destroyBtn = document.querySelector("button[data-destroy]");
const $boxesContainer = document.querySelector("#boxes");
let amountOfBoxes = 0;

$howMuchBoxes.addEventListener("input", (evt) => {
  amountOfBoxes = parseInt(evt.currentTarget.value);
});

$createBtn.addEventListener("click", () => {
  createBoxes(amountOfBoxes, getRandomHexColor());
});

$destroyBtn.addEventListener("click", () => {
  removeBoxes();
});

function createBoxes(amount) {
  for (let i = 0; i < amount; i++){
    const $box = document.createElement("div");
    $box.style.width = `${30 + 10 * i}px`;
    $box.style.height = `${30 + 10 * i}px`;
    $box.style.backgroundColor = getRandomHexColor();
    $boxesContainer.append($box);
  }
}

function removeBoxes() {
  for (const box of [...$boxesContainer.children]) {
    box.remove();
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
