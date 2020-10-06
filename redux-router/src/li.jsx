import React, { useState, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'

export default function Li(props) {
  let { id, title, done } = props
  const [isEdit, changeEdit] = useState(false)
  const dispatch = useDispatch()
  let edit = useRef()
  const [val, setVal] = useState(title)

  useEffect(() => {
    if (isEdit) {
      edit.current.focus()
    }
  }, [isEdit])

  return (
    <li className={isEdit ? 'editing' : ''}>
      <div className={'todo' + (done ? 'done' : '')}>
        <div className="display">
          <input
            type="checkbox"
            className="check"
            checked={done}
            onChange={e => {
              dispatch({
                type: 'TODO_DONE',
                id,
                done: e.target.checked,
              })
            }}
          />
          <div className="todo-content" onDoubleClick={() => changeEdit(true)}>
            {title}
          </div>
          <span
            className="todo-destory"
            onClick={() => dispatch({ type: 'TODO_REMOVE', id })}></span>
        </div>
        <div className="edit">
          <input
            type="text"
            className="todo-input"
            ref={edit}
            value={val}
            onChange={e => setVal(e.target.value)}
            onBlur={() => {
              if (val.trim()) {
                dispatch({ type: 'TODO_EDIT', id, title: val })
              } else {
                console.log('object')
                setVal(title)
              }
              changeEdit(false)
            }}
          />
        </div>
      </div>
    </li>
  )
}
