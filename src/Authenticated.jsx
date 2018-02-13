import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class Authenticated extends Component {
  static propTypes = {
    fetching: PropTypes.bool.isRequired,
    received: PropTypes.bool.isRequired
  }

  static contextTypes = {
    authenticate: PropTypes.func.isRequired
  }

  componentWillMount () {
    const {
      authenticate
    } = this.context

    if (authenticate)
      authenticate()
  }

  render () {
    const {
      fetching,
      received,
      children
    } = this.props

    return !fetching && received ? children : null
  }
}

const mapStateToProps = state => ({
  ...state.authenticatedReducer
})

export default connect(mapStateToProps)(Authenticated)