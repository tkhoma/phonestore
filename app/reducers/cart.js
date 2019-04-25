import {
    ADD_TO_CART,
    CLEAN_DETAIL,
    CLEAR_CART,
    REMOVE_ITEM,
    DECREMENT_ITEM,
    INCREMENT_ITEM
} from '../ActionTypes'

const initialState = {
    products: [],
    detailProduct: {},
    subTotal: 0,
    tax: 0,
    total: 0
}

export function cart(state = initialState, action) {
    let cartTotals = {}
    let products = []
    switch (action.type) {
        case ADD_TO_CART:
          let detailProduct = {...action.product}
          detailProduct.inCart = true
          detailProduct.count = 1
          detailProduct.total = detailProduct.price
          let cartProducts = [detailProduct, ...state.products]
          let totals = addTotals(cartProducts)
          return {
              products: cartProducts,
              detailProduct,
              subTotal: totals.subTotal,
              tax: totals.tax,
              total: totals.total
          }
        case CLEAN_DETAIL:
          cartTotals = addTotals(state.products)
          return {
              products: state.products,
              detailProduct: {},
              subTotal: cartTotals.subTotal,
              tax: cartTotals.tax,
              total: cartTotals.total
          }
        case CLEAR_CART:
            return initialState
        case REMOVE_ITEM:
            var leftProducts = state.products.filter(item => item.id !== action.productId)
            cartTotals = addTotals(leftProducts)
            return {
              products: leftProducts,
              detailProduct: {},
              subTotal: cartTotals.subTotal,
              tax: cartTotals.tax,
              total: cartTotals.total
            }
        case DECREMENT_ITEM:
            var itemToDecrement = state.products.filter(item => item.id === action.productId)
            itemToDecrement = itemToDecrement[0]
            var index = state.products.indexOf(itemToDecrement)
            var decrementedCount = itemToDecrement.count -= 1
            if (decrementedCount > 0) {
                var decrementedItem = Object.assign({}, itemToDecrement, {
                    count: decrementedCount,
                    total: decrementedCount * itemToDecrement.price
                })
                products = [...state.products.slice(0, index), decrementedItem, ...state.products.slice(index + 1)]
            } else {
                products = [...state.products.slice(0, index), ...state.products.slice(index + 1)]
            }
            cartTotals = addTotals(products)
            return {
              products: products,
              detailProduct: {},
              subTotal: cartTotals.subTotal,
              tax: cartTotals.tax,
              total: cartTotals.total
            }
        case INCREMENT_ITEM:
            var itemToIncrement = state.products.filter(item => item.id === action.productId)
            itemToIncrement = itemToIncrement[0]
            var index = state.products.indexOf(itemToIncrement)
            var incrementCount = itemToIncrement.count += 1
            var incrementedItem = Object.assign({}, itemToIncrement, {
                count: incrementCount,
                total: incrementCount * itemToIncrement.price
            })
            products = [...state.products.slice(0, index), incrementedItem, ...state.products.slice(index + 1)]
            cartTotals = addTotals(products)
            return {
              products,
              detailProduct: {},
              subTotal: cartTotals.subTotal,
              tax: cartTotals.tax,
              total: cartTotals.total
            }
        default:
          return state;
    }
}

function addTotals(cart) {
    let subTotal = 0;
    cart.map(item => {
        subTotal += item.total
    })

    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;

    return {
        subTotal,
        tax,
        total
    }
}
