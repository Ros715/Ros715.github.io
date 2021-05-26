import galleryItems from "./gallery-items.js";

const ulRef = document.querySelector("ul.js-gallery");
let htmlText = "";
for (let index = 0; index < galleryItems.length; ++index) {
    const image = galleryItems[index];
    htmlText += '<li class="gallery__item">';
    htmlText += `<a class="gallery__link" href__="${image.original}">`
    htmlText += `<img class="gallery__image image-${index}" src="${image.preview}" data-source="${image.original}" alt="${image.description}" />`;
    htmlText += '</a>';
    htmlText += '</li>';
}
ulRef.insertAdjacentHTML("beforeend", htmlText);

const lightboxImageRef = document.querySelector('img.lightbox__image');
const lightboxRef = document.querySelector('.js-lightbox');
const orgClass = lightboxRef.getAttribute('class');

let currentIndex = 0;

function openLightbox(index) {
    lightboxImageRef.setAttribute('src', galleryItems[index].original);
    lightboxRef.setAttribute('class', orgClass + ' is-open');
    currentIndex = index;
}

function openNext() {
    currentIndex = (currentIndex < (galleryItems.length - 1)) ? currentIndex + 1 : 0;
    openLightbox(currentIndex);
}

function openPrevious() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : galleryItems.length - 1;
    openLightbox(currentIndex);
}

function closeLightbox() {
    lightboxRef.setAttribute('class', orgClass);
}

for (let index = 0; index < galleryItems.length; ++index) {
    document.querySelector(`.image-${index}`).addEventListener('click', () => {
        openLightbox(index);
    });
    //WARNING! There must be no globally visible variable 'index'.
}

document.querySelector('button[data-action="close-lightbox"]').
    addEventListener('click', closeLightbox);

document.querySelector('button[data-action="next-lightbox"]').
    addEventListener('click', openNext);

document.querySelector('button[data-action="previous-lightbox"]').
    addEventListener('click', openPrevious);

document.addEventListener('keydown', (Event) => {
    //console.log(Event);
    switch (Event.key) {
        case 'Escape':
            closeLightbox();
            break;
        case 'ArrowLeft':
            openPrevious();
            break;
        case 'ArrowRight':
            openNext();
            break;
    }
});

lightboxImageRef.addEventListener('click', closeLightbox);
