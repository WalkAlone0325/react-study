import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

export default function Create() {
  const [val, setVal] = useState('')
  const dispatch = useDispatch()

  return (
    <div id="create-todo">
      <input
        type="text"
        id="new-todo"
        placeholder="请输入要完成的事"
        autoComplete="off"
        value={val}
        onChange={({ target }) => {
          setVal(target.value)
        }}
        onKeyDown={({ keyCode }) => {
          if (keyCode === 13 && val.trim()) {
            dispatch({
              type: 'TODO_ADD',
              title: val,
            })
            setVal('')
          }
        }}
      />
    </div>
  )
}
