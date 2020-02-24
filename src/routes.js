const express = require('express');
const routes = express.Router();
const recipes = require('./app/controllers/recipes');
const recipesData = require('../data.json');

// users
routes.get('/', function (req, res) {
  return res.render('home', { recipes: recipesData.recipes });
});
routes.get('/recipes', function (req, res) {
  return res.render('recipes', { recipes: recipesData.recipes });
});
routes.get('/about', function (req, res) {
  return res.render('about');
});
routes.get("/recipes/:index", function (req, res) {
  const recipeIndex = req.params.index;
  const recipe = recipesData.recipes[recipeIndex];
  const recipeInfo = String(recipe.information); // hardcode
  const recipeInfoParagraphs = recipeInfo.split('\n'); // hardcode
  return res.render('recipe_detail', {
    recipe: recipe,
    recipeInfoParagraphs: recipeInfoParagraphs // hardcode
  })
});

// admin
routes.get('/admin', function (req, res) {
  return res.redirect("/admin/recipes");
});
routes.get("/admin/recipes", recipes.index); // Mostrar a lista de receitas
routes.get("/admin/recipes/create", recipes.create); // Mostrar formulário de nova receita
routes.get("/admin/recipes/:id", recipes.show); // Exibir detalhes de uma receita
routes.get("/admin/recipes/:id/edit", recipes.edit); // Mostrar formulário de edição de receita
routes.post("/admin/recipes", recipes.post); // Cadastrar nova receita
routes.put("/admin/recipes", recipes.put); // Editar uma receita
routes.delete("/admin/recipes", recipes.delete); // Deletar uma receita

//error
routes.use(function (req, res) {
  res.status(404).render("not-found");
});

module.exports = routes
