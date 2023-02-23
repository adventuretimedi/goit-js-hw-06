function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const body = document.querySelector("body");
const span = document.querySelector("span.color");
const changeColorBtn = document.querySelector("button.change-color");

changeColorBtn.addEventListener("click", () => {
  const color = getRandomHexColor();
  console.log(color);
  body.style.backgroundColor = color;
  span.textContent = color;
});
