import React from 'react'
import {Router, Route, Redirect, hashHistory} from 'react-router'

import Dashboard from '../main/dashboard/dashboard'
import ClientSearch from '../entity/client/clientSearch'
import Product from '../entity/product/product'
import Sale from '../entity/sale/sale'
import ClientRegister from '../entity/client/clientRegister'


export default props => (
  <Router history={hashHistory}>
    <Route path='/' component={Dashboard}/>
    <Route path='/ClientRegister' component={ClientRegister}/>
    <Route path= '/ClientSearch' component={ClientSearch} />
    <Route path='/product' component={Product}/>
    <Route path='/Sale' component={Sale}/>
    <Redirect from='*' to='/'/>
  </Router>
)