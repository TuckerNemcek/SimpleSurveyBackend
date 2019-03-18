'use strict'


var knex = require('../knex');
var express = require('express');

var router = express.Router();

router.get('/generalQuestions', (req, res, next) => {
  return knex('questions')
  .returning('*')
  .then((questions) => {
    res.status(200).json(questions.filter(question => question.id > 0 && question.id <= 24))
  })
})


router.get('/incomeStatement', (req, res, next) => {
  return knex('questions')
  .returning('*')
  .then((questions) => {

    res.status(200).json(questions.filter(question => question.id > 9 && question.id <= 16))
  })
})

router.get('/balanceSheet', (req, res, next) => {
  return knex('questions')
  .returning('*')
  .then((questions) => {

    res.status(200).json(questions.filter(question => question.id > 16 && question.id <=24 ))
  })
})


module.exports = router;
