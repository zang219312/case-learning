import React, { Component } from 'react'
import Child from './Child'
export default class Parent extends Component {
  state = {
    hasError: ''
  }
  // 当 Parent组件的子组件报错时，触发
  static getDerivedStateFromError(error) {
    console.log('23', error)
    return { hasError: error }
  }

  componentDidCatch() {
    console.log('组件渲染出错')
  }

  render() {
    return (
      <div>
        <h2>Parent</h2>
        {this.state.hasError ? <h3>联系客服</h3> : <Child />}
      </div>
    )
  }
}
