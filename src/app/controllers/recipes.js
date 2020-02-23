const fs = require('fs');
const data = require("../../../data.json");

/*=== Admin ===*/

exports.index = function(req, res) {
  const recipes = data.recipes;
  return res.render("admin/index", { recipes });
}
exports.create = function (req, res) {
  return res.render("admin/create"); 
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
exports.post = function(req, res) { 
  console.log('estou no post');
  return res.send('estou no post');
  // // ckeck if fields are not null
  // const keys = Object.keys(req.body); // contructor - função que cria objeto
  // for (key of keys) {
  //   if (key !== "information") {
  //     if (req.body[key] == "") {
  //       return res.send(`O campo ${key} está vazio. Por favor, preencha esse campo.`);
  //     }
  //   }
  // }

  // let {
  //   image,
  //   title,
  //   author,
  //   ingredients,
  //   preparation,
  //   information
  // } = req.body;

  // const id = Number(data.recipes.length + 1);
  // const num = id;
  // data.recipes.push({
  //   id,
  //   num,
  //   image,
  //   title,
  //   author,
  //   ingredients,
  //   preparation,
  //   information
  // });

  // fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) {
  //   if (err) return res.send("write file error");
  //   return res.redirect("/admin/recipes");
  // });
}

exports.put = function (req, res) { 
  console.log('estou no put');
  return res.send('estou no put');
  // const { num } = req.body;
  // const id = num;
  // let index = 0;
  // const foundRecipe = data.recipes.find(function(recipe, foundIndex) {
  //   if (id == recipe.id) {
  //     index = foundIndex;
  //     return true;
  //   }
  // });

  // if (!foundInstructor) return res.send("Instructor not found.");

  // const recipe = {
  //   ...foundRecipe, // spread operator
  //   ingredients: foundRecipe.ingredients, // maybe it's not necessary
  //   preparation: foundRecipe.preparation, // perhaps not necessary
  // }

  // data.recipes[index] = recipe;
  // fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err) {
  //   if(err) return res.send('Write error');
  //   return res.redirect('/admin/recipes');
  // });
}

exports.delete = function (req, res) {
  console.log('estou no delete');
  // const foundRecipe = data.recipes.find(recipe => recipe.id == id);
  res.send('estou no delete');
  return
}