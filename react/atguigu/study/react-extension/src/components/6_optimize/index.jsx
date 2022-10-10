import React, { PureComponent } from 'react'
import './index.css'
export default class Parent extends PureComponent {
  state = {
    car: 'bmw'
  }

  changeCar = () => {
    this.setState({ car: 'audi' })
  }

  /* shouldComponentUpdate(nextProps, nextState) {
    console.log(this.props, this.state)
    console.log(nextProps, nextState)

    return !this.state.car === nextState.car
  } */
  render() {
    return (
      <div className="parent">
        <h3>Parent,{this.state.car}</h3>
        <button onClick={this.changeCar}>换车</button>
        <Child car={this.state.car} />
      </div>
    )
  }
}

class Child extends PureComponent {
  /* shouldComponentUpdate(nextProps, nextState) {
    console.log(this.props, this.state)
    console.log(nextProps, nextState)

    return !this.props.car === nextProps.car ? false : true
  } */
  render() {
    return (
      <div className="child">
        <h3>Child </h3>
        <span>{this.props.car}</span>
      </div>
    )
  }
}
