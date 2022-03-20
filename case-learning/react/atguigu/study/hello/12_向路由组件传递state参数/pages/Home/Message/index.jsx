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
  render() {
    return (
      <div>
        <ul>
          {this.state.list.map(v => {
            return (
              <li key={v.id}>
                {/* 传递 params 参数 */}
                {/* <Link to={`/home/message/detail/${v.id}/${v.title}`}>
                  {v.title}
                </Link> */}

                {/* 传递 search 参数 */}
                {/*  <Link to={`/home/message/detail/?id=${v.id}&title=${v.title}`}>
                  {v.title}
                </Link> */}

                {/* 传递state参数 */}
                <Link
                  to={{
                    pathname: '/home/message/detail',
                    state: { id: v.id, title: v.title }
                  }}
                >
                  {v.title}
                </Link>
              </li>
            )
          })}
        </ul>
        <Switch>
          {/* 声明接受 params 参数 */}
          {/* <Route
            path="/home/message/detail/:id/:title"
            component={Detail}
          ></Route> */}

          {/* search 参数无需声明接受  */}
          {/* <Route path="/home/message/detail" component={Detail}></Route> */}

          {/* state 参数无需声明接受  */}
          <Route path="/home/message/detail" component={Detail}></Route>
        </Switch>
      </div>
    )
  }
}
