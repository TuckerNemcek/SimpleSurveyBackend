'use strict'


var knex = require('../knex');
var express = require('express');

var router = express.Router();


router.get('/generalQuestions', (req, res, next) => {
  return knex('questions')
  .returning('*')
  .then((questions) => {

    res.status(200).json(questions.filter(question => question.id <= 9))
  })
})

module.exports = router;
