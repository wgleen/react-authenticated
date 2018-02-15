import React, { Component } from 'react'
import createHistory from 'history/createHashHistory'

const history = createHistory() 

class Redirect extends Component {
  componentWillMount () {
    const { to } = this.props

    history.replace(to)
  }

  render () {
    return null
  }
}

export default Redirect