const items = document.querySelectorAll('.item');
items.forEach.call(items, (element) => {
    const title = element.querySelector('h2').textContent;
    const itemsLength = element.querySelectorAll('li').length;
    console.log(`Категория: ${title} / Количество элементов: ${itemsLength}`);
});