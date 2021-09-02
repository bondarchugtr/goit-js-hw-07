const refs = {
    spanValueAdd: document.querySelector("span"),
    nameInput: document.querySelector('#name-input'),
    nameOutput: document.querySelector('#name-output'),
}
const textContDef = refs.nameOutput.textContent

const onInputChange = (event) => {

    if (refs.nameInput.value === '') {
        refs.nameOutput.textContent = textContDef
        console.log('Значение по умолчанию:', event)

    } else {
        refs.nameOutput.textContent = refs.nameInput.value;
        console.log('Значение ввода:', event)
    }
}
refs.nameInput.addEventListener('input', onInputChange);










