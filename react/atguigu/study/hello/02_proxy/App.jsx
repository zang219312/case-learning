import React, { Component } from 'react'
import axios from 'axios'
export default class App extends Component {
  getStudentData = _ => {
    axios.get('http://localhost:3000/api1/students').then(result => {
      console.log(result)
    })
  }
  getCarData = _ => {
    axios.get('http://localhost:3000/api2/cars').then(result => {
      console.log(result)
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.getStudentData}>学生数据</button>
        <button onClick={this.getCarData}>汽车数据</button>
      </div>
    )
  }
}
