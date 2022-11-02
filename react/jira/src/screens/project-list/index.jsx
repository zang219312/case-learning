import React, { useState, useEffect } from 'react'
import qs from 'qs'

import { SearchPanel } from './search-panel'
import { List } from './list'
import { cleanObject, useMount, useDebounce } from '../../utils/index'

const apiUrl = process.env.REACT_APP_API_URL

export const ProjectListScreen = () => {
  const [users, setUsers] = useState([])

  const [param, setParam] = useState({
    name: '',
    id: ''
  })
  const [list, setList] = useState([])

  const debouncedParam = useDebounce(param, 3000)

  useEffect(() => {
    console.log('param change')
    fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(debouncedParam))}`).then(async response => {
      if (response.ok) {
        setList(await response.json())
      }
    })
  }, [debouncedParam])

  useMount(() => {
    // 执行2次 react v18严格模式才有
    console.log('初始化 user')
    fetch(`${apiUrl}/users`).then(async response => {
      if (response.ok) {
        setUsers(await response.json())
      }
    })
  })

  return <div>
    <SearchPanel users={users} param={param} setParam={setParam}/>
    <List users={users} list={list}/>
  </div>
}
