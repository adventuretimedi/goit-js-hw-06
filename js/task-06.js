const inputText = document.querySelector("input#validation-input");
inputText.addEventListener("blur", () => {
  console.log(inputText.value, inputText.value.length, inputText.dataset.length);
  if (inputText.value.length === Number(inputText.dataset.length)) {
    inputText.classList.remove("invalid");
    inputText.classList.add("valid");
  } else {
    inputText.classList.remove("valid");
    inputText.classList.add("invalid");
  }
});
