import { 
  fetchingAuthenticate,
  receivedAuthenticate
} from '../dist'

export const login = () => {
  return dispatch => {
    dispatch(fetchingAuthenticate(true))

    fetch('https://reqres.in/api/login')
      .then(res => {
        dispatch(receivedAuthenticate(true))
      })
      .catch(err => {
        dispatch(fetchingAuthenticate(false))
      })
  }
}