const inputName = document.querySelector("input#name-input");
const outputName = document.querySelector("span#name-output");

inputName.addEventListener("input", (event) => {
  const currentVal = event.currentTarget.value;
  outputName.textContent = currentVal.length === 0 ? "Anonymous" : currentVal;
  console.log(event.currentTarget.value);
});
