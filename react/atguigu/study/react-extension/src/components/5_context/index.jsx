import React, { Component } from 'react'
import './index.css'
const MyContext = React.createContext()
export default class A extends Component {
  state = {
    username: 'tom'
  }
  render() {
    return (
      <div className="parent">
        <h3>A</h3>
        <h4>用户名：{this.state.username}</h4>
        <MyContext.Provider value={this.state.username}>
          <B />
        </MyContext.Provider>
      </div>
    )
  }
}

class B extends Component {
  render() {
    console.log(this)
    return (
      <div className="child">
        <h3>B</h3>
        <h4>我从A收到的用户名：{}</h4>
        <C />
      </div>
    )
  }
}

/* class C extends Component {
  static contextType = MyContext
  render() {
    console.log(this)
    return (
      <div className="grand">
        <h3>C</h3>
        <h4>我从A收到的用户名：{}</h4>
      </div>
    )
  }
} */

function C() {
  return (
    <div className="grand">
      <h3>C</h3>
      <h4>
        我从A收到的用户名：
        <MyContext.Consumer>{value => `${value}`}</MyContext.Consumer>
      </h4>
    </div>
  )
}
