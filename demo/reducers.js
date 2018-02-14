import { combineReducers } from 'redux'
import { reducer as authenticatedReducer } from '../dist'

const rootReducer = combineReducers({
  authenticatedReducer
})

export default rootReducer