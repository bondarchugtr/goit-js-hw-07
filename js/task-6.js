
const dataLength = document.getElementById('validation-input');
const valueDataSet = dataLength.getAttribute('data-length');

dataLength.addEventListener('blur', onInputVerification)

function onInputVerification() {

    console.log(dataLength.value.length)
    if (Number(valueDataSet) !== dataLength.value.length) {
        dataLength.classList.add('invalid')
    } else {
        dataLength.classList.remove('invalid')
        dataLength.classList.add('valid')
    }
}