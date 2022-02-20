const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const $ingredients = document.querySelector("#ingredients");

for (const ingredient of ingredients) {
  const $ingredient = document.createElement("li");
  $ingredient.textContent = ingredient;
  $ingredient.classList.add("item");
  $ingredients.append($ingredient);
}
