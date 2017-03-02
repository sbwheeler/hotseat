'use-strict'
const app = require('APP'), {env} = app
const debug = require('debug')(`${app.name}:auth`)
const request = require('request')

// const User = require('APP/db/models/user')
const auth = require('express').Router()

// POST requests for local login:
auth.post('/login/learndot', (req, res) => {
    console.log('email and password:::::', req.body)
    request.post('https://learn.fullstackacademy.com/auth/local', req.body, (err, res, body) => {
        if (err) console.error(err)
        console.log('BODY:::::', body)
    }) 
})

auth.post('/logout', (req, res, next) => {
  req.logout()
  res.redirect('/api/auth/whoami')
})

module.exports = auth