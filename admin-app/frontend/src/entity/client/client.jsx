import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../../common/template/pageheader'
import ClientForm from './clientForm'
import ClientList from './clientList'

const URL = 'http://localhost:3003/api/client'

export default class Cliente extends Component {
  constructor(props) {
    super(props)
    this.state = { name: '', phone: '', list: [] }

    this.handleChangeName = this.handleChangeName.bind(this)
    this.handleChangePhone = this.handleChangePhone.bind(this)
    this.handleChangeEmail = this.handleChangeEmail.bind(this)

    this.handleAdd = this.handleAdd.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleClear = this.handleClear.bind(this)

    this.handleMarkAsDoneName = this.handleMarkAsDoneName.bind(this)
    this.handleMarkAsDonePhone = this.handleMarkAsDonePhone.bind(this)
    this.handleMarkAsDoneEmail = this.handleMarkAsDoneEmail.bind(this)

    this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
    this.handleRemove = this.handleRemove.bind(this)

    this.refresh()
  }

  refresh(name = '', phone = '', email= '') {
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
    const email = this.state.email
    
    axios.post(URL, { name, phone, email })
        .then(resp => this.refresh())
  }

  handleRemove(cliente) {
    axios.delete(`${URL}/${cliente._id}`)
        .then(resp => this.refresh(this.state.name))
  }
  
  handleMarkAsDoneName(cliente) {
    axios.put(`${URL}/${cliente._id}`, { ...cliente, done: true })
        .then(resp => this.refresh(this.state.name))
  }

  handleMarkAsDoneEmail(cliente) {
    axios.put(`${URL}/${cliente._id}`, { ...cliente, done: true })
        .then(resp => this.refresh(this.state.email))
  }

  handleMarkAsDonePhone(cliente) {
    axios.put(`${URL}/${cliente._id}`, { ...cliente, done: true })
        .then(resp => this.refresh(this.state.phone))
  }

  handleMarkAsPending(cliente) {
    axios.put(`${URL}/${cliente._id}`, { ...cliente, done: false })
        .then(resp => this.refresh(this.state.name))
  }

  handleClear() {
    this.refresh()
  }

  render() {
    return (
      <div>
        <PageHeader name='Cadastro de Clientes' ></PageHeader>
        <ClientForm 
          name={this.state.name}
          phone={this.state.phone}
          email={this.state.email}

          handleChangeName={this.handleChangeName}
          handleChangePhone={this.handleChangePhone}
          handleChangeEmail={this.handleChangeEmail}

          handleAdd={this.handleAdd} 
          handleSearch={this.handleSearch}
          handleClear={this.handleClear} />
        <ClientList 
          list={this.state.list}
          
          handleMarkAsDoneName={this.handleMarkAsDoneName}
          handleMarkAsDonePhone={this.handleMarkAsDonePhone}
          handleMarkAsDoneEmail={this.handleMarkAsDoneEmail}

          handleMarkAsPending={this.handleMarkAsPending}
          handleRemove={this.handleRemove} />
      </div>
    )
  }

}