const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ulRef = document.getElementById("ingredients");
for (const ingredientName of ingredients) {
    const liRef = document.createElement("li");
    liRef.textContent = ingredientName;
    ulRef.appendChild(liRef);
}
