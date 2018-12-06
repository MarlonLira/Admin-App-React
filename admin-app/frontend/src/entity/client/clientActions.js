import axios from 'axios'

const URL = 'http://localhost:3003/api/client'

export const changeDescription = event => ({
  type: 'DESCRIPTION_CHANGED',
  payload: event.target.value
})

export const search = () => {
  return (dispatch, getState) => {
    const name = getState().client.name
    const search = name ? `&name__regex=/${name}/` : ''        
    const request = axios.get(`${URL}?sort=-createdAt${search}`)
      .then(resp => dispatch({type: 'CLIENT_SEARCHED', payload: resp.data}))
  }
}

export const add = (_id, name, phone, email, edit) => {
  return dispatch => {
      if(edit == false){
        axios.post(URL, { name, phone, email })
        .then(resp => dispatch(clear()))
        .then(resp => dispatch(search()))
      }else if (edit == true){
        this.setState({...this.state, edit: false})
        axios.delete(`${URL}/${_id}`)
        .then(resp => dispatch(add()))
      }
  }
}

export const markAsDone = (client) => {
  return dispatch => {
    axios.put(`${URL}/${client._id}`, { ...client, done: true })
        .then(resp => dispatch(search()))
  }
}

export const markAsPending = (client) => {
  return dispatch => {
      axios.put(`${URL}/${client._id}`, { ...client, done: false })
          .then(resp => dispatch(search()))
  }
}

export const remove = (client) => {
  return dispatch => {
    axios.delete(`${URL}/${client._id}`)
          .then(resp => dispatch(search()))
  }
}

export const clear = () => {
  return [{ type: 'CLIENT_CLEAR' }, search()]
}