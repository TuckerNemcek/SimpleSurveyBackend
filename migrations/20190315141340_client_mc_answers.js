exports.up = function(knex, Promise) {
  return knex.schema.createTable('client_mc_answers', function(table){
    table.increments()
    table.integer('clientID').references("id").inTable('client').onDelete("CASCADE")
    table.integer('questionID').references("id").inTable('questions').onDelete("CASCADE")
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.string('mc_answers')

  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('client_mc_answers')
}
