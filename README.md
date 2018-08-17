# react-authenticated
> Declarative components for controlling authenticated users

## Installation
```bash
npm i -S react-authenticated
```

## Props
### AuthenticatedProvider
* `authenticate` - (func) action creator function
* `redirectUrls` - (object) config the url to redirect user when logged in and not logged in
* `redirect` - (func) your function for redirection

## Usage
#### Do your action creator
```javascript
import { 
  fetchingAuthenticate,
  receivedAuthenticate
} from 'react-authenticated'

export const auth = credentials => {
  return dispatch => {
    dispatch(fetchingAuthenticate(true))
      
    httpClient('/auth', credentials)
      .then(res => {
          // Your auth process...
          dispatch(receivedAuthenticate(res.data))
        })
        .catch(er => {
          dispatch(fetchingAuthenticate(false))
        })
  }
}
```

#### Add the authenticate reducer
```javascript
import { combineReducers } from 'redux'
import { reducer as authenticatedReducer } from 'react-authenticated'

const rootReducer = combineReducers({
  // Your other reducers...
  authenticatedReducer
})
```

#### Add the AuthenticatedProvider on application top level with login action
```javascript
import { AuthenticatedProvider } from 'react-authenticated'
import { bindActionCreators } from 'redux'
import store from 'path/to/store'
import { auth } from 'path/to/actions'
import createHistory from 'history/createBrowserHistory'

export const history = createHistory()

const App = props => {
  const {
    children,
    login
  } = props

  return (
    <Provider store={store}>
      <AuthenticatedProvider 
        authenticate={auth}
        redirectUrls={{
          logged: '/profile',
          unauthorized: '/entrar'
        }}
        redirect={history.replace}
      >
        {children}
      </AuthenticatedProvider>
    </Provider>
  )
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ auth }, dispatch)

export default connect(null, mapDispatchToProps)(App)
```

#### Now you can use the authentication components in your application
```javascript
  import { 
    Authenticated,
    LoggedOrRedirect,
    NotLoggedOrRedirect
  } from 'react-authenticated'

  const Main = props => (
    <div>
      <Authenticated>
        show after authentication
      </Authenticated>

      <LoggedOrRedirect>
        show only authentication was success
      </LoggedOrRedirect>

      <NotLoggedOrRedirect>
        show only authentication was fail
      </NotLoggedOrRedirect>
    </div>
  )
```