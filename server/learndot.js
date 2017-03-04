'use strict'
const axios = require('axios')

//TODO: right now this MW throws an error when whoami is called on logout - maybe we want to avoid this in some way?

//gets user info on learndot
module.exports = require('express').Router()
	.use((req, res, next) => {
        const url = `https://learn.fullstackacademy.com/api${req.path}`
		axios.get(url,
        {
            headers: {
                Authorization: `Bearer ${req.session.token}`
            }
        })
        .then(({data}) => {
            console.log('my session:::::::=>=>', req.session)
            res.send(data)
        })
        .catch(next)
    })
    
