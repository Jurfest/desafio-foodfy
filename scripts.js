const modalOverlay = document.querySelector('.modal-overlay')
const recipes = document.querySelectorAll('.recipe')
var recipeName = "Deliciosa receita Foodfy"
var autor = "Foodfy"

for (let recipe of recipes) {
  recipe.addEventListener("click", function () {
    const recipeId = recipe.getAttribute('id'); // or just: recipe.id
    modalOverlay.classList.add('active');
    modalOverlay.querySelector('iframe').src = `./assets/${recipeId}.png`;
    setTextsToModalQuerys(recipeId);
    modalOverlay.querySelectorAll('p')[1].textContent = recipeName;
    modalOverlay.querySelectorAll('p')[2].textContent = `por ${autor}`;
  })
}

document.querySelector('.close-modal').addEventListener("click", function () {
  modalOverlay.classList.remove('active')
  modalOverlay.querySelector('iframe').src = ""
})

function setTextsToModalQuerys(recipe){ // hardcode
  switch (recipe) {
    case 'burger':
      recipeName = "Triplo bacon burger"
      autor = "Jorge Relato"
      break;
    case 'pizza':
      recipeName = "Pizza 4 estações"
      autor = "Fabiana Melo"
    break;
    case 'espaguete':
      recipeName = "Espaguete ao molho"
      autor = "Júlia Kinoto"
    break;
    case 'lasanha':
      recipeName = "Lasanha mac n' cheese"
      autor = "Juliano Vieira"
    break;
    case 'doce':
      recipeName = "Docinhos pão-do-céu"
      autor = "Ricardo Golvea"
    break;
    case 'asinha':
      recipeName = "Asinhas de frango ao barbecue"
      autor = "Vania Steroski"
    break;
  
    default:

      break;
  }
  return 0;
}