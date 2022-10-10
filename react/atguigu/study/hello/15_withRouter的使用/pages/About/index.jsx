import React, { Component } from 'react'

export default class About extends Component {
  render() {
    console.log('about 收到的', this.props)
    return <h2>About</h2>
  }
}
