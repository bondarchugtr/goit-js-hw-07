const refs = {
    dataLength: document.getElementById('validation-input'),
}


const dataSet = refs.dataLength.dataset.length;
const valueLength = refs.dataLength.value.length;
console.log(refs.dataLength.value.length)
console.log(dataSet)

refs.dataLength.addEventListener('pure', onInputVerification)

console.log(refs.dataLength)

function onInputVerification(event) {
    if (valueLength == (Number(dataSet))) {
        refs.dataLength.classList.add('valid')
        console.log(event)

    } else {
        refs.dataLength.classList.add('invalid')
        console.log(event)

    }
}
