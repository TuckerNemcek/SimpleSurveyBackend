
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('client').del()
    .then(function () {
      // Inserts seed entries
      return knex('client').insert([
        {id: 1,businessEmail: 'tuckluck@aol.com',businessName: 'Tuck\'s Bucks',positionInBusiness: 'Head Honcho'},
      ])
      .then(() => {
        return knex.raw("SELECT setval('client_id_seq', (SELECT MAX(id) FROM client))")
      })
    })
}
