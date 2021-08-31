const refs = {
    decrementBtn: document.querySelector('[data-action="decrement"]'),
    incrementBtn: document.querySelector('[data-action="increment"]'),

}

refs.decrementBtn.addEventListener('click', onDecrementBtn);
refs.incrementBtn.addEventListener('click', onIncrementBtn);

let counterValue = 1;

// const counterValue = () => {

//     function decrementBtn() {

//         return (total -= 1);
//     }
//     function incrementBtn() {
//         return (total += 1);
//     }
//     console.log(total)
// };

function onDecrementBtn(event) {
    event = counterValue -= 1
    console.log(event)
}

function onIncrementBtn(event) {

    console.log(event)
    return (event += 1)
}
