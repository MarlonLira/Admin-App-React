import React, { Component } from 'react'

import ContenteHeader from '../../common/template/contentHeader'
import Content from '../../common/template/content'
import Tabs from '../../common/tab/tabs'
import TabsHeader from '../../common/tab/tabsHeader'
import TabsContent from '../../common/tab/tabsContent'
import Product from './product'

class ProductRegister extends Component {
  render(){
    
    return(
      <div>
        <ContenteHeader title='Manutenção de Produtos'/>
        <Content>
          <Tabs>
            <TabsHeader>
              
              <Product />

            </TabsHeader>

            <TabsContent>

            </TabsContent>

          </Tabs>
        </Content>
      </div>
    )
  }
}

export default ProductRegister