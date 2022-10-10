import React, { useState } from 'react'
import { NavLink, Outlet, useOutlet } from 'react-router-dom'
export default function Home() {
  const [sum, setSum] = useState(1)

  const add = () => setSum(2)
  console.log(useOutlet())
  return (
    <div>
      <h3>Home</h3>
      {/* 默认是push */}
      {/* {sum === 2 ? (
        <Navigate to="/about" replace={true} />
      ) : (
        <div>sum的值：{sum}</div>
      )}
      <button onClick={add}>点我变成2</button> */}
      <div>
        <ul className="nav nav-tabs">
          <li>
            <NavLink className="list-group-item" to="new">
              News
            </NavLink>
          </li>
          <li>
            <NavLink className="list-group-item" to="msg">
              Message
            </NavLink>
          </li>
        </ul>
        {/* 指定路由组件呈现的位置 */}
        <Outlet />
      </div>
    </div>
  )
}
