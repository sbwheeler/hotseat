'use-strict'
const app = require('APP'), {env} = app
const debug = require('debug')(`${app.name}:auth`)
// const request = require('request')
const axios = require('axios')

// const User = require('APP/db/models/user')
const auth = require('express').Router()

// POST requests for local login:
auth.post('/login/learndot', (req, res) => {
    axios.post('https://learn.fullstackacademy.com/auth/local', req.body)
    .then(console.log, console.error)
})

auth.post('/logout', (req, res, next) => {
  req.logout()
  res.redirect('/api/auth/whoami')
})

module.exports = auth