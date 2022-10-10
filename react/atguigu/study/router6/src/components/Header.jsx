import React from 'react'
import { useNavigate, useInRouterContext } from 'react-router-dom'
export default function Header() {
  const navigate = useNavigate()
  console.log('useInRouterContext', useInRouterContext())
  const back = () => navigate(-1)
  const go = () => navigate(1)

  return (
    <div className="page-header">
      <h2>React Router Demo</h2>
      <button onClick={back}>back</button>
      <button onClick={go}>go</button>
    </div>
  )
}
