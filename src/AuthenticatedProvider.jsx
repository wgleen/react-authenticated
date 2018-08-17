import React, { 
  Component, 
  Children
} from 'react'
import PropTypes from 'prop-types'

const _propTypes = {
  authenticate: PropTypes.func.isRequired,
  redirectUrls: PropTypes.object,
  redirect: PropTypes.func
}

class AuthenticatedProvider extends Component {
  static propTypes = _propTypes
  static childContextTypes = _propTypes

  getChildContext () {
    const { 
      authenticate,
      redirectUrls,
      redirect
    } = this.props

    return { 
      authenticate,
      redirectUrls,
      redirect
    }
  }

  render () {
    const { children } = this.props

    return Children.only(children)
  }
}

export default AuthenticatedProvider