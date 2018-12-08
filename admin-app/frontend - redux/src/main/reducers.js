import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

import clientReducer from '../entity/client/clientReducer'
import productReducer from '../entity/product/productReducer'
import saleReducer from '../entity/sale/saleReducer'
import CycleReducer from '../entity/sale/Cycles/CycleReducer'
import TabReducer from '../common/tab2/tabReducer'

const rootReducer = combineReducers({
    client: clientReducer,
    product: productReducer,
    sale: saleReducer,
    cycle: CycleReducer,
    form: formReducer,
    tab: TabReducer,
    toastr: toastrReducer
})

export default rootReducer