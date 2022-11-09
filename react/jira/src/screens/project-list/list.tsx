import React from 'react'
import { User } from './search-panel'

interface Project {
  id: string,
  name: string,
  personId: string,
  pin: boolean,
  organization: string
}

interface listProps {
  list: Project[],
  users: User[]
}

export const List = ({ users, list }: listProps) => {
  return <table>
    <thead>
    <tr>
      <th>名称</th>
      <th>负责人</th>
    </tr>
    </thead>
    <tbody>
    {
      list.map(v => <tr key={v.id}>
          <td>{v.name}</td>
          <td>{users.find(user => user.id === v.personId)?.name || '未知'}</td>
        </tr>
      )
    }
    </tbody>
  </table>
}
