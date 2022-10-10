import React, { Component } from 'react'
import Pubsub from 'pubsub-js'
import './index.css'

export default class Search extends Component {
  search = () => {
    // 发布消息
    Pubsub.publish('updateListState', {
      isFirst: false,
      isLoading: true
    })

    fetch(`/api1/search/users?q=${this.input.value}`)
      .then(response => {
        return response.json()
      })
      .then(res => {
        console.log(res)
        // 请求成功后更新状态
        Pubsub.publish('updateListState', {
          isLoading: false,
          users: res.items
        })
      })
      .catch(err => {
        // 请求失败后更新状态
        console.log(err)
        /* Pubsub.publish('updateListState', {
          isLoading: false,
          users: [],
          err: err.message
        }) */
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
