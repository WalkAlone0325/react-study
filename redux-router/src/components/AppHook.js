import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function App(props) {
  const count = useSelector(state => state.count)
  const dispatch = useDispatch()
  return (
    <div>
      <button
        onClick={() => {
          dispatch({ type: 'COUNT_REDUCE' })
        }}>
        -
      </button>
      <span>{count}</span>
      <button
        onClick={() => {
          dispatch({ type: 'COUNT_PLUS' })
        }}>
        +
      </button>
    </div>
  )
}
// App = connect(state => state)(App)

export default App
