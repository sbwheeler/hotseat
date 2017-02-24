import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  users: require('./users').default,
  timerStatus: require('./timerStatus').default,
  questions: require('./questions').default
})

export default rootReducer
