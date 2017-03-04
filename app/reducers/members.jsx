/*---------------CONSTANTS-----------------*/

const FETCH_MEMBERS = 'FETCH_MEMBERS';

/*---------------ACTION CREATORS-----------------*/


export const members = questions => ({
  type: FETCH_MEMBERS,
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
