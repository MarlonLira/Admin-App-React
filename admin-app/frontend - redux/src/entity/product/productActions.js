import axios from 'axios'

const URL = 'http://localhost:3003/api/product'

export const changeName = event => ({
  type: 'NAME_CHANGED',
  payload: event.target.value
})

export const changeAmount = event => ({
  type: 'AMOUNT_CHANGED',
  payload: event.target.value
})

export const changePrice = event => ({
  type: 'PRICE_CHANGED',
  payload: event.target.value
})

export const search = () => {
  return (dispatch, getState) => {
    const name = getState().product.name
    const search = name ? `&name__regex=/${name}/` : ''        
    const request = axios.get(`${URL}?sort=-createdAt${search}`)
      .then(resp => dispatch({type: 'PRODUCT_SEARCHED', payload: resp.data}))
  }
}

export const add = (_id, name, amount, price) => {
  name = name.toUpperCase();
  var part = price.split(' ');
  if(part[0] !== "R$"){
    price = "R$ " + price;
  }
  return dispatch => {
    try{
      if(_id === ""){
        axios.post(URL, { name, amount, price })
        .then(resp => dispatch(clear()))
        .then(resp => dispatch(search()))
      }else if (_id !== ""){ 
        axios.delete(`${URL}/${_id}`)
        .then(resp => dispatch(add(_id = "", name, amount, price)))
      }
    }catch(exception)
    {
      console.log(exception)
      .then(add(_id = "", name, amount, price))
    }
  }
}

export const handleChange = (product) => {
  return dispatch =>{
    dispatch({type: 'ID_CHANGED', payload: product._id})
    dispatch({type: 'NAME_CHANGED', payload: product.name})
    dispatch({type: 'AMOUNT_CHANGED', payload: product.amount})
    dispatch({type: 'PRICE_CHANGED', payload: product.price})
  }
}

export const handleMarkAsDone = (product) => {
  return dispatch => {
    axios.put(`${URL}/${product._id}`, { ...product, done: true })
        .then(resp => dispatch(search()))
  }
}

export const handleMarkAsPending = (product) => {
  return dispatch => {
      axios.put(`${URL}/${product._id}`, { ...product, done: false })
          .then(resp => dispatch(search()))
  }
}

export const handleRemove = (product) => {
  return dispatch => {
    axios.delete(`${URL}/${product._id}`)
          .then(resp => dispatch(search()))
  }
}

export const clear = () => {
  return [{ type: 'PRODUCT_CLEAR' }, search()]
}