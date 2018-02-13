import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Authenticated from './Authenticated'
import Redirect from './Redirect'

const _NotLoggedOrRedirect = props => {
  const {
    isLogged,
    redirectUrl,
    children
  } = props

  return !isLogged ? children : <Redirect to={redirectUrl || '/profile'} />
}

_NotLoggedOrRedirect.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  redirectUrl: PropTypes.string
}

const mapStateToProps = state => ({
  isLogged: state.authenticatedReducer.content
})

const _NotLoggedOrRedirectComponent = connect(mapStateToProps)(_NotLoggedOrRedirect)

const NotLoggedOrRedirect = props => {
  const { children } = props

  return (
    <Authenticated>
      <_NotLoggedOrRedirectComponent>
        {children}
      </_NotLoggedOrRedirectComponent>
    </Authenticated>
  )
}

export default NotLoggedOrRedirect