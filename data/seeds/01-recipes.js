
exports.seed = async function(knex) {
  await knex("recipes").insert([
    { name: "Peanut Butter & Jelly Sandwich", steps: "Spread peanut butter and jelly on a single piece of bread and then combine bread to make sandwich" },
    { name: "Spaghetti", steps: "Brown 1 lb of ground beef then drain excess grease. Then cook noodles and drain remaining water. Combine ingredients and add spaghetti sauce and cook until done" },
    { name: "Cereal", steps: "Combine 1 cup of cereal and 1 cup of milk in a bowl" },
    { name: "Mac & Cheese", steps: "Boil 1 box of noodles in water then drain. Add 1 can of cheese sauce and 2 cups of milk then enjoy" },
    { name: "Fried Chicken", steps: "Prepare  1 lb of chicken by covering with 6 cups of flour then add to pan of hot vegetable oil until golden brown" },
    { name: "Tacos", steps: "Brown 1 lb of ground beef then drain. Grab 1 tortilla then add tomatoes, lettuce and cheese" },
    { name: "Hamburger", steps: "Cook 1/4 lb of ground beef per burger. Once done add lettuce, tomatoes, onions, and cheese between two slices of bread" },
  ])
};
