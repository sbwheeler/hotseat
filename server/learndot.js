'use strict'
const axios = require('axios')

const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1NTllY2FjNTNjYmQyZjAzMDA5NmU3N2MiLCJpYXQiOjE0ODg1ODU0MDYsImV4cCI6MTQ4OTE5MDIwNn0.ExjUw4jLOoOabQwgifLZp1ngQzLqXF_kP_yymml50gI"


//gets user info on learndot
module.exports = require('express').Router()
	.use((req, res, next) => {
        const url = `https://learn.fullstackacademy.com/api${req.path}`
        console.log('PATH::::', url)
        console.log('session::::', req.session.token)
		axios.get(url,
        {
            headers: {
                Authorization: `Bearer ${req.session.token}`
            }
        })
        .then(({data}) => res.send(data))
        .catch(next)
    })
    
//on logout clear session.token => null