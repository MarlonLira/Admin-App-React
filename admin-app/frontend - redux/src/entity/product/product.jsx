import React from 'react'

import ProductForm from './productForm'
import ProductList from './productList'
import Content from '../../common/template/content'
import Tabs from '../../common/tab/tabs'
import TabsHeader from '../../common/tab/tabsHeader'
import TabsContent from '../../common/tab/tabsContent'
import ContenteHeader from '../../common/template/contentHeader'

export default props => {
  return (
    <div>
      <ContenteHeader title='Manutenção de Produtos'/>
      <Content>
        <Tabs>
          <TabsHeader>
            <div>
              <ProductForm />
              <div>
                <Content>
                  <Tabs>
                    <TabsContent>
                      <TabsHeader>
                      </TabsHeader>
                      <ProductList />
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
}