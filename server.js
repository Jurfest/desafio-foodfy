const express = require('express');
const nunjucks = require('nunjucks');

const server = express();

const recipes = require('./data');

server.use(express.static('public'));

server.set("view engine", "njk");

nunjucks.configure("views", {
  express: server,
  autoescape: false,
  noCache: true
});

server.get('/', function (req, res) {
  return res.render('home', { recipes: recipes });
});

server.get('/recipes', function (req, res) {
  return res.render('recipes', { recipes: recipes });
});

server.get('/about', function (req, res) {
  return res.render('about');
});

server.get("/recipes/:index", function (req, res) {
  const recipeIndex = req.params.index;
  const recipe = recipes[recipeIndex];
  console.log(recipe);
  return res.render('recipe_detail', { recipe: recipe })
})

// Atention: this error route must be below all other routes
server.use(function (req, res) {
  res.status(404).render("not-found");
});

server.listen(5000, function() {
  console.log('server is running');
});