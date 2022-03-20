import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'

import Header from './components/Header'
import CusNavLink from './components/CusNavLink'
export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header">
              <Header aa="111" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              <CusNavLink replace to="/about">
                About
              </CusNavLink>
              <CusNavLink replace to="/home">
                Home
              </CusNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                <Switch>
                  <Route path="/about" component={About} />
                  <Route path="/home" component={Home} />
                  <Redirect to="/about" />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
