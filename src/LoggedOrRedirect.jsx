import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Authenticated from './Authenticated'
import Redirect from './Redirect'

const _LoggedOrRedirect = props => {
  const {
    isLogged,
    redirectUrl,
    children
  } = props

  return isLogged ? children : (redirectUrl ? <Redirect to={redirectUrl} /> : null)
}

_LoggedOrRedirect.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  redirectUrl: PropTypes.string
}

const mapStateToProps = state => ({
  isLogged: state.authenticatedReducer.content
})

const _LoggedOrRedirectComponent = connect(mapStateToProps)(_LoggedOrRedirect)

const LoggedOrRedirect = props => {
  const { children } = props

  return (
    <Authenticated>
      <_LoggedOrRedirectComponent>
        {children}
      </_LoggedOrRedirectComponent>
    </Authenticated>
  )
}

export default LoggedOrRedirect