const db = require('APP/db')

const seedQuestions = () => db.Promise.map([
  {question: `If you were frozen alive and woken up in 1000 years, what would be the weirdest thing to readjust to?`},
  {question: `What did you want to be when you were in Kindergarten?`},
  {question: `If you had to have animals for hands, what species would you choose?`}, 
  {question: `How much money would you cut off your pinky for?`}, 
  {question: `What is the nicest compliment you've ever received?`}, 
  {question: `If you could eat only one food for the rest of your life (assume it sustains you), what would you eat?`},
  {question: `What do you always pack when you're going somewhere (not including clothes and toiletries)`} 
], question => db.model('question').create(question))

db.didSync
.then(() => db.sync({force: true}))
.then(seedQuestions)
.then(questions => console.log(`Seeded ${questions.length} questions OK`))
.catch(error => console.error(error))    
.finally(() => db.close())
