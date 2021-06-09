
import menuData from "./menu.json";

var templateText1 = '<li class="menu__item">';
templateText1 += '<article class="card">';
templateText1 += '<img src="{{image}}" alt="{{name}}" class="card__image" />';
templateText1 += '<div class="card__content">';
templateText1 += '<h2 class="card__name">{{name}}</h2>';
templateText1 += '<p class="card__price">';
templateText1 += '<i class="material-icons"> monetization_on </i>{{price}} кредитов</p>';
templateText1 += '<p class="card__descr">{{description}}</p>';

var templateText2 = '<li class="tag-list__item">{{tag}}</li>';

var templateText3 = '</div><button class="card__button button">';
templateText3 += '<i class="material-icons button__icon"> shopping_cart </i>';
templateText3 += 'В корзину</button>';
templateText3 += '</article></li>';

var template1 = Handlebars.compile(templateText1);
var template2 = Handlebars.compile(templateText2);
var template3 = Handlebars.compile(templateText3);

var ulHTML = '';
for (const dish of menuData) {
//console.log(dish);
    var tagList = '';
    for (const tag of dish.ingredients) {
        tagList += template2({ tag: tag });
    }
    ulHTML += template1(dish);
    ulHTML += '<ul class="tag-list">' + tagList + '</ul>';
    ulHTML += template3(dish);
  //console.log(template1(dish));
  //console.log(template3(dish));
}
//console.log(ulHTML);

const ulRef = document.querySelector('.js-menu',);
ulRef.insertAdjacentHTML("beforeend", ulHTML);


const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const switchRef = document.getElementById('theme-switch-toggle');
const bodyRef = document.querySelector('body');
switchRef.addEventListener('change', () => {
    //console.log(switchRef.checked);
    if (switchRef.checked) {
        bodyRef.classList.remove(Theme.LIGHT);
        bodyRef.classList.add(Theme.DARK);
        localStorage.setItem('theme', Theme.DARK);
    } else {
        bodyRef.classList.remove(Theme.DARK);
        bodyRef.classList.add(Theme.LIGHT);
        localStorage.setItem('theme', Theme.LIGHT);
    }
});

if (localStorage.getItem('theme') === Theme.DARK) {
    switchRef.checked = true;
    bodyRef.classList.add(Theme.DARK);
}
