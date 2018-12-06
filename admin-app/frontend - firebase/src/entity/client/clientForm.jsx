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
        <IconButton style='primary' icon={props.edit ? 'pencil' : 'plus'}
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