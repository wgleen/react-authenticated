import { combineReducers } from 'redux'
import { reducer as authenticatedReducer } from '../lib'

const rootReducer = combineReducers({
  authenticatedReducer
})

export default rootReducer