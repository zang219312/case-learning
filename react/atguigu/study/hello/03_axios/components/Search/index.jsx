import React, { Component } from 'react'
import './index.css'

import axios from 'axios'

export default class Search extends Component {
  search = () => {
    // 请求前通知app更新状态
    this.props.updateAppState({
      isFirst: false,
      isLoading: true
    })
    axios
      .get(`/api1/search/users?q=${this.input.value}`)
      .then(res => {
        console.log(res)
        const { total_count, items, incomplete_results } = res.data
        // 请求成功后更新状态
        this.props.updateAppState({
          isLoading: false,
          users: items
        })
      })
      .catch(err => {
        // 请求失败后更新状态

        console.log(err)
        this.props.updateAppState({
          isLoading: false,
          users: [],
          err: err.message
        })
      })
  }
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input
            ref={c => (this.input = c)}
            type="text"
            placeholder="enter the name you search"
          />
          &nbsp;<button onClick={this.search}>Search</button>
        </div>
      </section>
    )
  }
}
