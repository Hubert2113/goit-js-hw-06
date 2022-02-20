"use strict";
const $fontSizeController = document.querySelector("#font-size-control");
const $text = document.querySelector("#text");

$fontSizeController.addEventListener("input", (ev) => {
  $text.style.fontSize = `${ev.currentTarget.value}px`;
});
