import React, { useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

export default function Msg() {
  const navigate = useNavigate()

  const [list] = useState([
    { id: '001', name: 'msg1', content: 'a' },
    { id: '002', name: 'msg2', content: 'b' },
    { id: '003', name: 'msg3', content: 'c' },
    { id: '004', name: 'msg4', content: 'd' }
  ])

  const showDetail = v => {
    return e => {
      console.log(e)
      navigate('detail', {
        replace: false,
        state: {
          id: v.id,
          content: v.content
        }
      })
    }
  }

  return (
    <div>
      <ul>
        {list.map(v => {
          return (
            <li key={v.id}>
              {/* params 参数 */}
              {/* <Link to={`detail/${v.id}/${v.content}`}>{v.name}</Link> */}

              {/* search 参数 */}
              {/* <Link to={`detail?id=${v.id}&content=${v.content}`}>
                {v.name}
              </Link> */}

              {/* state */}
              <Link to="detail" state={{ id: v.id, content: v.content }}>
                {v.name}
              </Link>
              <button onClick={showDetail(v)}>查看详情</button>
            </li>
          )
        })}
      </ul>
      <Outlet />
    </div>
  )
}
