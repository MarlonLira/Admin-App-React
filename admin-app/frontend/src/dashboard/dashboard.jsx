import React, { Component } from 'react'

import ContenteHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from '../common/widget/valueBox'
import Row from '../common/layout/row'


class Dashboard extends Component {
  render(){
    return(
      <div>
        <ContenteHeader title='Dashboard'/>
        <Content>
          <Row>
            <ValueBox cols='12 4' color='green' icon='money' value='300' text='Novas vendas neste mês!'/>
            <ValueBox cols='12 4' color='yellow' icon='user' value='15' text='Novos clientes apenas nesta semana!'/>
            <ValueBox cols='12 4' color='aqua' icon='shopping-cart' value='10' text='Novos Produtos adicionados'/>
          </Row> 
        </Content>
      </div>
    )
  }
}

export default Dashboard