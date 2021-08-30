// {/* <ul id="ingredients"></ul> */ }

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const ingredientsEl = document.querySelector('#ingredients')
console.log(ingredientsEl)
const itemEl = document.createElement('li');

const addItem = (element) => {
    return element.map((el) => {
        const itemEl = document.createElement('li');
        itemEl.textContent = el
        return itemEl
    })
}

ingredientsEl.append(...addItem(ingredients))
console.log(itemEl)





















