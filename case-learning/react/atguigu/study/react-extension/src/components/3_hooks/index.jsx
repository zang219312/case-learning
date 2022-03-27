import React, { Component } from 'react'
import ReactDOM from 'react-dom'
/* class Demo extends Component {
  state = { count: 0 }

  myRef = React.createRef()

  add = () => {
    this.setState(state => ({ count: state.count + 1 }))
  }

  show = () => {
    console.log(this.myRef.current.value)
  }

  unmount = () => {
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState(state => ({ count: state.count + 1 }))
    }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.timer)
  }
  render() {
    return (
      <div>
        <input type="text" ref={this.myRef} />
        <h2>当前求和为：{this.state.count}</h2>
        <button onClick={this.add}>add</button>
        <button onClick={this.unmount}>卸载组件</button>
        <button onClick={this.show}>点击显示</button>
      </div>
    )
  }
} */

function Demo() {
  console.log('demo')
  const [count, setCount] = React.useState(0)
  const myRef = React.useRef()

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCount(count => count + 1)
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])

  function add() {
    // setCount(count + 1) // 第一种写法
    setCount(count => count + 1)
  }
  function show() {
    console.log(myRef.current.value)
  }

  function unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  }

  return (
    <div>
      <input type="text" ref={myRef} />
      <h2>当前求和为：{count}</h2>
      <button onClick={add}>add</button>
      <button onClick={unmount}>卸载组件</button>
      <button onClick={show}>点击显示</button>
    </div>
  )
}

export default Demo
