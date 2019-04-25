import React, { Component } from 'react'
import {
    Container,
    Row,
    Col
} from 'reactstrap'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { CLEAR_CART } from '../../ActionTypes'

class CartTotals extends Component {
    constructor(props) {
        super(props)
        this.clearCart = this.clearCart.bind(this);
    }

    clearCart() {
        this.props.dispatch({ type: CLEAR_CART })
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                        <Link to="/">
                            <button
                                className="btn btn-outline-danger text-uppercase mb-3 px-5"
                                type="button"
                                onClick={() => this.clearCart()}
                            >
                                clear cart
                            </button>
                        </Link>
                        <h5>
                            <span className="text-title">subtotal : </span>
                            <strong>$ {this.props.cart.subTotal}</strong>
                        </h5>
                        <h5>
                            <span className="text-title">tax : </span>
                            <strong>$ {this.props.cart.tax}</strong>
                        </h5>
                        <h5>
                            <span className="text-title">total : </span>
                            <strong>$ {this.props.cart.total}</strong>
                        </h5>
                    </Col>
                </Row>
            </Container>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps)(CartTotals)
