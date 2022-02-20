const $categories = document.querySelector("#categories");
const $categoriesItems = document.querySelectorAll(".item");


console.log(`Number of categories: ${$categories.children.length}`);
console.log("");
for(const item of $categoriesItems){
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.children[1].children.length}`);
    console.log("");
}
