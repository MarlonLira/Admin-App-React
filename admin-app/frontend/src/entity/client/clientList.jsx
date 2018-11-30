import React from 'react'
import IconButton from '../../common/template/iconButton'

export default props => {

  const renderRows = () => {
    const list = props.list || []
    return list.map(cliente => (
      <tr key={cliente._id}>
        <td className={cliente.done ? 'markedAsDoneName' : ''}>{cliente.name}</td>
        <td className={cliente.done ? 'markedAsDonePhone' : ''}>{cliente.phone}</td>
        <td>
          <IconButton style='success' icon='check' hide={cliente.done}
            onClick={() => props.handleMarkAsDone(cliente)}></IconButton>
          <IconButton style='warning' icon='undo' hide={!cliente.done} 
            onClick={() => props.handleMarkAsPending(cliente)}></IconButton>
          <IconButton style='danger' icon='trash-o' hide={!cliente.done} 
            onClick={() => props.handleRemove(cliente)}></IconButton>
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