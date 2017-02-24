/*---------------CONSTANTS-----------------*/

const FETCH_QUESTIONS = 'FETCH_QUESTIONS';

/*---------------ACTION CREATORS-----------------*/


export const fetchQuestions = questions => ({
  type: FETCH_QUESTIONS,
  questions
});


/*---------------REDUCER-----------------*/


const reducer = (state = [], action) => {

  switch (action.type) {

    case FETCH_QUESTIONS:
      let questionsArr = [];
      for (let key in action.questions) {
        questionsArr.push(action.questions[key])
      }
      return questionsArr;

    default:
      return state;
  }
};

export default reducer;
