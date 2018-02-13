import {
  FETCH_AUTHENTICATE,
  RECEIVE_AUTHENTICATE
} from './actionTypes'

export const fetchingAuthenticate = (value = true) => ({
    type: FETCH_AUTHENTICATE,
    payload: value
  })

export const receivedAuthenticate = result => ({
    type: RECEIVE_AUTHENTICATE,
    payload: result
  })