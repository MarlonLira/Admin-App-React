import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default props => {
  const keyHandler = (e) => {
    if (e.key === 'Enter') {
      e.shiftKey ? props.handleSearch() : props.handleAdd()
    } else if (e.key === 'Escape') {
      props.handleClear()
    }
  }

    return (
      <div role='form' className='todoForm'>
        <Grid cols='9 6 3'>
          <input id='description' className='form-control'
            placeholder='Nome do produto'
            onChange={props.handleChange}
            onKeyUp={keyHandler}
            value={props.description}></input>
        </Grid>
        <Grid cols='9 6 3'>
          <input id='value' className='form-control'
            placeholder='Valor do produto'
            onChange={props.handleChange2}
            onKeyUp={keyHandler}
            value={props.value}></input>
        </Grid>
        <Grid cols='12 3 2'>
          <IconButton style='primary' icon='plus'
            onClick={props.handleAdd}></IconButton>
          <IconButton style='info' icon='search'
            onClick={props.handleSearch}></IconButton>
          <IconButton style='default' icon='close'
            onClick={props.handleClear}></IconButton>
        </Grid>
      </div>
  )
}