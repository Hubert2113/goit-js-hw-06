const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const $ingredients = document.querySelector("#ingredients");
const markup = ingredients.map((ingredient) => `<li>${ingredient}</li>`).join("");

$ingredients.insertAdjacentHTML("beforeend", markup);