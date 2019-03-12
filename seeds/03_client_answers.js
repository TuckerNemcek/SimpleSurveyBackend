
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('client_answers').del()
    .then(function () {
      // Inserts seed entries
      return knex('client_answers').insert([
        {id: 1, colName: 'rowValue1'},
        {id: 2, colName: 'rowValue2'},
        {id: 3, colName: 'rowValue3'}
      ])
      .then(() => {
        return knex.raw("SELECT setval('client_answers_id_seq', (SELECT MAX(id) FROM client_answers))")
      })
    })
}
