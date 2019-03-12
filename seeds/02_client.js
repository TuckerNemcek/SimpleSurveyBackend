
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('client').del()
    .then(function () {
      // Inserts seed entries
      return knex('client').insert([
        {businessEmail: 'tuckluck420@gmail.com'},

      ])
      .then(() => {
        return knex.raw("SELECT setval('client_id_seq', (SELECT MAX(id) FROM client))")
      })
    })
}
