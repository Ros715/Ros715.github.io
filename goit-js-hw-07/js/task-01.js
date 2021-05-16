const listOfCategories = document.
    getElementById("categories").
    getElementsByClassName("item");
console.log(listOfCategories);
console.log(`В списке ${listOfCategories.length} категории.`);
for (const categorie of listOfCategories) {
    console.log(categorie.getElementsByTagName("h2"));
}
