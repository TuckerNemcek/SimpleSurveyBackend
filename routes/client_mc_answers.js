'use strict'


var knex = require('../knex');
var express = require('express');

var router = express.Router();


router.post('/', (req, res, next) => {
  if(!req.answer){
    next({
      status: 400,
      message: "must include an answer"
    })
  }
  return knex('client_answers')
  .insert({
    questionID: req.body.questionID,
    answer: req.body.answer
  })
  .returning('*').then((ins) => {
    // console.log(ins[0])
    res.status(200).json(ins)
  })
})



module.exports = router;
