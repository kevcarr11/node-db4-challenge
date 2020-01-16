
exports.seed = async function(knex) {
  await knex("ingredients").insert([
    { name: "peanut butter", },
    { name: "jelly", },
    { name: "bread", },
    { name: "beef", },
    { name: "noodles", },
    { name: "milk", },
    { name: "cheese sauce", },
    { name: "chicken", },
    { name: "cereal", },
    { name: "tomato sauce", },
    { name: "vegetable oil", },
    { name: "flour", },
    { name: "lettuce", },
    { name: "tomato", },
    { name: "onion", },
    { name: "tortilla", }
  ])
};
