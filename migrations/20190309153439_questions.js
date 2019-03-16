exports.up = function(knex, Promise) {
  return knex.schema.createTable('questions', (table) =>{
    table.increments()
    table.text('questionContents'),
    table.boolean('isMultipleChoice')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('questions')
}
