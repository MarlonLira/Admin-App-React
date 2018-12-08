import { combineReducers } from 'redux'
import clientReducer from '../entity/client/clientReducer'
import productReducer from '../entity/product/productReducer'

const rootReducer = combineReducers({
    client: clientReducer,
    product: productReducer
})

export default rootReducer