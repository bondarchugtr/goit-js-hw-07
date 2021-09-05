
const dataLength = document.getElementById('validation-input');
const valueDataSet = dataLength.getAttribute('data-length');

dataLength.addEventListener('blur', onInputVerification)

function onInputVerification() {
    if (Number(valueDataSet) === dataLength.value.length) {
        updateClassElem("invalid", "valid");
    } else {
        updateClassElem("valid", "invalid");
    }
}
function updateClassElem(add, rem) {
    dataLength.classList.remove(add);
    dataLength.classList.add(rem);
}

