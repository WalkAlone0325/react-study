import React from 'react'

export default function home(props) {
  let { history } = props

  return (
    <div>
      <h1>home</h1>
      <button onClick={() => history.push('/about', '从首页跳转的')}>去about页面</button>
    </div>
  )
}
