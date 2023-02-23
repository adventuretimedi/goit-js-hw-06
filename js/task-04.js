let counterValue = 0;

const spanValue = document.querySelector('span#value');

const incrementBtn = document.querySelector('button[data-action="increment"]');
incrementBtn.addEventListener("click", () => {
    counterValue += 1;
    spanValue.innerHTML = counterValue;
    console.log(`increment btn clicked, counterValue = ${counterValue}`);
});
console.log(incrementBtn);

const decrementBtn = document.querySelector('button[data-action="decrement"]');
decrementBtn.addEventListener("click", () => {
    counterValue -= 1;
    spanValue.innerHTML = counterValue;
        console.log(`decrement btn clicked, counterValue = ${counterValue}`);

})
console.log(decrementBtn);