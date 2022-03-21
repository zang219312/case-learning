import React, { Component } from 'react'

export default class Count extends Component {
  state = {
    count: 0
  }

  increment = () => {
    const { value } = this.selectNumber
    const { count } = this.state
    this.setState({ count: count + +value })
  }

  decrement = () => {
    const { value } = this.selectNumber
    const { count } = this.state

    this.setState({ count: count - +value })
  }

  // 奇数再加
  incrementIfOdd = () => {
    const { value } = this.selectNumber
    const { count } = this.state
    if (count % 2 !== 0) {
      this.setState({ count: count + +value })
    }
  }

  // 异步加
  incrementAsync = () => {
    const { value } = this.selectNumber
    const { count } = this.state
    setTimeout(() => {
      this.setState({ count: count + +value })
    }, 500)
  }

  render() {
    return (
      <div>
        <h3>当前求和的值：{this.state.count}</h3>
        <select ref={c => (this.selectNumber = c)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        &nbsp; &nbsp;
        <button onClick={this.increment}>+</button> &nbsp;
        <button onClick={this.decrement}>-</button> &nbsp;
        <button onClick={this.incrementIfOdd}>奇数再加</button> &nbsp;
        <button onClick={this.incrementAsync}>异步加</button>
      </div>
    )
  }
}
