'use strict'
const Question = require('APP/db/models/questions')

module.exports = require('express').Router()
	.get('/', (req, res, next) => {
        Question.findAll()
        .then(questions => res.json(questions))
        .catch(console.err)
    })
		
