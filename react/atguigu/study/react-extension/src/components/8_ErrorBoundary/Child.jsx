import React, { Component } from 'react'

export default class Child extends Component {
  state = {
    /*  users: [
      { id: '001', name: 'tom', age: 10 },
      { id: '002', name: 'jerry', age: 11 },
      { id: '003', name: 'bob', age: 12 }
    ] */
    users: 'bob'
  }
  render() {
    return (
      <div>
        <h3>Child</h3>
        {this.state.users.map(v => {
          return (
            <h4 key={v.id}>
              {v.name}--{v.age}
            </h4>
          )
        })}
      </div>
    )
  }
}
