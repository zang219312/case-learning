import React, { Component } from 'react'
import { Route, Switch, Redirect, Link } from 'react-router-dom'
import Detail from './Detail'
export default class Message extends Component {
  state = {
    list: [
      {
        id: '01',
        title: 'message001'
      },
      {
        id: '02',
        title: 'message002'
      },
      {
        id: '03',
        title: 'message003'
      }
    ]
  }

  pushShow = (id, title) => {
    // this.props.history.push(`/home/message/detail/${id}/${title}`)

    this.props.history.push(`/home/message/detail`, { id, title })
  }

  replaceShow = (id, title) => {
    // this.props.history.replace(`/home/message/detail/${id}/${title}`)

    this.props.history.replace(`/home/message/detail`, { id, title })
  }

  render() {
    return (
      <div className="message">
        <ul className="message-ul">
          {this.state.list.map(v => {
            return (
              <li key={v.id}>
                {/* 传递 params 参数 */}
                <Link to={`/home/message/detail/${v.id}/${v.title}`}>
                  {v.title}
                </Link>

                <button onClick={() => this.pushShow(v.id, v.title)}>
                  push
                </button>
                <button onClick={() => this.replaceShow(v.id, v.title)}>
                  replace
                </button>

                {/* 传递 search 参数 */}
                {/*  <Link to={`/home/message/detail/?id=${v.id}&title=${v.title}`}>
                  {v.title}
                </Link> */}

                {/* 传递state参数 */}
                {/* <Link
                  to={{
                    pathname: '/home/message/detail',
                    state: { id: v.id, title: v.title }
                  }}
                >
                  {v.title}
                </Link> */}
              </li>
            )
          })}
        </ul>
        <Switch>
          {/* 声明接受 params 参数 */}
          <Route
            path="/home/message/detail/:id/:title"
            component={Detail}
          ></Route>
          {/* search 参数无需声明接受  */}
          {/* <Route path="/home/message/detail" component={Detail}></Route> */}
          {/* state 参数无需声明接受  */}
          <Route path="/home/message/detail" component={Detail}></Route>
          {/* <Redirect
            to={{
              pathname: `/home/message/detail/${this.state.list[0].id}/${this.state.list[0].title}`
            }}
          ></Redirect> */}

          {/* <Redirect
            to={{
              pathname: '/home/message/detail',
              state: {
                id: this.state.list[0].id,
                title: this.state.list[0].title
              }
            }}
          ></Redirect> */}
        </Switch>
      </div>
    )
  }
}
