import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import IconButton from '../../common/template/iconButton'

import { handleMarkAsDone, handleMarkAsPending, handleRemove, handleChange } from './productActions'

const ProductList = props => {
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
            <IconButton style='primary' icon='pencil' hide={!product.done} 
            onClick={() => props.handleChange(product)}/>
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
const mapStateToProps = state => ({list: state.product.list})
const mapDispatchToProps = dispatch =>
  bindActionCreators({handleMarkAsDone, handleMarkAsPending, handleChange, handleRemove}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ProductList)