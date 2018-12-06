import React, { Component } from 'react'
import axios from 'axios'
import firebase from 'firebase'
import _ from 'lodash';

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
    this.state = { edit: false, _id: '', name: '', phone: '', email: '', list: [] }

    this.handleChangeName = this.handleChangeName.bind(this)
    this.handleChangePhone = this.handleChangePhone.bind(this)
    this.handleChangeEmail = this.handleChangeEmail.bind(this)

    this.handleChangeEdit = this.handleChangeEdit.bind(this)

    this.handleAdd = this.handleAdd.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleClear = this.handleClear.bind(this)

    this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
    this.handleMarkAsDoneName = this.handleMarkAsDoneName.bind(this)
    this.handleMarkAsDonePhone = this.handleMarkAsDonePhone.bind(this)
    this.handleMarkAsDoneEmail = this.handleMarkAsDoneEmail.bind(this)

    this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
    this.handleRemove = this.handleRemove.bind(this)

     {this.refresh()}
  }

  refresh(name='', phone='', email='') {

    firebase.database().ref(`/client`)
      .once('value')
      .then(snapshot => {
        const list = _.values(_.mapKeys(snapshot.val(), function(value, key) {
          value.id = key
          
          return key
        }))
        
        if(name != ''){
          
          return firebase.database().ref('/client/' + 'LT-kH6D07Yi7qpjrEPL').once('value').then(function(snapshot) {
            var name = (snapshot.val() && snapshot.val().name)
            console.log(name)
          })

        }
        this.setState({ ...this.state, name, phone, email, list })
      })
      .catch(error => console.log(error))
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

// Atualizar item da lista
  handleChangeEdit({ _id, name, phone, email}) {
    this.setState({...this.state, edit: true, _id, name, phone, email})
  }
// Fim atualizar item da lista

  handleAdd() {
    const name = this.state.name.toUpperCase()
    const phone = this.state.phone
    const email = this.state.email.toUpperCase()
    //const id = this.state.id

    if (this.state.edit) {
      this.refresh()
      this.setState({ edit: false })
    } else {
      firebase.database().ref(`client/`)
        .push({ name, phone, email })
        .then((response) => this.refresh())
        .catch((error) => { console.log(error) });
    }
  }
  
  handleRemove(){
    firebase.database().ref(`client/`)
    .once('value')
    .then(snapshot => {
      const list = _.values(_.mapKeys(snapshot.val(), function(value, key) {
        value.id = key
        return key
      }))

      this.setState({ ...this.state, list })
    }).delete(key)
    .catch(error => console.log(error))
  }
  
  handleMarkAsDone(client) {
    this.setState({ ...client, done: true })
        //.then(resp => this.refresh(this.state.name))
  }

  handleMarkAsDoneName(client) {
    this.setState({ ...client, done: true })
        .then(resp => this.refresh(this.state.name))
  }
  
/*
  handleRemove(client) {
    axios.delete(`${URL}/${client._id}`)
        .then(resp => this.refresh(this.state.name))
  }
  */
/*
  handleMarkAsDone(client) {
    axios.put(`${URL}/${client._id}`, { ...client, done: true })
        .then(resp => this.refresh(this.state.name))
  }
*//*
  handleMarkAsDoneName(client) {
    axios.put(`${URL}/${client._id}`, { ...client, done: true })
        .then(resp => this.refresh(this.state.name))
  }
*/
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
          edit={this.state.edit}

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

                  handleChangeEdit={this.handleChangeEdit}
                />
              </TabsContent>
            </Tabs>
          </Content>
         </div>
      </div>
    )
  }

}