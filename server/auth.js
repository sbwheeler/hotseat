'use-strict'
const app = require('APP'), {env} = app
const debug = require('debug')(`${app.name}:auth`)
const axios = require('axios')

// const User = require('APP/db/models/user')
const auth = require('express').Router()

// POST requests uses learndot's login - sends back token if login info is in their system and puts it on the session
auth.post('/login/learndot', (req, res, next) => {
    axios.post('https://learn.fullstackacademy.com/auth/local', req.body)
    .then(({data: {token}}) => {
      req.session.token = token
      res.send(token)
    })
    .catch(next)
})

auth.get('/whoami', (req, res) => {
  console.log('did i log out?:::', req.session)
  res.send(req.user)
})


//TODO: on logout clear session.token => null
auth.post('/logout', (req, res, next) => {
  req.session.token = null
  res.redirect('/api/auth/whoami')
})

module.exports = auth