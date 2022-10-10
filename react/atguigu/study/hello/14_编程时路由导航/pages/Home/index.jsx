import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import News from './News'
import Message from './Message'

import CusNavLink from '../../components/CusNavLink'
export default class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home</h2>
        <div>
          <ul className="nav nav-tabs">
            <li>
              <CusNavLink to="/home/news">News</CusNavLink>
            </li>
            <li>
              <CusNavLink to="/home/message">Message</CusNavLink>
            </li>
          </ul>

          <Switch>
            <Route path="/home/news" component={News} />
            <Route path="/home/message" component={Message} />
            <Redirect to="/home/news" />
          </Switch>
        </div>
      </div>
    )
  }
}
