import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import Nav from './components/nav'
import { routes } from './routes/router'

export default function App() {
  return (
    <Fragment>
      <Nav />
      <Switch>
        {routes.map(item => (
          <Route key={item.path} path={item.path} exact={item.exact} render={item.render} />
        ))}
      </Switch>
    </Fragment>
  )
}
