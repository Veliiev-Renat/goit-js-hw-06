const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listRef = document.querySelector('#ingredients')

const listItem = ingredients.map(ingredient=>{
    const listItem = document.createElement('li')
  listItem.textContent = `${ingredient}`
  listItem.classList.add('item')
  listRef.appendChild(listItem)
}).join