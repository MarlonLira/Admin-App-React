import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import React from 'react'
import IconButton from '../../common/template/iconButton'
import { handleMarkAsDone, handleMarkAsPending, handleRemove, handleChange } from './clientActions'

const ClientList = props => {
  const renderRows = () => {
    const list = props.list || []
    return list.map(client => (
      <tr key={client._id}>
        <td className={client.done ? 'markedAsDoneName' : ''}>{client.name}</td>
        <td className={client.done ? 'markedAsDoneEmail' : ''}>{client.email}</td>
        <td className={client.done ? 'markedAsDonePhone' : ''}>{client.phone}</td>
        <td>
          <IconButton style='success' icon='check' hide={client.done}
            onClick={() => props.handleMarkAsDone(client)}/>
          <IconButton style='warning' icon='undo' hide={!client.done} 
            onClick={() => props.handleMarkAsPending(client)}/>
          <IconButton style='danger' icon='trash-o' hide={!client.done} 
            onClick={() => props.handleRemove(client)}/>
          <IconButton style='primary' icon='pencil' hide={!client.done} 
            onClick={() => props.handleChange(client)}/>
        </td>
      </tr>
    ))
  }

  return (
    <table className='table'>
      <thead>
        <tr>
          <th>Clientes</th>
          <th>Email</th>
          <th>Telefones</th>
          <th className='tableActions'> Ações</th>
        </tr>
      </thead>
      <tbody>
        {renderRows()}
      </tbody>
    </table>
  )
}

const mapStateToProps = state => ({list: state.client.list})
const mapDispatchToProps = dispatch => 
  bindActionCreators({ handleMarkAsDone, handleMarkAsPending, handleRemove, handleChange }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ClientList)