import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

const WIP = () => <h3>Dashboard</h3>

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path='/'
          component={WIP}
        />
      </Switch>
    </Router>
  )
}
