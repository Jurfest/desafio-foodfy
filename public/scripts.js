// const modalOverlay = document.querySelector('.modal-overlay')
// const recipes = document.querySelectorAll('.recipe')

// for (let recipe of recipes) {
//   recipe.addEventListener("click", function () {
//     const recipeId = recipe.getAttribute('id'); // or just: recipe.id
//     // const recipeNumber = recipes.findIndex(recipeId);
//     console.log(`id da receita: ${recipeId}`);
//   })
// }


const button = document.querySelector('.button');

button.addEventListener("click", function () {
  button.textContent = "MOSTRAR"

  //  var display = document.getElementById(el).style.display;
  //  if (display == "none")
  //    document.getElementById(el).style.display = 'block';
  //  else
  //    document.getElementById(el).style.display = 'none';
});

 


// button.classList.remove('active')
// button.querySelector('iframe').src = ""