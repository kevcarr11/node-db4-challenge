exports.up = async function(knex) {
  await knex.schema.createTable("recipes", (table) => {
    table.increments("id")
    table.string("name").notNullable()
    table.string("steps").notNullable()
  })

  await knex.schema.createTable("ingredients", (table) => {
    table.increments("id")
    table.string("name").notNullable()
  })

  await knex.schema.createTable("recipes_ingredients", (table) => {
    table.integer("recipe_id")
      .notNullable()
      .references("id")
      .inTable("recipes")
    table.integer("ingredient_id")
      .notNullable()
      .references("id")
      .inTable("ingredients")
    table.float("quantity")
      .notNullable()
    table.primary(["recipe_id", "ingredient_id"])
  })
}

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("recipes_ingredients")
  await knex.schema.dropTableIfExists("ingredients")
  await knex.schema.dropTableIfExists("recipes")
}
