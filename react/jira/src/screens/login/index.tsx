import React, { ChangeEvent, FormEventHandler, useState, useEffect } from 'react'
import { useDebounce, useMount } from '../../utils/index'

const apiUrl = process.env.REACT_APP_API_URL

interface User {
  id: string,
  name: string,
  email: string,
  organization: string,
  title: string
}

export const LoginScreen = () => {
  const [param, setParam] = useState({
    username: '',
    password: ''
  })

  const [users, setUsers] = useState([])


  console.log('render', param, users)

  const login = (param: { username: string, password: string }) => {
    fetch(`${apiUrl}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(param)
    }).then(async response => {
      if (response.ok) {
        console.log('login ', await response.json())
      }
    })
  }

  const debouncedParam = useDebounce(param, 500)

  useEffect(() => {
    console.log('param change')

    const fetchUsers = () => {
      fetch(`${apiUrl}/users`).then(async response => {
        if (response.ok) {
          setUsers(await response.json())
        }
      })
    }
    fetchUsers()
  }, [debouncedParam])


  const onChange = (event: ChangeEvent<HTMLInputElement>, key: string): void => {
    setParam(prevState => ({
      ...prevState,
      [key]: event.target.value
    }))
  }

  // const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  // HTMLFormElement extends Element
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()

    const username = (e.currentTarget.elements[0] as HTMLInputElement).value
    const password = (e.currentTarget.elements[1] as HTMLInputElement).value
    console.log(username, password)
    login({ username, password })

  }

  return <form onSubmit={handleSubmit}>
    <div>
      <label>用户名</label>
      <input type='text' id='username' value={param.username} onChange={e => onChange(e, 'username')}/>
      <ul>
        {
          users.map((v: User) => <li key={v.id} >{v.name}</li>)
        }
      </ul>

    </div>

    <div>
      <label>密码</label>
      <input type='password' id='password' value={param.password} onChange={e => onChange(e, 'password')}/>
    </div>

    <button type='submit'>登录</button>
  </form>
}
