exports.up = function(knex, Promise) {
  return knex.schema.createTable('client', (table) =>{
    table.increments()
    table.string('businessEmail')
    table.string('businessName')
    table.string('positionInBusiness')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('client')
}
