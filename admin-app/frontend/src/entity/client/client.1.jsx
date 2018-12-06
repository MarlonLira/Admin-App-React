import React, { Component } from 'react'

import ClientForm from './clientForm'
import ClientList from './clientList'
import Content from '../../common/template/content'
import Tabs from '../../common/tab/tabs'
import TabsHeader from '../../common/tab/tabsHeader'
import TabsContent from '../../common/tab/tabsContent'


export default props => (
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
)