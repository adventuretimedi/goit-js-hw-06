// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input)
// і змінює інлайн - стиль span#text, оновлюючи властивість font - size.
// В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.
"use strict";
const fontSizeControl = document.querySelector("input#font-size-control");
const textSpan = document.querySelector("span#text");
const updateSpan = () => {
  textSpan.style.fontSize = fontSizeControl.value + "px";
};

updateSpan();

fontSizeControl.addEventListener("input", updateSpan);
