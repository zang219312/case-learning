import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'

import './App.css'

export default class App extends Component {
  state = {
    todo: [
      {
        id: '001',
        name: 'eat',
        done: true
      },
      {
        id: '002',
        name: 'sleep',
        done: true
      },
      {
        id: '003',
        name: 'code',
        done: false
      }
    ]
  }

  addTodo = todoObj => {
    console.log('app ', todoObj)
    const newTodo = [todoObj, ...this.state.todo]
    this.setState({
      todo: newTodo
    })
  }

  updateTodo = (id, done) => {
    const { todo } = this.state
    const idx = todo.findIndex(v => v.id === id)
    todo[idx].done = done
    this.setState({
      todo
    })
  }

  deleteTodo = id => {
    const { todo } = this.state
    const idx = todo.findIndex(v => v.id === id)
    todo.splice(idx, 1)
    this.setState({
      todo
    })
  }

  handleCheckAll = done => {
    const { todo } = this.state

    this.setState({
      todo: todo.map(v => {
        return {
          ...v,
          done
        }
      })
    })
  }

  clearDoneTodo = _ => {
    const { todo } = this.state

    this.setState({
      todo: todo.filter(v => !v.done)
    })
  }

  render() {
    const { todo } = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List
            todo={todo}
            updateTodo={this.updateTodo}
            deleteTodo={this.deleteTodo}
          />
          <Footer
            todo={todo}
            changeAll={this.handleCheckAll}
            clearDoneTodo={this.clearDoneTodo}
          />
        </div>
      </div>
    )
  }
}
