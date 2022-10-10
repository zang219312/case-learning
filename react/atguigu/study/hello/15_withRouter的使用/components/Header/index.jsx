import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
class Header extends Component {
  back = () => {
    this.props.history.goBack()
  }
  forward = () => {
    this.props.history.goForward()
  }

  go = () => {
    this.props.history.go(2)
  }
  render() {
    console.log('header 收到的', this.props)

    return (
      <div>
        <h2>React Router Demo</h2>
        <button onClick={() => this.forward()}>前进</button>
        <button onClick={() => this.back()}>后退</button>
        <button onClick={() => this.go()}>go</button>
      </div>
    )
  }
}

// withRouter 加工一般组件，让一般组件具有路由组件特有的api
export default withRouter(Header)
// 返回一个新组件
