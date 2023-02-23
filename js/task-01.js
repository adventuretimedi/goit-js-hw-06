"use strict";

const totalCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${totalCategories.length}`);
for (const category of totalCategories) {
  console.log(`Category: ${category.children[0].textContent}`);
  console.log(`Elements: ${category.children[1].children.length}`);
}
