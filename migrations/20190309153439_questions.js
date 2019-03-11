exports.up = function(knex, Promise) {
  return knex.schema.createTable('questions', (table) =>{
    table.increments()
    table.string('questionContents')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('questions')
}
