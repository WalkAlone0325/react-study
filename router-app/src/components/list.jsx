import React from 'react'
import data from '../data/data'

// 每页条数
const pageLen = 3

export default function List(props) {
  //接收父级传递的props
  let { activePage } = props
  // 当前页从第几条开始，注意页码从1开始计数，但是js是从0开始，所以 -1
  let start = (activePage - 1) * pageLen
  // 当前页到第几条结束
  let end = activePage * pageLen
  let nowData = data.filter((item, index) => index >= start && index < end)

  return (
    <ul>
      {nowData.map(item => (
        <li key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.describe}</p>
        </li>
      ))}
    </ul>
  )
}
