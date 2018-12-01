import React, { Component } from 'react'

import ContenteHeader from '../../common/template/contentHeader'
import Content from '../../common/template/content'
import Tabs from '../../common/tab/tabs'
import TabsHeader from '../../common/tab/tabsHeader'
import TabsContent from '../../common/tab/tabsContent'
import ClientList from './clientList'
import ClientFind from './clientFind'


class ClientSearch extends Component {
  render(){
    return(
      <div>
        <ContenteHeader title='Pesquisa de Clientes'/>
        <Content>
          <Tabs>
            <TabsHeader>
              
              <ClientFind/>
              
            </TabsHeader>
            
            <TabsContent>

              <ClientList />

            </TabsContent>

          </Tabs>
        </Content>
      </div>
    )
  }
}

export default ClientSearch