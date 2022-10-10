import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Item from '../Item'

import './index.css'
export default class List extends Component {
  static propTypes = {
    todo: PropTypes.array.isRequired,
    updateTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
  }

  render() {
    const { todo, updateTodo, deleteTodo } = this.props
    console.log('list ', todo)
    return (
      <ul className="todo-main">
        {todo.map(v => {
          return (
            <Item
              key={v.id}
              {...v}
              updateTodo={updateTodo}
              deleteTodo={deleteTodo}
            />
          )
        })}
      </ul>
    )
  }
}
