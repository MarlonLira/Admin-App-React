import React from 'react'
import IconButton from '../../common/template/iconButton'

export default props => {

  const renderRows = () => {
    const list = props.list || []
    return list.map(client => (
      <tr key={client._id}>
        <td className={client.done ? 'markedAsDoneName' : ''}>{client.name}</td>
        <td className={client.done ? 'markedAsDoneEmail' : ''}>{client.email}</td>
        <td className={client.done ? 'markedAsDonePhone' : ''}>{client.phone}</td>
        <td>
          <IconButton style='success' icon='check' hide={client.done}
            onClick={() => props.handleMarkAsDone(client)}></IconButton>
          <IconButton style='warning' icon='undo' hide={!client.done} 
            onClick={() => props.handleMarkAsPending(client)}></IconButton>
          <IconButton style='danger' icon='trash-o' hide={!client.done} 
            onClick={() => props.handleRemove(client)}></IconButton>
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