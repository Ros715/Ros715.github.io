
import menuData from "./menu.json";
import menuTemplate from "./menu-template.json";

const template1 = Handlebars.compile(menuTemplate.part1);
const template2 = Handlebars.compile(menuTemplate.part2);
const template3 = Handlebars.compile(menuTemplate.part3);

var ulHTML = '';
for (const dish of menuData) {
    var tagList = '';
    for (const tag of dish.ingredients) {
        tagList += template2({ tag: tag });
    }
    ulHTML += template1(dish);
    ulHTML += '<ul class="tag-list">' + tagList + '</ul>';
    ulHTML += template3(dish);
}

const ulRef = document.querySelector('.js-menu',);
ulRef.insertAdjacentHTML("beforeend", ulHTML);
