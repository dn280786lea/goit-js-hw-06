const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const itemEl = [];
const list = document.querySelector('#ingredients'); 

ingredients.forEach(ingredient => {
  const element = document.createElement("li");
  element.textContent = ingredient;
  list.appendChild(element);
});