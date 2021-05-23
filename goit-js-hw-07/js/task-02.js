const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ulRef = document.getElementById("ingredients");
const newUlRef = document.createElement("ul");
newUlRef.setAttribute("id", "ingredients");
for (const ingredientName of ingredients) {
    const liRef = document.createElement("li");
    liRef.textContent = ingredientName;
    newUlRef.appendChild(liRef);
}
//node.replaceChild(newnode, oldnode);
ulRef.parentNode.replaceChild(newUlRef, ulRef);
