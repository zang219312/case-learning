import React, { Component } from 'react'
import './index.css'
export default class Item extends Component {
  state = {
    mouse: false
  }
  handleMouse = flag => {
    return e => {
      this.setState({
        mouse: flag
      })
    }
  }

  // 勾选的回调
  handleCheck = id => {
    return e => {
      this.props.updateTodo(id, e.target.checked)
    }
  }

  handleDelete = id => {
    return e => {
      if (window.confirm('删除？')) {
        this.props.deleteTodo(id)
      }
    }
  }

  render() {
    const { id, name, done } = this.props
    const { mouse } = this.state
    return (
      <li
        id={id}
        style={{ backgroundColor: mouse ? '#ddd' : 'white' }}
        onMouseLeave={this.handleMouse(false)}
        onMouseEnter={this.handleMouse(true)}
      >
        <label>
          <input
            type="checkbox"
            checked={done}
            onChange={this.handleCheck(id)}
          />
          <span>{name}</span>
        </label>
        <button
          className="btn btn-danger"
          style={{ display: mouse ? 'block' : 'none' }}
          onClick={this.handleDelete(id)}
        >
          删除
        </button>
      </li>
    )
  }
}
