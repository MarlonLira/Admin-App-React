import React, { Component } from 'react'
import axios from 'axios'

import ContenteHeader from '../../common/template/contentHeader'
import Content from '../../common/template/content'
import Tabs from '../../common/tab/tabs'
import TabsHeader from '../../common/tab/tabsHeader'
import TabsContent from '../../common/tab/tabsContent'
import ClientList from './clientList'
import ClientFind from './clientFind'

const URL = 'http://localhost:3003/api/client'


class ClientSearch extends Component {

  constructor(props) {
    super(props)
    this.state = { name: '', phone: '', list: [] }

    this.handleChangeName = this.handleChangeName.bind(this)
    
    this.handleSearch = this.handleSearch.bind(this)
    this.handleClear = this.handleClear.bind(this)

    this.handleMarkAsDoneName = this.handleMarkAsDoneName.bind(this)
    this.handleMarkAsDonePhone = this.handleMarkAsDonePhone.bind(this)
    this.handleMarkAsDoneEmail = this.handleMarkAsDoneEmail.bind(this)

    this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
    this.handleRemove = this.handleRemove.bind(this)

    {/*this.refresh()*/}
  }

  refresh(name = '', phone = '', email = '') {
    const search = name ? `&name__regex=/${name}/` : ''        
    axios.get(`${URL}?sort=-createdAt${search}`)
      .then(resp => this.setState({...this.state, name, phone, email, list: resp.data}))
  }

  handleSearch() {
    this.refresh(this.state.name.toUpperCase())
  }

  handleChangeName(e) {
    this.setState({...this.state, name: e.target.value})
  }

  handleChangePhone(e) {
    this.setState({...this.state, phone: e.target.value})
  }

  handleChangeEmail(e) {
    this.setState({...this.state, email: e.target.value})
  }

  handleRemove(client) {
    axios.delete(`${URL}/${client._id}`)
        .then(resp => this.refresh(this.state.name))
  }
  
  handleMarkAsDoneName(client) {
    axios.put(`${URL}/${client._id}`, { ...client, done: true })
        .then(resp => this.refresh(this.state.name))
  }

  handleMarkAsDoneEmail(client) {
    axios.put(`${URL}/${client._id}`, { ...client, done: true })
        .then(resp => this.refresh(this.state.email))
  }

  handleMarkAsDonePhone(client) {
    axios.put(`${URL}/${client._id}`, { ...client, done: true })
        .then(resp => this.refresh(this.state.phone))
  }

  handleMarkAsPending(client) {
    axios.put(`${URL}/${client._id}`, { ...client, done: false })
        .then(resp => this.refresh(this.state.name))
  }

  handleClear() {
    this.refresh()
  }
  render(){
    return(
      <div>
        <ContenteHeader title='Pesquisa de Clientes'/>
        <Content>
          <Tabs>
            <TabsHeader>
              
              <ClientFind
              
              name={this.state.name}

              handleChangeName={this.handleChangeName}

              handleAdd={this.handleAdd} 
              handleSearch={this.handleSearch}
              handleClear={this.handleClear}
              
              />
              
            </TabsHeader>
            
            <TabsContent>

              <ClientList 
              list={this.state.list}
          
          handleMarkAsDoneName={this.handleMarkAsDoneName}
          handleMarkAsDonePhone={this.handleMarkAsDonePhone}
          handleMarkAsDoneEmail={this.handleMarkAsDoneEmail}

          handleMarkAsPending={this.handleMarkAsPending}
          handleRemove={this.handleRemove} />

            </TabsContent>

          </Tabs>
        </Content>
      </div>
    )
  }
}

export default ClientSearch