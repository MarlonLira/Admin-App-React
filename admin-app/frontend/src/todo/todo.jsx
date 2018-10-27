import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = { description: '', value: '', list: [] }

    this.handleChange = this.handleChange.bind(this)
    this.handleChange2 = this.handleChange2.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleClear = this.handleClear.bind(this)

    this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
    this.handleMarkAsDone2 = this.handleMarkAsDone2.bind(this)
    this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
    this.handleRemove = this.handleRemove.bind(this)

    this.refresh()
  }

  refresh(description = '', value = '') {
    const search = description ? `&description__regex=/${description}/` : ''        
    axios.get(`${URL}?sort=-createdAt${search}`)
      .then(resp => this.setState({...this.state, description, value, list: resp.data}))
  }

  handleSearch() {
    this.refresh(this.state.description.toUpperCase())
  }

  handleChange(e) {
    this.setState({...this.state, description: e.target.value})
  }

  handleChange2(e) {
    this.setState({...this.state, value: e.target.value})
  }

  handleAdd() {
    const description = this.state.description.toUpperCase()
    const value = "R$ " + this.state.value
    
    axios.post(URL, { description, value })
        .then(resp => this.refresh())
  }

  handleRemove(todo) {
    axios.delete(`${URL}/${todo._id}`)
        .then(resp => this.refresh(this.state.description))
  }
  
  handleMarkAsDone(todo) {
    axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
        .then(resp => this.refresh(this.state.description))
  }

  handleMarkAsDone2(todo) {
    axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
        .then(resp => this.refresh(this.state.value))
  }

  handleMarkAsPending(todo) {
    axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
        .then(resp => this.refresh(this.state.description))
  }

  handleClear() {
    this.refresh()
  }

  render() {
    return (
      <div>
        <PageHeader name='Cadastro de Produtos' ></PageHeader>
        <TodoForm 
          description={this.state.description}
          value={this.state.value}
          handleChange={this.handleChange}
          handleChange2={this.handleChange2}
          handleAdd={this.handleAdd} 
          handleSearch={this.handleSearch}
          handleClear={this.handleClear} />
        <TodoList 
          list={this.state.list}
          handleMarkAsDone={this.handleMarkAsDone}
          handleMarkAsDone2={this.handleMarkAsDone2}
          handleMarkAsPending={this.handleMarkAsPending}
          handleRemove={this.handleRemove} />
      </div>
    )
  }
}