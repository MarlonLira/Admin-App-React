import React from 'react'

export default props => (
  <header className='main-header'>
    <a href="/#/" className='logo'>
    <span className='logo-mini'><i  className='fa fa-calendar-check-o'></i></span>
      <span className='logo-lg'>
        <i className='fa fa-calendar-check-o'></i>
        <b> Admin App</b>
      </span>
    </a>
    <nav className='navbar navbar-static-top'>
      <a href className='sidebar-toggle' data-toggle='offcanvas'></a>
    </nav>
  </header>
)