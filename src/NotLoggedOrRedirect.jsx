import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Authenticated from './Authenticated'

class _NotLoggedOrRedirect extends Component {
  componentWillMount () {
    const { isLogged } = this.props

    const { 
      redirectUrls,
      redirect
    } = this.context

    isLogged && redirectUrls && redirect && redirect(redirectUrls.logged)
  }

  render () {
    const {
      isLogged,
      children
    } = this.props
  
    return !isLogged ? children : null
  }
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