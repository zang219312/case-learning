import { createStore, applyMiddleware, combineReducers } from 'redux'
import countReducer from './reducers/count'
import personReducer from './reducers/person'
import thunk from 'redux-thunk'

// 汇总所有的 reducer
const allReducer = combineReducers({
  sum: countReducer,
  pp: personReducer
})
export default createStore(allReducer, applyMiddleware(thunk))
