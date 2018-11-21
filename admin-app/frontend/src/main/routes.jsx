import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Todo from '../todo/todo'
import Cliente from '../cliente/cliente'
import Dashboard from '../dashboard/dashboard'
import CustomerBase from '../customerBase/customerBase'
import ProductBase from '../productBase/productBase'
import SalesBase from '../salesBase/salesBase'


export default props => (
  <Router history={hashHistory}>
    <Route path='/' component={Dashboard} />
    <Route path='/customerBase' component={CustomerBase}/>
    <Route path='/productBase' component={ProductBase}/>
    <Route path='/salesBase' component={SalesBase}/>
    <Redirect from='*' to='/' />
  </Router>
)