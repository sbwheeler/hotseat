'use strict'

const api = module.exports = require('express').Router()

api
  .get('/heartbeat', (req, res) => res.send({ok: true,}))
  .use('/users', require('./users'))
  .use('/questions', require('./questions'))

// No routes matched? 404.
api.use((req, res) => res.status(404).end())