import React from 'react'
import { useNavigationType, useResolvedPath } from 'react-router-dom'
export default function New() {
  // pop(刷新页面) push replace
  console.log(useNavigationType())

  console.log(useResolvedPath('/user?id=124#apple'))
  return (
    <ul>
      <li>news001</li>
      <li>news002</li>
      <li>news003</li>
    </ul>
  )
}
