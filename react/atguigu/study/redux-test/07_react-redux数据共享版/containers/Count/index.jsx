import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction
} from '../../redux/actions/count'
import { INCREMENT, DECREMENT } from '../../redux/constant'

// 定义UI组件
class Count extends Component {
  state = {
    aaa: 111
  }

  increment = () => {
    const { value } = this.selectNumber
    this.props.increment(value)
  }

  decrement = () => {
    const { value } = this.selectNumber
    this.props.decrement(value)
  }

  // 奇数再加
  incrementIfOdd = () => {
    const { value } = this.selectNumber
    if (this.props.count % 2 !== 0) {
      this.props.increment(value)
    }
  }

  // 异步加
  incrementAsync = () => {
    const { value } = this.selectNumber
    this.props.incrementAsync(value, 500)
  }

  render() {
    console.log('UI ', this.props)
    return (
      <div>
        <h2>下方组件的人数为：{this.props.renshu}</h2>
        <h3>当前求和的值： {this.props.count}</h3>
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

// 容器组件

// 创建并暴露一个Count的容器组件
export default connect(
  state => ({
    count: state.sum,
    renshu: state.pp.length
  }),
  {
    [INCREMENT]: createIncrementAction,
    [DECREMENT]: createDecrementAction,
    incrementAsync: createIncrementAsyncAction
  }
)(Count)
