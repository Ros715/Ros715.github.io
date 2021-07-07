var debounce = require('lodash.debounce');
import apiService from './apiService.js';

const statsTemplate = document.querySelector('#stats-template').innerHTML.trim();
const template = Handlebars.compile(statsTemplate);

const inputRef = document.querySelector('#keys-input');
const buttonNextRef = document.querySelector('#button-next');
const galleryRef = document.querySelector('.gallery');

const perPage = 12;
let page = 1;
let photosCount = 0;
let queryText = '';
let htmlText = '';

function clearUl(ulRef) {
  while (ulRef.hasChildNodes()) {
    ulRef.removeChild(ulRef.childNodes[0]);
  }
}

function formatQuery(text) {
    return text.split(' ').join('+');
}

function addPhotos(hits) {
    let i = 0;
    for (const hit of hits) {
        htmlText += `<li id="card${photosCount+i}"><div class="photo-card"><img src="${hit.webformatURL}" alt="" />`;
        htmlText += template(hit);
        htmlText += '</div></li>';
        i += 1;
    }
}

function showPhotos() {
  debounce(() => {
    apiService(queryText, page, perPage)
        .then(apiOutput => {
            console.log(apiOutput);
            if (apiOutput.hits.length > 0) {
                addPhotos(apiOutput.hits);
                clearUl(galleryRef);
                galleryRef.insertAdjacentHTML("beforeend", htmlText);
                const element = document.getElementById(`card${photosCount}`);
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'end',
                });
                photosCount += apiOutput.hits.length;
            }
        if (apiOutput.hits.length >= perPage) {
            page += 1;
            buttonNextRef.disabled = false;
        } else {
            buttonNextRef.disabled = true;
        }
    })
    .catch(function (error) {
      console.log('Error: ' + error);
    });
  }, 500)();
}

inputRef.addEventListener('change', () => {
    //clearUl(galleryRef);
    page = 1;
    photosCount = 0;
    queryText = formatQuery(inputRef.value.trim());
    htmlText = '';
    showPhotos();
});

buttonNextRef.addEventListener('click', () => {
    showPhotos();
});

buttonNextRef.disabled = true;

