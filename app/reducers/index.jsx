import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  users: require('./users').default,
  timerStatus: require('./timerStatus').default,
  questions: require('./questions').default
})

export default rootReducer
