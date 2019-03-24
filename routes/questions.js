'use strict'


var knex = require('../knex');
var express = require('express');

var router = express.Router();

router.get('/generalQuestions', (req, res, next) => {
  return knex('questions')
  .returning('*')
  .then(async(questions) => {
    let promises = questions.map(question => {
      return knex('client_mc_answers')
      .where('client_mc_answers.questionID', question.id)
      .then(mcAnswers => {
        if (mcAnswers.length > 0){
          question.mcAnswers = mcAnswers
        }
        return question
      })
    })
    let data = await Promise.all(promises)
    console.log(data)
    res.status(200).json(data.filter(question => question.id > 0 && question.id <= 9))
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
