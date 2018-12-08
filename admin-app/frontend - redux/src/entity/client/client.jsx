import React from 'react'

import ClientForm from './clientForm'
import ClientList from './clientList'
import Content from '../../common/template/content'
import Tabs from '../../common/tab/tabs'
import TabsHeader from '../../common/tab/tabsHeader'
import TabsContent from '../../common/tab/tabsContent'
import ContenteHeader from '../../common/template/contentHeader'



export default props => (
<div>
  <ContenteHeader title='Manutenção de Clientes'/>
  <Content>
    <Tabs>
      <TabsHeader>
      <div>
        <ClientForm />
        <div>
          <Content>
            <Tabs>
              <TabsContent>
              <TabsHeader>
              </TabsHeader>
                <ClientList />
              </TabsContent>
            </Tabs>
          </Content>
        </div>
      </div>
      </TabsHeader>
      <TabsContent>
      </TabsContent>
    </Tabs>
  </Content>
</div>
   
)