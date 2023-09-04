const categoriesList = document.querySelectorAll('.item');
console.log(`Numbers of categories: ${categoriesList.length}`);

categoriesList.forEach(category  => {
 const categoryName = category.firstElementChild.textContent;
  const categoryElements = category.lastElementChild.querySelectorAll('li').length;

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements}`);
});