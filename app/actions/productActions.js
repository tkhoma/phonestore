import { CALL_API } from '../middleware/api'
import { PRODUCTS_REQUEST, PRODUCTS_SUCCESS, PRODUCTS_FAILURE } from '../ActionTypes'
import { PRODUCT_REQUEST, PRODUCT_SUCCESS, PRODUCT_FAILURE } from '../ActionTypes'

export function getProducts() {
    return {
        [CALL_API] : {
            types: [PRODUCTS_REQUEST, PRODUCTS_SUCCESS, PRODUCTS_FAILURE],
            endpoint: 'products'
        }
    }
}

export function getProductById(productId) {
    return {
        [CALL_API]: {
            types: [PRODUCT_REQUEST, PRODUCT_SUCCESS, PRODUCT_FAILURE],
            endpoint: `product/${productId}`
        }
    }
}
