
// const refs = {
//     spanValueAdd: document.querySelector("h1 > span"),
//     nameInput: document.querySelector('#name-input'),
//     nameOutput: document.querySelector('#name-output'),
// }

// refs.nameInput.addEventListener('input', onInputChange);
// function onInputChange(event) {
//     refs.nameOutput.textContent = refs.nameInput.value;
//     console.log('Значение ввода:', event)
// }


const refs = {
    spanValueAdd: document.querySelector("span"),
    nameInput: document.querySelector('#name-input'),
    nameOutput: document.querySelector('#name-output'),
}



const test = document.createElement('data-action');
test.value = 'Незнакомец'
refs.spanValueAdd.append(test)
console.log(refs.spanValueAdd)

refs.nameInput.addEventListener('input', onInputChange);


function onInputChange(event) {

    const defaultInputValue = test.value
    // console.log(defaultInputValue)
    if (refs.nameOutput.value !== '') {
        refs.nameOutput.textContent = refs.nameInput.value;
        console.log('Значение ввода:', event)

    } else if (refs.nameOutput.value === '') {
        refs.nameOutput.textContent
        console.log('Значение по умолчанию:', event)
    }
}








