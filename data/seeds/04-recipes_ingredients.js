
exports.seed = async function(knex) {
  await knex("recipes_ingredients").insert([
    { recipe_id: 1, ingredient_id: 1, quantity: "1 jar" },
    { recipe_id: 1, ingredient_id: 2, quantity: "1 jar" }, 
    { recipe_id: 1, ingredient_id: 3, quantity: "1 loaf" },
    { recipe_id: 2, ingredient_id: 4, quantity: "1 lb" },
    { recipe_id: 2, ingredient_id: 5, quantity: "1 pack" },
    { recipe_id: 2, ingredient_id: 10, quantity: "1 jar" },
    { recipe_id: 3, ingredient_id: 6, quantity: "1 gallon" },
    { recipe_id: 3, ingredient_id: 9, quantity: "1 box" },
    { recipe_id: 4, ingredient_id: 6, quantity: "2 cups" },
    { recipe_id: 4, ingredient_id: 5, quantity: "1 box" },
    { recipe_id: 4, ingredient_id: 7, quantity: "1 jar" },
    { recipe_id: 5, ingredient_id: 12, quantity: "8 cups" },
    { recipe_id: 5, ingredient_id: 8, quantity: "2 lbs" },
    { recipe_id: 5, ingredient_id: 11, quantity: "3/4 cups" },
    { recipe_id: 6, ingredient_id: 4, quantity: "2 lbs" },
    { recipe_id: 6, ingredient_id: 13, quantity: "1 head" },
    { recipe_id: 6, ingredient_id: 14, quantity: "2" },
    { recipe_id: 6, ingredient_id: 16, quantity: "12" },
    { recipe_id: 7, ingredient_id: 4, quantity: "8 beef patties" },
    { recipe_id: 7, ingredient_id: 13, quantity: "1/2 bag" },
    { recipe_id: 7, ingredient_id: 14, quantity: "2" },
    { recipe_id: 7, ingredient_id: 3, quantity: "8 buns" },
    { recipe_id: 7, ingredient_id: 15, quantity: "1" },
  ])
};
