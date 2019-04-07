
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('client_answers').del()
    .then(function () {
      // Inserts seed entries
      return knex('client_answers').insert([
        {email_address: 1, questionID: 1,answer: '10'},

      ])
      .then(() => {
        return knex.raw("SELECT setval('client_answers_id_seq', (SELECT MAX(id) FROM client_answers))")
      })
    })
}
