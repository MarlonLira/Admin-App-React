//import React from 'react'
import Grid from '../../common/template/grid'
import IconButton from '../../common/template/iconButton'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { add, changeDescription, search, clear } from './clientActions'

class ClientForm extends Component {
  constructor(props) {
      super(props)
      this.keyHandler = this.keyHandler.bind(this)
  }

  componentWillMount() {
      this.props.search()
  }

  keyHandler(e) {
      const { add, clear, search, name, phone, email } = this.props
      if (e.key === 'Enter') {
          e.shiftKey ? search() : add(_id, name, phone, email, edit)
      } else if (e.key === 'Escape') {
          clear()
      }
  }

  render() {
        const { add, search, _id, name, phone, email, edit } = this.props
    return (
      <div role='form' className='clienteForm'>
      <br/>
        <Grid cols='12 6 3'>
            <input id='name' className='form-control'
            placeholder='Nome do Cliente'
            onChange={props.handleChangeName}
            onKeyUp={keyHandler}
            value={props.name}
            />
            <br/>
        </Grid>

        <Grid cols='12 6 3'>
            <input id='email' className='form-control'
            placeholder='Email'
            onChange={props.handleChangeEmail}
            onKeyUp={keyHandler}
            value={props.email}
            />
            <br/>
        </Grid>

        <Grid cols='12 6 3'>
            <input id='phone' className='form-control'
            placeholder='Telefone do Cliente'
            onChange={props.handleChangePhone}
            onKeyUp={keyHandler}
            value={props.phone}
            />
            <br/>
        </Grid>
        
        <Grid cols='12 3 2'>
          <IconButton style='primary' icon='plus'
            onClick={props.handleAdd}
          /> 
          <IconButton style='info' icon='search'
            onClick={props.handleSearch}
          />
          <IconButton style='default' icon='close'
            onClick={props.handleClear}
          />
            <br/>
            <br/>
        </Grid>
      </div>
      
      
    )
  }
}

const mapStateToProps = state => ({name: state.client.name, phone: state.client.phone, email: state.client.email, edit: state.client.edit, _id: state.client._id})
const mapDispatchToProps = dispatch => 
    bindActionCreators({ add, changeDescription, search, clear }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ClientForm)