import React from 'react'
import {Router, Route, Redirect, hashHistory} from 'react-router'

import Dashboard from '../main/dashboard/dashboard'
import Client from '../entity/client/client'
import Product from '../entity/product/product'
import Sale from '../entity/sale/sale'

export default props => (
  <Router history={hashHistory}>
    <Route path='/' component={Dashboard}/>
    <Route path='/Client' component={Client}/>
    <Route path='/product' component={Product}/>
    <Route path='/Sale' component={Sale}/>
    <Redirect from='*' to='/'/>
  </Router>
)