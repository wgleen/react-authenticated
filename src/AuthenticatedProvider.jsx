import React, { 
  Component, 
  Children
} from 'react'
import PropTypes from 'prop-types'

const _propTypes = {
  authenticate: PropTypes.func.isRequired
}

class AuthenticatedProvider extends Component {
  static propTypes = _propTypes
  static childContextTypes = _propTypes

  getChildContext () {
    const { authenticate } = this.props

    return { authenticate }
  }

  render () {
    const { children } = this.props

    return Children.only(children)
  }
}

export default AuthenticatedProvider