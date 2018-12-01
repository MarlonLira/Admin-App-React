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
      <Grid cols='12 8 4'>
        Nome: <input id='description' className='form-control'
        placeholder='Nome do Cliente'
        onChange={props.handleChangeName}
        onKeyUp={keyHandler}
        value={props.name}></input>
        <br/>
      </Grid>

      <Grid cols='12 3 2'>
        <br/>
        <IconButton style='info' icon='search'
          onClick={props.handleSearch}></IconButton>
      </Grid>
    </div>
  )
}