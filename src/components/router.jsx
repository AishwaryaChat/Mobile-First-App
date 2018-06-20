import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

// components
import News from './news'

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path='/'
          component={News}
        />
      </Switch>
    </Router>
  )
}
