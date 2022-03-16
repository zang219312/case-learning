import React, { Component } from 'react'
import qs from 'qs'
const DetailData = [
  {
    id: '01',
    content: '消息1'
  },
  {
    id: '02',
    content: '消息2'
  },
  {
    id: '03',
    content: '消息3'
  }
]
export default class Detail extends Component {
  render() {
    /* // 接受params参数
    const { id, title } = this.props.match.params */
    const { search } = this.props.location
    const { id, title } = qs.parse(search.slice(1))

    const res = DetailData.find(v => v.id === id)
    return (
      <ul>
        <li>id:{id}</li>
        <li>title:{title}</li>
        <li>content:{res.content}</li>
      </ul>
    )
  }
}
