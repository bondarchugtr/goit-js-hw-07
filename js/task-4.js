const refs = {
    decrementBtn: document.querySelector('[data-action="decrement"]'),
    incrementBtn: document.querySelector('[data-action="increment"]'),
    valueSpanBtn: document.querySelector('#value')
}

refs.decrementBtn.addEventListener('click', onDecrementBtn);
refs.incrementBtn.addEventListener('click', onIncrementBtn)

let counterValue = 0;

function onDecrementBtn(event) {
    refs.valueSpanBtn.textContent = counterValue -= 1;
    console.log(event)
}
function onIncrementBtn(event) {
    refs.valueSpanBtn.textContent = counterValue += 1;
    console.log(event)
}

