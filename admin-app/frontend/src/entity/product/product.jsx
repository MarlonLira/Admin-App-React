import React, { Component } from 'react'
import axios from 'axios'

import ProductForm from './productForm'
import ProductList from './productList'
import Content from '../../common/template/content'
import Tabs from '../../common/tab/tabs'
import TabsHeader from '../../common/tab/tabsHeader'
import TabsContent from '../../common/tab/tabsContent'

const URL = 'http://localhost:3003/api/product'

export default class Product extends Component {
  constructor(props) {
    super(props)
    this.state = { name: '', amount: '', price: '', list: []}

    this.handleChangePrice = this.handleChangePrice.bind(this)
    this.handleChangeAmount = this.handleChangeAmount.bind(this)
    this.handleChangeName = this.handleChangeName.bind(this)
    

    this.handleAdd = this.handleAdd.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleClear = this.handleClear.bind(this)

    this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
    this.handleMarkAsDoneName = this.handleMarkAsDoneName.bind(this)
    this.handleMarkAsDoneAmount = this.handleMarkAsDoneAmount.bind(this)
    this.handleMarkAsDonePrice = this.handleMarkAsDonePrice.bind(this)

    this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
    this.handleRemove = this.handleRemove.bind(this)

    {/*this.refresh()*/}
  }

  refresh(name = '', amount = '', price = '') {
    const search = name ? `&name__regex=/${name}/` : ''        
    axios.get(`${URL}?sort=-createdAt${search}`)
      .then(resp => this.setState({...this.state, name, amount, price, list: resp.data}))
  }

  handleSearch() {
    this.refresh(this.state.name.toUpperCase())
  }

  handleChangeName(e) {
    this.setState({...this.state, name: e.target.value})
  }

  handleChangeAmount(e) {
    this.setState({...this.state, amount: e.target.value})
  }

  handleChangePrice(e) {
    this.setState({...this.state, price: e.target.value})
  }

  handleAdd() {
    const name = this.state.name.toUpperCase()
    const amount = this.state.amount
    const price = "R$ " + this.state.price.replace(",",".")
    
    axios.post(URL, { name, amount, price })
        .then(resp => this.refresh())
  }

  handleRemove(product) {
    axios.delete(`${URL}/${product._id}`)
        .then(resp => this.refresh(this.state.name))
  }

  handleMarkAsDone(product) {
    axios.put(`${URL}/${product._id}`, { ...product, done: true })
        .then(resp => this.refresh(this.state.name))
  }

  handleMarkAsDoneName(product) {
    axios.put(`${URL}/${product._id}`, { ...product, done: true })
        .then(resp => this.refresh(this.state.name))
  }

  handleMarkAsDoneAmount(product) {
    axios.put(`${URL}/${product._id}`, { ...product, done: true })
        .then(resp => this.refresh(this.state.amount))
  }

  handleMarkAsDonePrice(product) {
    axios.put(`${URL}/${product._id}`, { ...product, done: true })
        .then(resp => this.refresh(this.state.price))
  }

  handleMarkAsPending(product) {
    axios.put(`${URL}/${product._id}`, { ...product, done: false })
        .then(resp => this.refresh(this.state.name))
  }

  handleClear() {
    this.refresh()
  }

  render() {
    return (
      <div>
        <ProductForm 
          name={this.state.name}
          amount={this.state.amount}
          price={this.state.price}

          handleChangeName={this.handleChangeName}
          handleChangeAmount={this.handleChangeAmount}
          handleChangePrice={this.handleChangePrice}

          handleAdd={this.handleAdd} 
          handleSearch={this.handleSearch}
          handleClear={this.handleClear} 
        />
        
         <div>
          <Content>
            <Tabs>
              <TabsContent>
              <TabsHeader>
                
              </TabsHeader>
                <ProductList 
                  list={this.state.list}
                  
                  handleMarkAsDone={this.handleMarkAsDone}

                  handleMarkAsDoneName={this.handleMarkAsDoneName}
                  handleMarkAsDoneAmount={this.handleMarkAsDoneAmount}
                  handleMarkAsDonePrice={this.handleMarkAsDonePrice}

                  handleMarkAsPending={this.handleMarkAsPending}
                  handleRemove={this.handleRemove} 
                />
              </TabsContent>
            </Tabs>
          </Content>
         </div>
      </div>
    )
  }

}