import React, { Component } from 'react'

import ContenteHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tabs from '../common/tab/tabs'
import TabsHeader from '../common/tab/tabsHeader'
import TabsContent from '../common/tab/tabsContent'

class CustomerBase extends Component {
  render(){
    return(
      <div>
        <ContenteHeader title='Manutenção de Clientes'/>
        <Content>
          <Tabs>
            <TabsHeader>

            </TabsHeader>
            <TabsContent>

            </TabsContent>
          </Tabs>
        </Content>
      </div>
    )
  }
}

export default CustomerBase