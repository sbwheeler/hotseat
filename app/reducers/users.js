const initialState = {
  users: {},
  selectedPerson: ''
}


const reducer = (state = initialState, action) => {

  let newState = Object.assign({}, state)

  switch (action.type) {

    case FETCH_ALL:
      newState.users = action.users;
      break;
    case SELECT_PERSON:
      newState.selectedPerson = action.selectedPerson
      break;
    default:
      return newState;
  }

  return newState;
}

const FETCH_ALL = 'FETCH_ALL';
const SELECT_PERSON = 'SELECT_PERSON';

export function fetchUsers(users) {
  return {
    type: FETCH_ALL,
    users
  }
}

export function selectPerson(selectedPerson) {
  return {
    type: SELECT_PERSON,
    selectedPerson
  }
}

export default reducer
