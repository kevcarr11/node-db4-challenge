const db = require("./db-config")

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions,
}

function getRecipes() {
  return db('recipes').select()
}

function getShoppingList(recipeId) {
  return db('ingredients')
    .join('recipes_ingredients as map', 'map.ingredient_id', 'id')
    .where({ recipe_id: recipeId })
}

function getInstructions(recipeId) {
  return db ('steps')
    .from('instructions')
    .where({recipe_id: recipeId})
}
