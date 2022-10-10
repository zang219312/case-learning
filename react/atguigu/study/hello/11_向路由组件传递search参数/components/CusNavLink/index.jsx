import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
export default class CusNavLink extends Component {
  render() {
    console.log(this.props)
    return (
      <NavLink
        activeClassName="custom"
        className="list-group-item"
        {...this.props}
      />
    )
  }
}
