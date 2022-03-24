import { combineReducers } from 'redux'
import count from './count'
import person from './person'

// 汇总所有的 reducer
export default combineReducers({
  count,
  person
})
