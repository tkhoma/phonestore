import {
    PRODUCTS_REQUEST,
    PRODUCTS_FAILURE,
    PRODUCTS_SUCCESS,
    PRODUCT_REQUEST,
    PRODUCT_FAILURE,
    PRODUCT_SUCCESS,
    LEAVE_DETAILS,
    ADD_TO_CART
} from '../ActionTypes'

const initialProductsState = {
    data: [],
    isFetching: true,
    error: false
}

const initialProductState = {
    data: {},
    isFetching: true,
    error: false
}

export function products(state = initialProductsState, action) {
    switch (action.type) {
        case PRODUCTS_REQUEST:
            return initialProductsState
        case PRODUCTS_FAILURE:
            return {
                isFetching: false,
                error: true
            }
        case PRODUCTS_SUCCESS:
            return {
                data: action.response.data,
                isFetching: false
            }
        case ADD_TO_CART:
            return {
                ...state,
                data: state.data.map(
                    (item) => item.id === action.product.id ?
                        { ...item, inCart: true } :
                        item
                )
            }
        default:
            return state;
    }
}

export function product(state = initialProductState, action) {
    switch (action.type) {
        case PRODUCT_REQUEST:
            return initialProductState
        case PRODUCT_FAILURE:
            return {
                isFetching: false,
                error: true
            }
        case PRODUCT_SUCCESS:
            return {
                data: action.response.data,
                isFetching: false
            }
        case LEAVE_DETAILS:
            return {
                data: {}
            }
        default:
            return state;
    }
}
