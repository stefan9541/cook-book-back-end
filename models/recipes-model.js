const mongoose = require("mongoose");
const { Schema } = mongoose;

const recipes = {
  title: {
    type: String,
    required: true
  },
  ingredients: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  howToCook: {
    type: String,
    required: true
  }
};

const recipesSchema = new Schema(
  {
    ...recipes
  },
  { timestamps: true }
);

const previousVersionRecipes = new Schema({
  ...recipes,
  parentId: {
    type: Schema.Types.ObjectId,
    index: true,
    required: true
  }
});

module.exports = mongoose.model("recipes", recipesSchema);
