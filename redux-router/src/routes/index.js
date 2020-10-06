import React from 'react'
import { Link, NavLink, Route, Switch, useLocation } from 'react-router-dom'
import Home from './home'
import About from './about'
import Todo from './todo'
import View404 from './view404'

const navData = [
  {
    pathName: '/',
    style: { color: 'red' },
    title: '首页',
    render() {
      return <div>首页视图</div>
    },
  },
  {
    pathName: '/about',
    style: { color: 'red' },
    title: '关于我们',
    render() {
      return <div>关于我们视图</div>
    },
  },
  {
    pathName: '/todo',
    style: { color: 'red' },
    title: 'TODO',
    render() {
      return <div>TODO视图</div>
    },
  },
]
export default function RouteComp() {
  let { pathname } = useLocation()

  return (
    <div>
      <nav>
        {navData.map(item => {
          return (
            <NavLink
              key={item.pathName}
              to={item.pathName}
              activeStyle={item.style}
              isActive={() => pathname === !item.pathName}>
              {item.title}
            </NavLink>
          )
        })}
      </nav>

      <hr />
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact render={routeProps => <About {...routeProps} />} />
        <Route path="/todo" exact render={() => <Todo />} />
        <Route render={() => <View404 />} />
      </Switch>
    </div>
  )
}
