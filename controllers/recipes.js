const fs = require('fs');
const data = require("../data.json");

// const utils = require("../utils");

// Show recipes lists
exports.index = function(req, res) {
  const recipes = data.recipes;
  return res.render("admin/index", { recipes });
}
