import React from 'react'
import IconButton from '../../common/template/iconButton'

export default props => {

  const renderRows = () => {
    const list = props.list || []
    return list.map(product => (
      <tr key={product._id}>
        <td className={product.done ? 'markedAsDoneName' : ''}>{product.name}</td>
        <td className={product.done ? 'markedAsDoneAmount' : ''}>{product.amount}</td>
        <td className={product.done ? 'markedAsDonePrice' : ''}>{product.price}</td>
        <td>
          <IconButton style='success' icon='check' hide={product.done}
            onClick={() => props.handleMarkAsDone(product)}></IconButton>
          <IconButton style='warning' icon='undo' hide={!product.done} 
            onClick={() => props.handleMarkAsPending(product)}></IconButton>
          <IconButton style='danger' icon='trash-o' hide={!product.done} 
            onClick={() => props.handleRemove(product)}></IconButton>
        </td>
      </tr>
    ))
  }

  return (
    <table className='table'>
      <thead>
        <tr>
          <th>Produto</th>
          <th>Quantidade</th>
          <th>Preço</th>
          <th className='tableActions'> Ações</th>
        </tr>
      </thead>
      <tbody>
        {renderRows()}
      </tbody>
    </table>
  )
}