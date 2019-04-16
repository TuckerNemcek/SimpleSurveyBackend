'use strict'


var knex = require('../knex');
var express = require('express');


var router = express.Router();

router.post('/', (req, res, next) => {
  console.log(req.body)
  res.setHeader('Access-Control-Allow-Origin', '*')
   knex('client_answers')
  .insert(req.body)
  .returning('*').then((ins) => {
    console.log(ins)
  return res.status(200).json(ins)

  })
})


/// NEW
router.get('/', (req, res, next) => {
  return knex('client_answers')
  .returning('*')
  .join('questions', 'client_answers.questionID','questions.id')
  .then((answers) => {

    res.status(200).json(answers)
  })
})




module.exports = router;
