
exports.seed = async function(knex) {
  await knex("ingredients").insert([
    { name: "peanut butter", }, // 1
    { name: "jelly", }, // 2
    { name: "bread", }, // 3
    { name: "beef", }, // 4
    { name: "noodles", }, // 5
    { name: "milk", }, // 6
    { name: "cheese sauce", }, // 7 
    { name: "chicken", }, // 8
    { name: "cereal", }, // 9
    { name: "tomato sauce", }, // 10
    { name: "vegetable oil", }, // 11
    { name: "flour", }, // 12
    { name: "lettuce", }, // 13
    { name: "tomato", }, // 14
    { name: "onion", }, // 15
    { name: "tortilla", } // 16
  ])
};
