const recipes = require("./recipes.js");

module.exports = function(app) {
  app.use("/api/", recipes());
};
