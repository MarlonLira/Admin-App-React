import React, { Component } from 'react'
import axios from 'axios'

import ClientForm from './clientForm'
import ClientList from './clientList'
import Content from '../../common/template/content'
import Tabs from '../../common/tab/tabs'
import TabsHeader from '../../common/tab/tabsHeader'
import TabsContent from '../../common/tab/tabsContent'

const URL = 'http://localhost:3003/api/client'

export default class Client extends Component {
  constructor(props) {
    super(props)
    this.state = { name: '', phone: '', email: '', list: [] }

    this.handleChangeName = this.handleChangeName.bind(this)
    this.handleChangePhone = this.handleChangePhone.bind(this)
    this.handleChangeEmail = this.handleChangeEmail.bind(this)

    this.handleAdd = this.handleAdd.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleClear = this.handleClear.bind(this)

    this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
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

  handleAdd() {
    const name = this.state.name.toUpperCase()
    const phone = this.state.phone
    const email = this.state.email.toUpperCase()
    
    axios.post(URL, { name, phone, email })
        .then(resp => this.refresh())
  }

  handleRemove(client) {
    axios.delete(`${URL}/${client._id}`)
        .then(resp => this.refresh(this.state.name))
  }

  handleMarkAsDone(client) {
    axios.put(`${URL}/${client._id}`, { ...client, done: true })
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

  render() {
    return (
      <div>
        <ClientForm 
          name={this.state.name}
          phone={this.state.phone}
          email={this.state.email}

          handleChangeName={this.handleChangeName}
          handleChangePhone={this.handleChangePhone}
          handleChangeEmail={this.handleChangeEmail}

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
                <ClientList 
                  list={this.state.list}
                  
                  handleMarkAsDone={this.handleMarkAsDone}

                  handleMarkAsDoneName={this.handleMarkAsDoneName}
                  handleMarkAsDonePhone={this.handleMarkAsDonePhone}
                  handleMarkAsDoneEmail={this.handleMarkAsDoneEmail}

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