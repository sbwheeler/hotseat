import axios from 'axios'

const auth = (state=null, action) => {
  switch(action.type) {
  case AUTHENTICATED:
    return action.user 
  }
  return state
}

const AUTHENTICATED = 'AUTHENTICATED'
export const authenticated = user => ({
  type: AUTHENTICATED, user
})

const USER_TOKEN = 'USER_TOKEN'
export const setToken = token => ({
  type: USER_TOKEN, token 
})

// posts to route which will try and get token from learndot - dispatches whoami which can use token to get user's info on learndot  
export const login = (email, password) =>
  dispatch =>
    axios.post('/api/auth/login/learndot',
      {email, password})
      .then((response) => {
        console.log('RES', response)
        dispatch(whoami())
      })
      .catch(() => dispatch(whoami()))     

export const logout = () =>
  dispatch =>
    axios.post('/api/auth/logout')
      .then(() => dispatch(whoami()))
      .catch(() => dispatch(whoami()))

// gets users info from learndot and puts it on state 
export const whoami = () =>
  dispatch =>
    axios.get('/api/learndot/users/me')
      .then(response => {
        const user = response.data
        dispatch(authenticated(user))
      })
      .catch(failed => dispatch(authenticated(null)))

export default auth