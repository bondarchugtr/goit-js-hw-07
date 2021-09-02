const refs = {
    inputControl: document.querySelector('#font-size-control'),
    spanText: document.querySelector('#text')
}
refs.inputControl.addEventListener('input', onTextChangeDecrement)
function onTextChangeDecrement(event) {
    refs.spanText.style.fontSize = event.currentTarget.value + 'px'
    console.log(event)
}