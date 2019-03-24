exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('client_mc_answers').del()
    .then(function () {
      // Inserts seed entries
      return knex('client_mc_answers').insert([
        {id: 1, questionID: 8,mc_answers:"Idea"},
        {id: 2, questionID: 8,mc_answers:"Launch"},
        {id: 3, questionID: 8,mc_answers:"Growth"},
        {id: 4, questionID: 8,mc_answers:"Shake Out"},
        {id: 5, questionID: 8,mc_answers:"Maturity"},

        {id: 6, questionID: 9,mc_answers:"Consumer Packaged Goods (CPG)"},
        {id: 7, questionID: 9,mc_answers:"Software as a Service (SaaS)"},
        {id: 8, questionID: 9,mc_answers:"Professional Services"},


      ])
      .then(() => {
        return knex.raw("SELECT setval('client_mc_answers_id_seq', (SELECT MAX(id) FROM client_mc_answers))")
      })
    })
}
