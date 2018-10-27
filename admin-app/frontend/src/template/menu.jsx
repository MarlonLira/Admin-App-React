import React from 'react'

export default props => (
  <nav className='navbar navbar-inverse bg-inverse'>
    <div className='container'>
      <div className='navbar-header'>
        <a className='navbar-brand' href='#'>
          <i className='fa fa-calendar-check-o'></i> Admin
        </a>
      </div>

      <div id='navbar' className='navbar-collapse collapse'>
        <ul className="nav navbar-nav">
          <li><a href='#/todo'>Produtos</a></li>
          <li><a href='#/cliente'>Clientes</a></li>
        </ul>
      </div>
    </div>
  </nav>
)