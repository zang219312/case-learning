import React, { Component } from 'react'
import store from '../../redux/store'
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction
} from '../../redux/count_action'

export default class Count extends Component {
  state = {
    aaa: 111
  }

  componentDidMount() {
    store.subscribe(() => {
      this.setState({})
    })
  }

  increment = () => {
    const { value } = this.selectNumber
    store.dispatch(createIncrementAction(value))
  }

  decrement = () => {
    const { value } = this.selectNumber
    store.dispatch(createDecrementAction(value))
  }

  // 奇数再加
  incrementIfOdd = () => {
    const { value } = this.selectNumber
    const count = store.getState()
    if (count % 2 !== 0) {
      store.dispatch(createIncrementAction(value))
    }
  }

  // 异步加
  incrementAsync = () => {
    const { value } = this.selectNumber
    /* setTimeout(() => {
      store.dispatch(createIncrementAction(value))
    }, 500) */
    store.dispatch(createIncrementAsyncAction(value, 500))
  }

  render() {
    return (
      <div>
        <h3>当前求和的值： {store.getState()}</h3>
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
