const images = [
    {
        url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'White and Black Long Fur Cat',
    },
    {
        url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
        url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Group of Horses Running',
    },
];

const elementGallery = document.querySelector('#gallery')

const galleryElement = ({ url, alt }) => {
    const addGalleryEl = document.createElement('li');
    addGalleryEl.style.marginLeft = '5px';

    const imgGalleryEl = document.createElement('img');
    imgGalleryEl.style.width = '320px';
    imgGalleryEl.src = `${url}`
    imgGalleryEl.alt = `${alt}`

    elementGallery.append(addGalleryEl, imgGalleryEl);
    elementGallery.style.display = 'Flex';
}
const imgElementAdd = images
    .map(galleryElement)
    .join('')
elementGallery.insertAdjacentHTML("beforeend", imgElementAdd)
