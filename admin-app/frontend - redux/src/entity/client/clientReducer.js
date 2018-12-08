const INITIAL_STATE = { _id: '', name: '', phone: '', email: '', list: [] }

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'NAME_CHANGED':
      return { ...state, name: action.payload}
    case 'EMAIL_CHANGED':
      return {...state, email: action.payload}
    case 'PHONE_CHANGED':
      return { ...state, phone: action.payload}
    case 'ID_CHANGED':
      return{...state, _id: action.payload}
    case 'CLIENT_SEARCHED':
      return { ...state, list: action.payload }
    case 'CLIENT_CLEAR':
      return { ...state, name: '', phone: '', email: '', _id: '' }
    default:
      return state
  }
}