const INITIAL_STATE = { _id: '', name: '', amount: '', price: '', list: [] }

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'NAME_CHANGED':
      return { ...state, name: action.payload}
    case 'PRICE_CHANGED':
      return {...state, price: action.payload}
    case 'AMOUNT_CHANGED':
      return { ...state, amount: action.payload}
    case 'ID_CHANGED':
      return{...state, _id: action.payload}
    case 'PRODUCT_SEARCHED':
      return { ...state, list: action.payload }
    case 'PRODUCT_CLEAR':
      return { ...state, name: '', amount: '', price: '', _id: '' }
    default:
      return state
  }
}