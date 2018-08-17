import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Authenticated from './Authenticated'

class _LoggedOrRedirect extends Component {
  componentWillMount () {
    const { isLogged } = this.props

    const { 
      redirectUrls,
      redirect
    } = this.context

    !isLogged && redirectUrls && redirect && redirect(redirectUrls.unauthorized)
  }

  render () {
    const {
      isLogged,
      children
    } = this.props
    
    return isLogged ? children : null
  }
}

_LoggedOrRedirect.propTypes = {
  isLogged: PropTypes.bool.isRequired
}

_LoggedOrRedirect.contextTypes = {
  redirectUrls: PropTypes.object
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