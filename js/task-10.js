function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxes = document.querySelector("div#boxes");
function createBoxes(amount) {
  let div = "";
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const color = getRandomHexColor();
    div += `<div style="width:${size}px; height:${size}px; background-color: ${color};"></div>`;
    size += 10;
  }
  console.log(amount, div);
  boxes.insertAdjacentHTML("beforeend", div);
}

const inputNumber = document.querySelector("input");
const createBtn = document.querySelector("button[data-create]");
createBtn.addEventListener("click", () => {
  createBoxes(Number(inputNumber.value));
});

function destroyBoxes() {
  boxes.innerHTML = "";
}

const destroyBtn = document.querySelector("button[data-destroy]");
destroyBtn.addEventListener("click", destroyBoxes);
