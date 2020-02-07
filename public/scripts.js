const modalOverlay = document.querySelector('.modal-overlay')
const recipes = document.querySelectorAll('.recipe')

for (let recipe of recipes) {
  recipe.addEventListener("click", function () {
    const recipeId = recipe.getAttribute('id'); // or just: recipe.id
    console.log(recipeId);
  })
}

