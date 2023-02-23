"use strict";
// Напиши скрипт, який для кожного елемента масиву ingredients:

//     Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
//     Додасть назву інгредієнта як його текстовий вміст.
//     Додасть елементу клас item.
//     Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const allIngredients = document.querySelector("ul#ingredients");

const allElements = ingredients.map((ingredient) => {
  const element = document.createElement("li");
  element.textContent = ingredient;
  element.classList.add("ingridient-element");

  return element;
});
console.log(allIngredients);
allIngredients.append(...allElements);

// Вл-ть innerHTML зберігає вміст елемента, включно з тегами як рядок.
// Значення, що повертається, - це завжди валідний HTML - код.
