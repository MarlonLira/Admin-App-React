import React from 'react'
import {Router, Route, Redirect, hashHistory} from 'react-router'

import Dashboard from '../main/dashboard/dashboard'
import Product from '../entity/product/product'
import Sale from '../entity/sale/sale'
import Cycles from '../entity/sale/Cycles/Cycle'
import Client from '../entity/client/client'

export default props => (
  <Router history={hashHistory}>
    <Route path='/' component={Dashboard}/>
    <Route path='/client' component={Client}/>
    <Route path='/product' component={Product}/>
    <Route path='/cycles' component={Cycles}/>
    <Route path='/sale' component={Sale}/>
    <Redirect from='*' to='/'/>
  </Router>
)