'use strict'


var knex = require('../knex');
var express = require('express');

var router = express.Router();



router.post('/', (req, res) => {

  return knex('client_answers')
  .insert(req.body)
  .returning('*').then((ins) => {
    // console.log(ins[0])
    res.status(200).json(ins)
  })
})


/// NEW
router.get('/', (req, res, next) => {
  return knex('client_answers')
  .returning('*')
  .then((answers) => {

    res.status(200).json(answers)
  })
})
///THIS IS NEW NOT SURE IF IT WORKS
// router.get('/:id', (req, res) => {
//   const id = (req.params.id)
//   return knex('client_answers')
//   .where('id', id)
//   .first()
//   .then((client_answer) => {
//     res.status(200).json(client_answer)
//   })
// })



module.exports = router;
