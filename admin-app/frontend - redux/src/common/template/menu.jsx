import React from 'react'

import MenuItem from './menuItem'
import MenuTree from './menuTree'

export default props => (
  <div className="wrapper1">
    <ul className='sidebar-menu'>
      <MenuItem path='#' label='Inicio' icon='dashboard'/>

      <MenuTree label='Clientes' icon='users'>
        <MenuItem path='#/client' label='Manutenção de Clientes' icon='user-plus'/>
      </MenuTree>

      <MenuTree label='Produtos' icon='table'>
        <MenuItem path='#/product' label='Manutenção de Produtos' icon='plus'/>
      </MenuTree>

      <MenuTree label='Vendas' icon='dollar'>
        <MenuItem path='#/sale' label='Manutenção de Vendas' icon='credit-card'/>
        <MenuItem path='#/cycles' label='Ciclo de Vendas' icon='credit-card'/>
      </MenuTree>
    </ul>
  </div>
)