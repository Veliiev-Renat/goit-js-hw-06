const categoriesRef = document.querySelector("#categories")
const categoriesLists = [...categoriesRef.children]
console.log('Number of categories:',categoriesLists.length)

categoriesLists.forEach(list => {
    const listItem = list.querySelectorAll('li')
    const title = list.querySelector("h2")
    console.log('Category:',title.textContent)
    console.log('Elements:',listItem.length)
});
