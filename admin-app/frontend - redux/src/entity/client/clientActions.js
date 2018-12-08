import axios from 'axios'

const URL = 'http://localhost:3003/api/client'

export const changeName = event => ({
  type: 'NAME_CHANGED',
  payload: event.target.value
})

export const changeEmail = event => ({
  type: 'EMAIL_CHANGED',
  payload: event.target.value
})

export const changePhone = event => ({
  type: 'PHONE_CHANGED',
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

export const add = (_id, name, phone, email) => {
  name = name.toUpperCase();
  email = email.toUpperCase();
  return dispatch => {
    try{
      if(_id === ""){
        axios.post(URL, { name, phone, email })
          .then(resp => dispatch(clear()))
          .then(resp => dispatch(search()))
      }else if (_id !== ""){ 
        axios.delete(`${URL}/${_id}`)
          .then(resp => dispatch(add(_id = "", name, phone, email)))
      }
    }catch(exception)
    {
      console.log(exception)
        .then(add(_id = "", name, phone, email))
    }
  }
}

export const handleChange = (client) => {
  return dispatch =>{
    dispatch({type: 'ID_CHANGED', payload: client._id})
    dispatch({type: 'NAME_CHANGED', payload: client.name})
    dispatch({type: 'PHONE_CHANGED', payload: client.phone})
    dispatch({type: 'EMAIL_CHANGED', payload: client.email})
  }
}

export const handleMarkAsDone = (client) => {
  return dispatch => {
    axios.put(`${URL}/${client._id}`, { ...client, done: true })
      .then(resp => dispatch(search()))
  }
}

export const handleMarkAsPending = (client) => {
  return dispatch => {
    axios.put(`${URL}/${client._id}`, { ...client, done: false })
      .then(resp => dispatch(search()))
  }
}

export const handleRemove = (client) => {
  return dispatch => {
    axios.delete(`${URL}/${client._id}`)
      .then(resp => dispatch(search()))
  }
}

export const clear = () => {
  return [{ type: 'CLIENT_CLEAR' }, search()]
}