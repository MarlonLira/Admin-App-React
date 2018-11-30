import React from 'react'
import Grid from '../../common/template/grid'
import IconButton from '../../common/template/iconButton'

export default props => {
  const keyHandler = (e) => {
    if (e.key === 'Enter') {
      e.shiftKey ? props.handleSearch() : props.handleAdd()
    } else if (e.key === 'Escape') {
      props.handleClear()
    }
  }

  return (
    <div role='form' className='clienteForm'>
    <br/>
      <Grid cols='9 6 3'>
         Nome: <input id='description' className='form-control'
          placeholder='Nome do Cliente'
          onChange={props.handleChangeName}
          onKeyUp={keyHandler}
          value={props.name}></input>
      </Grid>

      <Grid cols='9 6 3'>
         Email: <input id='value' className='form-control'
          placeholder='Email'
          onChange={props.handleChangeEmail}
          onKeyUp={keyHandler}
          value={props.Email}></input>
      </Grid>

      <Grid cols='9 6 3'>
         Telefone: <input id='value' className='form-control'
          placeholder='Telefone do Cliente'
          onChange={props.handleChangePhone}
          onKeyUp={keyHandler}
          value={props.phone}></input>
      </Grid>

      <Grid cols='9 6 3'>
         Data de Nascimento: <input id='value' className='form-control'
          placeholder=''
          onChange={props.handleChangePhone}
          onKeyUp={keyHandler}
          value={props.phone}></input>
      </Grid>

      <Grid cols='9 6 3'>
         Teste: <input id='value' className='form-control'
          placeholder=''
          onChange={props.handleChangePhone}
          onKeyUp={keyHandler}
          value={props.phone}></input>
      </Grid>

      <Grid cols='9 6 3'>
         Teste: <input id='value' className='form-control'
          placeholder=''
          onChange={props.handleChangePhone}
          onKeyUp={keyHandler}
          value={props.phone}></input>
      </Grid>

      <Grid cols='9 6 3'>
         Teste: <input id='value' className='form-control'
          placeholder=''
          onChange={props.handleChangePhone}
          onKeyUp={keyHandler}
          value={props.phone}></input>
      </Grid>
      
      <Grid cols='9 6 3'>
         Teste: <input id='value' className='form-control'
          placeholder=''
          onChange={props.handleChangePhone}
          onKeyUp={keyHandler}
          value={props.phone}></input>
      </Grid>
      
      <Grid cols='12 3 2'>
        <IconButton style='primary' icon='plus'
          onClick={props.handleAdd}> </IconButton>
        <IconButton style='info' icon='search'
          onClick={props.handleSearch}></IconButton>
        <IconButton style='default' icon='close'
          onClick={props.handleClear}></IconButton>
      </Grid>
    </div>
    
  )
}