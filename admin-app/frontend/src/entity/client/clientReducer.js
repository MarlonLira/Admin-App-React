const INITIAL_STATE = { edit: false, _id: '', name: '', phone: '', email: '', list: [] }

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'DESCRIPTION_CHANGED':
            return { ...state, name: action.payload }
        case 'CLIENT_SEARCHED':
            return { ...state, list: action.payload }
        case 'CLIENT_CLEAR':
            return { ...state, name: '', phone: '', email: '' }
        default:
            return state
    }
}