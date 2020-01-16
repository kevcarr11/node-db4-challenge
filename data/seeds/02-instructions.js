exports.seed = function (knex) {
  return knex('instructions').insert([
    {
      steps: "Spread peanut butter on a single piece of bread",
      recipe_id: 1,
    },
    {
      steps: "Spread jelly on a single piece of bread",
      recipe_id: 1,
    },
    {
      steps: "Combine both slices of bread to make a sandwich",
      recipe_id: 1,
    },
    {
      steps: "Prepare 1 lb beef meatballs",
      recipe_id: 2,
    },
    {
      steps: "Cook pasta noodles and drain remaining water",
      recipe_id: 2,
    },
    {
      steps: "Combine ingredients and add spaghetti sauce then cook until done",
      recipe_id: 2,
    },
    {
      steps: "Grab favorite cereal",
      recipe_id: 3,
    },
    {
      steps: "Pour delicious cereal into bowl",
      recipe_id: 3,
    },
    {
      steps: "Pour ice cold milk into bowl of cereal and enjoy",
      recipe_id: 3,
    },
    {
      steps: "Boil 1 box of noodles into 1 cup of water",
      recipe_id: 4,
    },
    {
      steps: "Add 1 can of cheese sauce",
      recipe_id: 4,
    },
    {
      steps: "Add 2 cups of milk",
      recipe_id: 4,
    },
    {
      steps: "Boil until tender then enjoy",
      recipe_id: 4,
    },
    {
      steps: "Prepare 1 lb of chicken legs",
      recipe_id: 5,
    },
    {
      steps: "Add 6 cups of flour",
      recipe_id: 5,
    },
    {
      steps: "Add 10 cups of vegetable oil to empty pan",
      recipe_id: 5,
    },
    {
      steps: "Add chicken and cook until golden brown",
      recipe_id: 5,
    },
    {
      steps: "Cook 2 lbs of ground beef",
      recipe_id: 6,
    },
    {
      steps: "Prepare tomatoes, lettuce and cheese",
      recipe_id: 6,
    },
    {
      steps: "Combine ingredients and roll into soft tortilla",
      recipe_id: 6,
    },
    {
      steps: "Prepare hamburger meat",
      recipe_id: 7,
    },
    {
      steps: "Cook hamburger meat",
      recipe_id: 7,
    },
    {
      steps: "Add tomatoes, pickles, cheese and lettuce to hamburger buns",
      recipe_id: 7,
    },
  ]);
};
