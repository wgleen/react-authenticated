# react-authenticated
> Declarative components for controlling authenticated users

## Installation
```bash
npm i -S react-authenticated
```

## Props
### AuthenticatedProvider
* `authenticate` - action creator function

### LoggedOrRedirect
* `url` - url to redirect user (default is '/login')

### NotLoggedOrRedirect
* `url` - url to redirect user (default is '/profile')

## Usage
---
#### Do your action creator
```javascript
	import { 
    fetchAuthenticate,
    receiveAuthenticate
  } from 'react-authenticated'
  
  export const login = credentials => {
    return dispatch => {
      dispatch(fetchAuthenticate(true))
        
      httpClient('/login', credentials)
        .then(res => {
            // Your login process...
            dispatch(receiveAuthenticate(res.data))
          })
          .catch(er => {
            dispatch(fetchAuthenticate(false))
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
  import { login } from 'path/to/actions'

  const App = props => {
    const {
      children,
      login
    } = props

    return (
      <Provider store={store}>
        <AuthenticatedProvider authenticate={login}>
          {children}
        </AuthenticatedProvider>
      </Provider>
    )
  }

  const mapDispatchToProps = dispatch =>
    bindActionCreators({ login }, dispatch)

  export default connect(null, mapDispatchToProps)(App)
```

#### Noow you can use the authentication components in your application
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