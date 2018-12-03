import React from 'react'
import Grid from '../../common/template/grid'
import IconButton from '../../common/template/iconButton'

export default props => {
  const keyHandler = (e) => {
    if (e.key === 'Enter') {
      console.log(props)
      e.shiftKey ? props.handleSearch() : props.handleAdd()
    } else if (e.key === 'Escape') {
      props.handleClear()
    }
  }

  return (
    <div role='form' className='productForm'>
    <br/>
      <Grid cols='12 6 3'>
          <input id='name' className='form-control'
          placeholder='Nome do Produto'
          onChange={props.handleChangeName}
          onKeyUp={keyHandler}
          value={props.name}
          />
          <br/>
      </Grid>

      <Grid cols='12 6 3'>
          <input id='amount' className='form-control'
          placeholder='Quantidade'
          onChange={props.handleChangeAmount}
          onKeyUp={keyHandler}
          value={props.amount}
          />
          <br/>
      </Grid>

      <Grid cols='12 6 3'>
          <input id='price' className='form-control'
          placeholder='Preço'
          onChange={props.handleChangePrice}
          onKeyUp={keyHandler}
          value={props.price}
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