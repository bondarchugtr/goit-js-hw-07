
const dataLength = document.getElementById('validation-input');
const valueDataSet = dataLength.getAttribute('data-length');

dataLength.addEventListener('blur', onInputVerification)


function onInputVerification() {

    console.log(dataLength.value.length)
    if (Number(valueDataSet) === dataLength.value.length) {
        valueEqualValidation()
    } else {
        valueNotEqualValidation()
    }
}
function valueEqualValidation(val) {
    dataLength.classList.remove('invalid')
    dataLength.classList.add('valid')
    return val;
}

function valueNotEqualValidation(inval) {
    dataLength.classList.add('invalid')
    dataLength.classList.remove('valid')
    return inval;
}

