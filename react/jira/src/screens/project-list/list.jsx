import React from 'react'

export const List = ({ users, list }) => {
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
