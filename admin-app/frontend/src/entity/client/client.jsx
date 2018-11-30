import React, { Component } from 'react'

import ContenteHeader from '../../common/template/contentHeader'
import Content from '../../common/template/content'
import Tabs from '../../common/tab/tabs'
import TabsHeader from '../../common/tab/tabsHeader'
import TabsContent from '../../common/tab/tabsContent'
import ClientForm from './clientForm'
import ClientList from './clientList'

class Client extends Component {
  render(){
    return(
      <div>
        <ContenteHeader title='Manutenção de Clientes'/>
        <Content>
          <Tabs>
            <TabsHeader>
              
              <ClientForm />

            </TabsHeader>

            <TabsContent>

            </TabsContent>

          </Tabs>
        </Content>
      </div>
    )
  }
}

class ClientSearch extends Component {
  render(){
    return(
      <div>
        <ContenteHeader title='Pesquisa de Clientes'/>
        <Content>
          <Tabs>
            <TabsHeader>

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

export {Client,ClientSearch}