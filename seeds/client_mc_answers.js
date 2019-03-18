exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('client_mc_answers').del()
    .then(function () {
      // Inserts seed entries
      return knex('client_mc_answers').insert([
        {id: 1, questionID: 1,mc_answers:"A"},
        {id: 2, questionID: 1,mc_answers:"B"},
        {id: 3, questionID: 1,mc_answers:"C"},
        {id: 4, questionID: 1,mc_answers:"D"},
        {id: 5, questionID: 1,mc_answers:"E"},

      ])
      .then(() => {
        return knex.raw("SELECT setval('client_mc_answers_id_seq', (SELECT MAX(id) FROM client_mc_answers))")
      })
    })
}
