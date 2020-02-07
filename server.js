const express = require('express');
const nunjucks = require('nunjucks');

const server = express();

const recipes = require('./data');

server.use(express.static('public'));

server.set("view engine", "njk");

server.get('/', function (req, res) {
  return res.render('home', { recipes: recipes });
});

server.get('/recipes', function (req, res) {
  return res.render('recipes', { recipes: recipes });
});

server.get('/about', function (req, res) {
  return res.render('about');
});

nunjucks.configure("views", {
  express: server,
  autoescape: false,
  noCache: true
});

server.get("/recipes/:index", function (req, res) {
  const recipeIndex = req.params.index;

  console.log(recipes[recipeIndex]);
})

server.listen(5000, function() {
  console.log('server is running');
});