import React from 'react'

export const SearchPanel = ({ users, param, setParam }) => {

  return <form>
    <div>
      <input type="text" value={param.name} onChange={e => setParam({
        ...param,
        name: e.target.value
      })}/>

      <select value={param.id} onChange={e => setParam({
        ...param,
        id: e.target.value
      })}>
        <option value={''}>负责人</option>
        {
          users.map(v => <option key={v.id} value={v.id}>{v.name}</option>)
        }

      </select>
    </div>
  </form>
}
