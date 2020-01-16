
exports.seed = async function(knex) {
  await knex("recipes").insert([
    { name: "Peanut Butter & Jelly Sandwich"},
    { name: "Spaghetti"},
    { name: "Cereal"},
    { name: "Mac & Cheese"},
    { name: "Fried Chicken"},
    { name: "Tacos"},
    { name: "Hamburger"},
  ])
};
