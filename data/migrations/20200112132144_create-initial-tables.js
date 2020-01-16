exports.up = async function(knex) {
  await knex.schema.createTable("recipes", (table) => {
    table.increments("id")
    table.string("name").notNullable()
  })

  await knex.schema.createTable("instructions", (table) => {
    table.increments()
    table.integer("recipe_id")
      .notNullable()
      .unsigned()
      .references("id")
      .inTable("recipes")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
    table.text("steps").notNullable()
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
    table.string("quantity")
      .notNullable()
    table.primary(["recipe_id", "ingredient_id"])
  })
}

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("recipes_ingredients")
  await knex.schema.dropTableIfExists("ingredients")
  await knex.schema.dropTableIfExists("instructions")
  await knex.schema.dropTableIfExists("recipes")
}
