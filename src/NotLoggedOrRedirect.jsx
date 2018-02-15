import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Authenticated from './Authenticated'
import Redirect from './Redirect'

const _NotLoggedOrRedirect = (props, context) => {
  const {
    isLogged,
    children
  } = props

  const { redirectUrls } = context

  const redirectUrl = redirectUrls && redirectUrls.logged

  return !isLogged ? children : (redirectUrl ? <Redirect to={redirectUrl} /> : null)
}

_NotLoggedOrRedirect.propTypes = {
  isLogged: PropTypes.bool.isRequired
}

_NotLoggedOrRedirect.contextTypes = {
  redirectUrls: PropTypes.object
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