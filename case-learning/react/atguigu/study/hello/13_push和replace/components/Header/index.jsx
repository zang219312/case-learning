import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    console.log('header 收到的', this.props)

    return <h2>React Router Demo</h2>
  }
}
