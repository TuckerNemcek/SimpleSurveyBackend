exports.up = function(knex, Promise) {
  return knex.schema.createTable('client_answers', function(table){
    table.increments()
    table.string('client_email')
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.integer('questionID').references("id").inTable('questions').onDelete("CASCADE")
    table.string('answer')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('client_answers')
}
