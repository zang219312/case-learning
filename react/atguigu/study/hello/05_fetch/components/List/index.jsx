import React, { Component } from 'react'
import Pubsub from 'pubsub-js'
import './index.css'

export default class List extends Component {
  state = {
    users: [],
    isFirst: true,
    isLoading: false,
    err: ''
  }

  componentDidMount() {
    // 订阅消息
    this.token = Pubsub.subscribe('updateListState', (msg, data) => {
      console.log(msg, data)
      this.setState(data)
    })
  }

  componentWillUnmount() {
    Pubsub.unsubscribe(this.token)
  }

  render() {
    const { users, isFirst, isLoading, err } = this.state
    return (
      <div className="row">
        {isFirst ? (
          <h3>输入关键词搜索</h3>
        ) : isLoading ? (
          <h2>loading...</h2>
        ) : err ? (
          <div style={{ color: 'red' }}>{err}</div>
        ) : (
          users.map(v => {
            return (
              <div className="card" key={v.id}>
                <a href={v.html_url} target="_blank" rel="noreferrer">
                  <img
                    alt="avatar"
                    src={v.avatar_url}
                    style={{ width: '100px' }}
                  />
                </a>
                <p className="card-text">{v.login}</p>
              </div>
            )
          })
        )}
      </div>
    )
  }
}
