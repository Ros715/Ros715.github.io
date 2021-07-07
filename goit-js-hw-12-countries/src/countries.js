/*
first:  npm install @pnotify/core
in index.html <head>:
    <link href="../node_modules/@pnotify/core/dist/PNotify.css" rel="stylesheet" type="text/css" />
    <link href="../node_modules/@pnotify/core/dist/BrightTheme.css" rel="stylesheet" type="text/css" />
*/

import { alert, Stack } from '@pnotify/core';

const noticeStack = new Stack({
  dir1: 'down', // With a dir1 of "up", the stacks will start appearing at the bottom.
  // Without a `dir2`, this stack will be horizontally centered, since the `dir1` axis is vertical.
  firstpos1: 25, // The notices will appear 25 pixels from the bottom of the context.
  // Without a `spacing1`, this stack's notices will be placed 25 pixels apart.
  push: 'top', // Each new notice will appear at the bottom of the screen, which is where the "top" of the stack is. Other notices will be pushed up.
  modal: true, // When a notice appears in this stack, a modal overlay will be created.
  overlayClose: true, // When the user clicks on the overlay, all notices in this stack will be closed.
  //context: document.getElementById('page-container'), // The notices will be placed in the "page-container" element.
  context: document.querySelector('body'),
});

function notice(text) {
  alert({
    title: 'Alert',
    text: text,
    width: 'auto',
    type: ['notice', 'info', 'success', 'error'][3],
    stack: noticeStack,
  });
}

const countryNameRef = document.querySelector('.country-name');
const countryCapitalRef = document.querySelector('.country-capital');
const countryPopulationRef = document.querySelector('.country-population');
const countryFlagRef = document.querySelector('.country-flag-img');

//const countryMessageToManyRef = document.querySelector('.message-too-many');
const countryCountriesListRef = document.querySelector('.countries');
const countryCountryRef = document.querySelector('.country');

const countriesListRef = document.querySelector('.countries-list');
const languagesListRef = document.querySelector('.languages-list');

const inputRef = document.querySelector('#country-name');

var debounce = require('lodash.debounce');
inputRef.addEventListener('input', () => {
  debounce(() => {
    const text = inputRef.value.trim();
    countryInfo(text);
  }, 500)();
});

/*
import { alert, notice, info, success, error } from '@pnotify/core';
const myInfo = info({
  text: "I'm an info message.",
});
*/

function clearUl(ulRef) {
  while (ulRef.hasChildNodes()) {
    ulRef.removeChild(ulRef.childNodes[0]);
  }
}

function displayMessageToMany() {
  //countryMessageToManyRef.setAttribute('style', 'display: block;');
  countryCountriesListRef.setAttribute('style', 'display: none;');
  countryCountryRef.setAttribute('style', 'display: none;');
  //myInfo();
  notice('Too many matches found. Please enter a more specific query!');
}

function displayCountriesList(countries) {
  //countryMessageToManyRef.setAttribute('style', 'display: none;');
  countryCountriesListRef.setAttribute('style', 'display: block;');
  countryCountryRef.setAttribute('style', 'display: none;');
  noticeStack.close(true);

  let htmlLi = '';
  for (const country of countries) {
    htmlLi += `<li>${country.name}</li>`;
  }
  clearUl(countryCountriesListRef);
  countryCountriesListRef.insertAdjacentHTML('afterbegin', htmlLi);
}

function displayCountry(country) {
  //countryMessageToManyRef.setAttribute('style', 'display: none;');
  countryCountriesListRef.setAttribute('style', 'display: none;');
  countryCountryRef.setAttribute('style', 'display: block;');
  noticeStack.close(true);

  countryNameRef.innerHTML = country.name;
  countryCapitalRef.innerHTML = country.capital;
  countryPopulationRef.innerHTML = country.population;
  countryFlagRef.setAttribute('src', country.flag);

  let htmlLi = '';
  for (const lang of country.languages) {
    htmlLi += `<li>${lang.name}</li>`;
  }
  clearUl(languagesListRef);
  languagesListRef.insertAdjacentHTML('afterbegin', htmlLi);
}

function displayNothing() {
  //countryMessageToManyRef.setAttribute('style', 'display: none;');
  countryCountriesListRef.setAttribute('style', 'display: none;');
  countryCountryRef.setAttribute('style', 'display: none;');
  noticeStack.close(true);
}

import fetchCountries from './fetchCountries';

function countryInfo(searchQuery) {
  if (searchQuery === '') {
    displayNothing();
    return;
  }
  fetchCountries(searchQuery)
    .then(countries => {
      if (countries.length > 10) {
        displayMessageToMany();
      } else if (countries.length > 1) {
        displayCountriesList(countries);
      } else if (countries.length === 1) {
        displayCountry(countries[0]);
      } else {
        displayNothing();
      }
    })
    .catch(function (error) {
      console.log('Error: ' + error);
    });
}

displayNothing();
//countryInfo("eesti");
