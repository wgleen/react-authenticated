import React, { Component } from 'react'
import createHistory from 'history/createHashHistory'

const history = createHistory() 

class Redirect extends Component {
  componentWillMount () {
    const { url } = this.props

    history.replace(url)
  }

  render () {
    return null
  }
}

export default Redirect