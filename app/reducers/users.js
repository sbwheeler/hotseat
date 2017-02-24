
const reducer = (state = null, action) => {

  let newState = Object.assign({}, state)

  switch(action.type) {

  case FETCH_ALL:
    newState = action.users;
    break;
  }

  return newState;
}

const FETCH_ALL = 'FETCH_ALL';

export function fetchUsers(users) {
  return {
    type: FETCH_ALL, users
  }
}

export default reducer
