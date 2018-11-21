//import 'modules/bootstrap/dist/css/bootstrap.min.css'
//import 'modules/font-awesome/css/font-awesome.min.css'
//import '../template/custom.css'
import '../common/template/dependencies'
import React from 'react'


import Header from '../common/template/header'
import Sidebar from '../common/template/sideBar'
import Footer from '../common/template/footer'
import Routes from './routes'


export default props =>(
  <div className='wrapper'>
    <Header />
    <Sidebar />
    <div className='content-wrapper'>
      <Routes/>
    </div>
    <Footer />
  </div>
)