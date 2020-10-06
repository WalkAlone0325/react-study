import React from 'react'
import { Route } from 'react-router-dom'
import Home from './home'
import About from './about'

export default function index() {
  return (
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/about" exact render={() => <About />} />
    </div>
  )
}
