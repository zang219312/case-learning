import React from 'react'
import {
  useParams,
  useMatch,
  useSearchParams,
  useLocation
} from 'react-router-dom'
export default function Detail() {
  // 1、params 参数
  /* const { id, content } = useParams()
  console.log(useMatch('/home/msg/detail/:id/:content')) */

  // 2、search
  /*  const [search, setSearch] = useSearchParams()
  const id = search.get('id')
  const content = search.get('content')
  */
  console.log(useLocation())
  // 3、state
  const {
    state: { id, content }
  } = useLocation()
  return (
    <ul>
      <li>{id}</li>
      <li>{content}</li>
      {/* search 参数*/}
      {/* <li>
        <button onClick={() => setSearch('id=132&content=hello')}>
          update Search Params
        </button>
      </li> */}
    </ul>
  )
}
