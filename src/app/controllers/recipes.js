const fs = require('fs');
const data = require("../../../data.json");

// Show recipes lists
exports.index = function(req, res) {
  const recipes = data.recipes;
  return res.render("admin/index", { recipes });
}

exports.show = function(req, res) {
  const { id } = req.params;
  const recipe = data.recipes[id];
  const recipeInfo = String(recipe.information); // hardcode
  const recipeInfoParagraphs = recipeInfo.split('\n'); // hardcode
  return res.render('admin/recipe_detail', {
    recipe,
    recipeInfoParagraphs // hardcode
  });
}

exports.edit = function(req, res) {
  const { id } = req.params;
  const recipe = data.recipes[id];
  // const recipeInfo = String(recipe.information); // hardcode
  // const recipeInfoParagraphs = recipeInfo.split('\n'); // hardcode
  return res.render('admin/edit', { recipe /*,recipeInfoParagraphs*/ });
}

exports.create = function(req, res) {

  return res.render("admin/create"); // Mostrar formulário de nova receita
}