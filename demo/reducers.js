import { combineReducers } from 'redux'
import { reducer } from '../dist'

const rootReducer = combineReducers({
  authenticatedReducer: reducer
})

export default rootReducer