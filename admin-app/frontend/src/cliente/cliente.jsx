import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import ClienteForm from './clienteForm'
import ClienteList from './clienteList'

const URL = 'http://localhost:3003/api/cliente'

export default class Cliente extends Component {
  constructor(props) {
    super(props)
    this.state = { name: '', phone: '', list: [] }

    this.handleChangeName = this.handleChangeName.bind(this)
    this.handleChangePhone = this.handleChangePhone.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleClear = this.handleClear.bind(this)

    this.handleMarkAsDoneName = this.handleMarkAsDoneName.bind(this)
    this.handleMarkAsDonePhone = this.handleMarkAsDonePhone.bind(this)
    this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
    this.handleRemove = this.handleRemove.bind(this)

    this.refresh()
  }

  refresh(name = '', phone = '') {
    const search = name ? `&name__regex=/${name}/` : ''        
    axios.get(`${URL}?sort=-createdAt${search}`)
      .then(resp => this.setState({...this.state, name, phone, list: resp.data}))
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

  handleAdd() {
    const name = this.state.name.toUpperCase()
    const phone = this.state.phone
    
    axios.post(URL, { name, phone })
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
        <ClienteForm 
          name={this.state.name}
          phone={this.state.phone}
          handleChangeName={this.handleChangeName}
          handleChangePhone={this.handleChangePhone}
          handleAdd={this.handleAdd} 
          handleSearch={this.handleSearch}
          handleClear={this.handleClear} />
        <ClienteList 
          list={this.state.list}
          handleMarkAsDoneName={this.handleMarkAsDoneName}
          handleMarkAsDonePhone={this.handleMarkAsDonePhone}
          handleMarkAsPending={this.handleMarkAsPending}
          handleRemove={this.handleRemove} />
      </div>
    )
  }





}