import React, { Component } from 'react'
import './index.css'
export default class Footer extends Component {
  handleCheckAll = e => {
    this.props.changeAll(e.target.checked)
  }
  handleClearDoneTodo = () => {
    this.props.clearDoneTodo()
  }
  render() {
    const { todo } = this.props
    const doneCount = todo.filter(v => v.done).length
    const total = todo.length
    return (
      <div
        className="todo-footer"
        style={{ display: total === 0 ? 'none' : '' }}
      >
        <label>
          <input
            type="checkbox"
            onChange={this.handleCheckAll}
            checked={doneCount === total && total > 0}
          />
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部{total}
        </span>
        <button className="btn btn-danger" onClick={this.handleClearDoneTodo}>
          清除已完成任务
        </button>
      </div>
    )
  }
}
