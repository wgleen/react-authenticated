import React from 'react'
import {
  Provider,
  connect
} from 'react-redux'
import thunk from 'redux-thunk'
import { 
  createStore, 
  applyMiddleware,
  bindActionCreators
} from 'redux'
import reducers from './reducers'
import { login } from './actions'
import { composeWithDevTools } from 'redux-devtools-extension'
import { 
  AuthenticatedProvider,
  Authenticated,
  LoggedOrRedirect,
  NotLoggedOrRedirect
} from '../lib'

const middlewares = applyMiddleware(thunk)

let store = createStore(
  reducers,
  composeWithDevTools(middlewares)
)

const _AuthenticatedComponent = props => {
  const { login } = props

  return (
    <AuthenticatedProvider
      authenticate={() => {
        login()
      }}
      redirectUrls={{
        logged: '/profile',
        notLogged: '/entrar'
      }}
    >
      <div>
        <Authenticated>
          <div>Only Authenticated</div>
        </Authenticated>
  
        <LoggedOrRedirect>
          <div>Only Logged</div>
        </LoggedOrRedirect>
  
        <NotLoggedOrRedirect>
          <div>Only Not Logged</div>
        </NotLoggedOrRedirect>
      </div>
    </AuthenticatedProvider>
  )
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ login }, dispatch)

const AuthenticatedComponent = connect(null, mapDispatchToProps)(_AuthenticatedComponent)

const App = props => (
  <div>
    <h1>React Authenticated</h1>

    <Provider store={store}>
      <AuthenticatedComponent/>
    </Provider>
  </div>
)

export default App