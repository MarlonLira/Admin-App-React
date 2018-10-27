import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Todo from '../todo/todo'
import Cliente from '../cliente/cliente'

export default props => (
  <Router history={hashHistory}>
    <Route path='/todos' component={Todo} />
    <Route path='/cliente' component={Cliente} />
    <Redirect from='*' to='/todos' />
  </Router>
)