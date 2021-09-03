const refs = {
    container: document.querySelectorAll('button[data-action]'),
    boxesContainer: document.querySelector('#boxes'),
    input: document.querySelector('input'),
    renderBt: document.querySelector('[data-action="render"]'),
    destroyBt: document.querySelector('[data-action="destroy"]'),
}

const onRenderBtAddElents = (event) => {
    const creatBoxes = [];
    let widthBt = 30;
    let hightBT = 30;
    const step = 10

    for (let el = 0; el < event; el += 1) {
        creatBoxes.push(document.createElement('div'))
        creatBoxes[el].style.width = widthBt + 'px'
        creatBoxes[el].style.height = hightBT + 'px'
        widthBt += step;
        hightBT += step;
        creatBoxes[el].style.backgroundColor = 'rgb(' +
            Math.floor(Math.random() * 255) + 1 + ','
            + Math.floor(Math.random() * 255) + 1
            + ','
            + (Math.floor(Math.random() * 255));
    }

    refs.boxesContainer.append(...creatBoxes)
}

refs.container.forEach((el) => {
    if (el === refs.renderBt) {
        el.addEventListener('click', () => {
            onRenderBtAddElents(refs.input.value)
        })

    } else {
        el.addEventListener('click', onDestroyBtRemoveElents)
    }
})

function onDestroyBtRemoveElents() {
    refs.boxesContainer.innerHTML = ''
    refs.input.value = ''

}