const express = require('express');
const nunjucks = require('nunjucks');

const server = express();

const recipes = require('./data');

server.use(express.static('public'));

server.set("view engine", "njk");

server.get('/', function (req, res) {
  return res.render('index', { items: recipes });
});

server.get('/receitas', function (req, res) {
  return res.render('receitas', { items: recipes });
});

server.get('/sobre', function (req, res) {
  return res.render('sobre');
});

nunjucks.configure("views", {
  express: server,
  autoescape: false,
  noCache: true
});

server.listen(5000, function() {
  console.log('server is running');
});