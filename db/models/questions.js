const db = require('APP/db')
const Sequelize = require('sequelize')

const Question = db.define('question', {
    question: {
        type: Sequelize.TEXT,
        allowNull: false,
    }
}, {
    hooks: {
        beforeValidate: (instance) => 
            instance.question[instance.question.length - 1] !== '?'?
            instance.question += '?' : null
    }
})

module.exports = Question
