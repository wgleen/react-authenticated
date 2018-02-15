import {
  FETCH_AUTHENTICATE,
  RECEIVE_AUTHENTICATE
} from './actionTypes'

const INITIAL_STATE = {
  fetching: false,
  received: false,
  content: false
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_AUTHENTICATE:
      return {
        fetching: action.payload,
        received: !action.payload,
        content: false
      }
  
    case RECEIVE_AUTHENTICATE:
      return {
        fetching: false,
        received: true,
        content: action.payload
      }

    default:
      return state
  }
}