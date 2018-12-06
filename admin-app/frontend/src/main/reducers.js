import { combineReducers } from 'redux'
import clientReducer from '../client/clientReducer'

const rootReducer = combineReducers({
    client: clientReducer
})

export default rootReducer