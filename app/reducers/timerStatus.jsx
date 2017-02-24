/*---------------CONSTANTS-----------------*/

const RESET = 'RESET';
const SET_TIMER_STATUS = 'SET_TIMER_STATUS';

/*---------------ACTION CREATORS-----------------*/


export const reset = () => ({
  type: RESET
});

export const setTimerStatus = status => ({
  type: SET_TIMER_STATUS,
  status
});

/*---------------REDUCER-----------------*/


const reducer = (state = '', action) => {

  switch (action.type) {

    case RESET:
      return '';

    case SET_TIMER_STATUS:
      return action.status;

    default:
      return state;
  }
};

export default reducer;
