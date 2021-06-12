
import menuData from "./menu.json";

//const menuTemplate = document.querySelector('#menu-template').innerHTML.trim();
//const template = Handlebars.compile(menuTemplate);

import menuTemplate from "./menu-template.json";
const template = Handlebars.compile(menuTemplate.template);

var ulHTML = '';
for (const dish of menuData) {
    ulHTML += template(dish);
}

const ulRef = document.querySelector('.js-menu',);
ulRef.insertAdjacentHTML("beforeend", ulHTML);
