const refs = {
    decrementBtn: document.querySelector('[data-action="decrement"]'),
    incrementBtn: document.querySelector('[data-action="increment"]'),
    values: document.querySelector('#value')
}
refs.decrementBtn.addEventListener('click', onDecrementBtn);
refs.incrementBtn.addEventListener('click', onIncrementBtn)

function addValue() {

    let counterValue = 0;
    function decrementBtn() {
        return (counterValue -= 1)
    }

    function incrementBtn() {
        return (counterValue += 1);
    }

    return { decrementBtn, incrementBtn }
};

function onDecrementBtn(event) {
    console.log(event)
}
function onIncrementBtn(event) {
    console.log(event)
}


// const btnDecr = document.querySelector('[data-action="decrement"]');
// const btnIncr = document.querySelector('[data-action="increment"]');
// const spanVal = document.querySelector("#value");
// let counterValue = 0;
// const increment = () => (spanVal.textContent = counterValue += 1);
// const decrement = () => (spanVal.textContent = counterValue -= 1);
// btnDecr.addEventListener("click", decrement);
// btnIncr.addEventListener("click", increment);

