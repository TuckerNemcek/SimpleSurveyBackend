exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('client_MCAnswers').del()
    .then(function () {
      // Inserts seed entries
      return knex('client_MCAnswers').insert([
        {id: 1, questionID: 1,MCAnswers:"A"},
        {id: 2, questionID: 1,MCAnswers:"B"},
        {id: 3, questionID: 1,MCAnswers:"C"},
        {id: 4, questionID: 1,MCAnswers:"D"},
        {id: 5, questionID: 1,MCAnswers:"E"},

      ])
      .then(() => {
        return knex.raw("SELECT setval('client_MCAnswers_id_seq', (SELECT MAX(id) FROM client_MCAnswers))")
      })
    })
}
