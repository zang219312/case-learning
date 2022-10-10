import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPerson } from '../../redux/actions/person'
import { nanoid } from 'nanoid'
class Person extends Component {
  addPerson = () => {
    const name = this.nameNode.value
    const age = this.ageNode.value
    console.log(name, age)
    this.props.addPerson({
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
        <h3>上方组件求和：{this.props.count}</h3>
        <input ref={c => (this.nameNode = c)} type="text" placeholder="name" />
        <input ref={c => (this.ageNode = c)} type="text" placeholder="age" />
        <button onClick={this.addPerson}>submit</button>
        <ul>
          {this.props.person.map(v => {
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
    person: state.person,
    count: state.count
  }),
  { addPerson }
)(Person)
