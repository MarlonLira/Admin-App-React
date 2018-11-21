import React from 'react'

import MenuItem from './menuItem'
import MenuTree from './menuTree'


export default props => (
  <ul className='sidebar-menu'>
    <MenuItem path='#' label='Dashboard' icon='dashboard'/>

    <MenuTree label='Clientes' icon='users'>
      <MenuItem path='#/customerBase' label='Manutenção de Clientes' icon='user-plus'/>{/* gear  */}
    </MenuTree>

    <MenuTree label='Produtos' icon='table'>
      <MenuItem path='#/productBase' label='Manutenção de Produtos' icon='plus'/>
    </MenuTree>

    <MenuTree label='Vendas' icon='dollar'>
      <MenuItem path='#/salesBase' label='Manutenção de Vendas' icon='credit-card'/>
    </MenuTree>
  </ul>
)