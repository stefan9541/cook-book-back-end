const express = require("express");
const router = express.Router();
const recipesSchema = require("../models/recipes-model");

/* GET users listing. */
module.exports = function() {
  router.get("/recipes", function(req, res, next) {
    recipesSchema
      .find()
      .sort({ createdAt: -1 })
      .exec()
      .then(data => {
        res.status(200).json(data);
      });
  });
  router.post("/recipes", function(req, res, next) {
    const { recipes } = req.body;
    recipesSchema
      .create(recipes)
      .then(recipes => res.status(201).json(recipes))
      .catch(err => res.status(400).json(err));
  });
  return router;
};
