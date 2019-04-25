import { combineReducers } from 'redux'
import { products, product } from './product'
import { cart } from './cart'
import { modal } from './modal'

const rootReducer = combineReducers({
    products,
    detailProduct: product,
    cart,
    modal
});

export default rootReducer;
