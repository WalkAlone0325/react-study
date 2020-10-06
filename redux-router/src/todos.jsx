import React from 'react'
import { useSelector } from 'react-redux'
import Li from './li'

export default function Todos() {
  let data = useSelector(state => state.todo)

  return (
    <ul id="todo-list">
      {data.map(item => (
        <Li key={item.id} {...item} />
      ))}
    </ul>
  )
}
