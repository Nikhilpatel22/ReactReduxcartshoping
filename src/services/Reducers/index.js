import { combineReducers } from 'redux'

import cardItems from './reducer'
import cartReducer from './cartReducer'
import  {productReducer,selectedProductReducer}  from './productReducer'

const reducers =  combineReducers({
    allProducts : productReducer,
    product : selectedProductReducer,
    cart : cartReducer,
    cardItems,
})

export default reducers