import React, { Component } from 'react'

export default class Demo extends Component {
  state = {
    count: 0
  }

  add = () => {
    // 1.对象式
    /* this.setState({ count: this.state.count + 1 }, () => {
      console.log(this.state.count)
    }) */
    // 2.函数式
    this.setState(state => ({ count: state.count + 1 }))
  }
  render() {
    console.log(this)
    return (
      <div>
        <h2>当前求和的值：{this.state.count}</h2>
        <button onClick={this.add}>add</button>
      </div>
    )
  }
}
