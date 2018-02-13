import { combineReducers } from 'redux'
import todos from '../modules/todo';
import visibilityFilter from '../modules/visibilityFilter'

const todoApp = combineReducers({
  todos,
  visibilityFilter
})

export default todoApp