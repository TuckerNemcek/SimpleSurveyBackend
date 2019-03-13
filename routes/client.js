'use strict'


var knex = require('../knex');
var express = require('express');

var router = express.Router();


router.post('/', (req, res, next) => {
  return knex('client')
  .insert({
    businessEmail:'tuckernemcek21@gmail.com',
    businessName: 'Tucks Bucks',
    positionInBusiness: "head honcho"
  })
  .returning('*')
  .then((ins) => {
    // console.log(ins[0])
    res.status(200).json(ins[0])
  })
})

module.exports = router;
