import React, { Component } from 'react'
import Title from '../ui/Title'
import CartColumns from './CartColumns'
import EmptyCart from './EmptyCart'
import { connect } from 'react-redux'
import CartList from './CartList'
import CartTotals from './CartTotals'

class Cart extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        if (this.props.productsCount > 0) {
            return (
                <section>
                    <Title name="your" title="cart" />
                    <CartColumns />
                    <CartList />
                    <CartTotals />
                </section>
            )
        } else {
            return (
                <EmptyCart />
            )
        }
    }
}

function mapStateToProps(state, ownProps) {
    return {
        productsCount: state.cart.products.length
    }
}

export default connect(mapStateToProps)(Cart);
