import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createAddPersonAction } from '../../redux/actions/person'
import { nanoid } from 'nanoid'
class Person extends Component {
  addPerson = () => {
    const name = this.nameNode.value
    const age = this.ageNode.value
    console.log(name, age)
    this.props.addOne({
      id: nanoid(),
      name,
      age
    })

    this.nameNode.value = ''
    this.ageNode.value = ''
  }
  render() {
    return (
      <div className="person">
        <h3>上方组件求和：{this.props.sum}</h3>
        <input ref={c => (this.nameNode = c)} type="text" placeholder="name" />
        <input ref={c => (this.ageNode = c)} type="text" placeholder="age" />
        <button onClick={this.addPerson}>submit</button>
        <ul>
          {this.props.list.map(v => {
            return (
              <li key={v.id}>
                姓名：{v.name} 年龄：{v.age}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default connect(
  state => ({
    list: state.pp,
    sum: state.sum
  }),
  { addOne: createAddPersonAction }
)(Person)
