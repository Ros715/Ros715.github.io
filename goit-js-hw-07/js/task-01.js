const listOfCategories = document.
    getElementById("categories").
    getElementsByClassName("item");
console.log(`В списке ${listOfCategories.length} категории.`);
for (const categorie of listOfCategories) {
    console.log("Категория:", categorie.querySelector("h2").textContent);
    console.log("Количество элементов:",categorie.getElementsByTagName("li").length);
}
