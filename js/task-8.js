const refs = {
    container: document.querySelector('#controls'),
    boxesContainer: document.querySelector('#boxes'),
    input: document.querySelector('input'),
    renderBt: document.querySelector('[data-action="render"]'),
    destroyBt: document.querySelector('[data-action="destroy"]'),
}

console.log(refs.destroyBt)

const onInputOption = (event) => {
    console.log(event)
}

const onRenderBtAddElents = (event) => {
    refs.container += refs.input.value;
    console.log(event)
}

const onDestroyBtRemoveElents = (event) => {
    refs.boxesContainer.value = ''
    console.log(event)
}

refs.input.addEventListener('click', onInputOption);
refs.renderBt.addEventListener('click', onRenderBtAddElents);
refs.destroyBt.addEventListener('click', onDestroyBtRemoveElents);