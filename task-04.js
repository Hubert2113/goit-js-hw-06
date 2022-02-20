"use strict";
const $value = document.querySelector("#value");
const $decrementButton = document.querySelector(
  'button[data-action = "decrement"]'
);
const $incrementButton = document.querySelector(
  'button[data-action = "increment"]'
);

$value.setAttribute("value", 0);
let counterValue = parseInt($value.getAttribute("value"));

$decrementButton.addEventListener("click", () => {
  $value.setAttribute("value", counterValue - 1);
  counterValue -= 1;
  $value.textContent = counterValue;
});

$incrementButton.addEventListener("click", () => {
  $value.setAttribute("value", counterValue + 1);
  counterValue += 1;
  $value.textContent = counterValue;
});
