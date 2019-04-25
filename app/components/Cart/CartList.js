import React, { Component } from 'react'
import CartItem from './CartItem'
import {
    Container
} from 'reactstrap'
import {
    REMOVE_ITEM,
    INCREMENT_ITEM,
    DECREMENT_ITEM
} from '../../ActionTypes'
import { connect } from 'react-redux'

class CartList extends Component {
    constructor(props) {
        super(props)
        this.decrement = this.decrement.bind(this)
        this.increment = this.increment.bind(this)
        this.removeItem = this.removeItem.bind(this)
    }

    decrement(id) {
        this.props.dispatch({ type: DECREMENT_ITEM, productId: id })
    }

    increment(id) {
        this.props.dispatch({ type: INCREMENT_ITEM, productId: id })
    }

    removeItem(id) {
        this.props.dispatch({ type: REMOVE_ITEM, productId: id })
    }

    render() {
        let { cart } = this.props;
        return (
            <Container fluid>
                { cart.map(item => {
                    return (
                        <CartItem
                            key={item.id}
                            item={item}
                            decrement={this.decrement}
                            increment={this.increment}
                            removeItem={this.removeItem}
                        />
                    )
                })}
            </Container>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        cart: state.cart.products
    }
}

export default connect(mapStateToProps)(CartList);
