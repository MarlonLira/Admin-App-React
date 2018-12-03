import React from 'react'
import {Router, Route, Redirect, hashHistory} from 'react-router'

import Dashboard from '../main/dashboard/dashboard'
import ProductRegister from '../entity/product/productRegister'
import Sale from '../entity/sale/sale'
import ClientRegister from '../entity/client/clientRegister'

export default props => (
  <Router history={hashHistory}>
    <Route path='/' component={Dashboard}/>
    <Route path='/clientRegister' component={ClientRegister}/>
    <Route path='/productRegister' component={ProductRegister}/>
    <Route path='/sale' component={Sale}/>
    <Redirect from='*' to='/'/>
  </Router>
)