//import React from 'react'
import Grid from '../../common/template/grid'
import IconButton from '../../common/template/iconButton'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { add, changeName, changeEmail, changePhone, search, clear } from './clientActions'

class ClientForm extends Component {
  constructor(props) {
    super(props)
    this.keyHandler = this.keyHandler.bind(this)
  }

  componentWillMount() {
      this.props.search()
  }

  keyHandler(e) {
    const { add, clear, search, name, phone, email, _id } = this.props
    if (e.key === 'Enter') {
      e.shiftKey ? search() : add(_id, name, phone, email)
    } else if (e.key === 'Escape') {
      clear()
    }
  }

  render() {
    const { add, search, _id, name, phone, email} = this.props
      return (
        <div role='form' className='clienteForm'>
          <br/>
          <Grid cols='12 6 3'>
            <input id='_id' className='form-control'
            placeholder='id'
            onKeyUp={this.keyHandler}
            value={this.props._id}
            type="hidden"
            />
            <br/>
          </Grid>

            <Grid cols='12 6 3'>
              <input id='name' className='form-control'
              placeholder='Nome do Cliente'
              onChange={this.props.changeName}
              onKeyUp={this.keyHandler}
              value={this.props.name}
              />
              <br/>
            </Grid>

            <Grid cols='12 6 3'>
              <input id='email' className='form-control'
              placeholder='Email'
              onChange={this.props.changeEmail}
              onKeyUp={this.keyHandler}
              value={this.props.email}
              />
              <br/>
            </Grid>

            <Grid cols='12 6 3'>
              <input id='phone' className='form-control'
              placeholder='Telefone do Cliente'
              onChange={this.props.changePhone}
              onKeyUp={this.keyHandler}
              value={this.props.phone}
              />
              <br/>
            </Grid>
            
            <Grid cols='12 3 2'>
              <IconButton style='primary' icon='plus'
                onClick={() => add(_id, name, phone, email)}
              /> 
              <IconButton style='info' icon='search'
                onClick={search}
              />
              <IconButton style='default' icon='close'
                onClick={this.props.clear}
              />
                <br/>
                <br/>
            </Grid>
      </div>
    )
  }
}

const mapStateToProps = state => ({name: state.client.name, phone: state.client.phone, 
  email: state.client.email, edit: state.client.edit, _id: state.client._id})
const mapDispatchToProps = dispatch => 
  bindActionCreators({ add, changeName,changeEmail,changePhone, search, clear }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ClientForm)