import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { ADD_TO_CART, OPEN_MODAL } from '../ActionTypes'

class Product extends Component {
    constructor(props) {
        super(props)
        this.addToCart = this.addToCart.bind(this)
    }

    addToCart() {
        let product = this.props.product;
        this.props.dispatch({ type: ADD_TO_CART, product });
        this.props.dispatch({ type: OPEN_MODAL });
    }

    render() {
        const { id, img, title, price } = this.props.product

        let inCart;
        if (!this.props.cart) {
            inCart = false;
        } else {
            let result = this.props.cart.filter(p => p.id === id)
            inCart = result.length == 1
        }

        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <div
                        className="img-container p-5"
                    >
                        <Link to={`/details/${id}`}>
                            <img src={img} className="card-img-top" />
                        </Link>
                        <button
                            className={"cart-btn " + (inCart ? "not-allowed" : "")}
                            disabled={inCart?true:false}
                            onClick={() => this.addToCart()}
                        >
                            { inCart ? (
                                <p className="text-capitalize mb-0" disabled>
                                    {" "} in cart
                                </p>
                            ) : (
                                <i className="fas fa-cart-plus" />
                            ) }
                        </button>
                    </div>
                    {/* cart footer */}
                    <div className="card-footer d-flex justify-content-between">
                        <p className="align-self-center mb-0">
                            {title}
                        </p>
                        <h5 className="text-blue font-italic mb-0">
                            <span className="mr-1">$</span> {price}
                        </h5>
                    </div>
                </div>
            </ProductWrapper>
        )
    }
}

Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.boolean
    }).isRequired
}

function mapStateToProps(state, ownProps) {
    return {
        cart: state.cart.products
    }
}

export default connect(mapStateToProps)(Product);

const ProductWrapper = styled.section`
.card {
    border-color: transparent;
    transition: all 1s linear;
}

.card-footer {
    background: transparent;
    border-top: transparent;
}

&:hover {
    .card {
        border: 0.04rem solid rgba(0,0,0,0.2);
        box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
    }

    .card-footer {
        background: rgba(247, 247, 247);
    }
}

.img-container {
    position: relative;
    overflow: hidden;
}

.img-container:hover .card-img-top {
    transform: scale(1.2);
}

.card-img-top {
    transition: all 1s linear;
}

.cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--lightBlue);
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 1s linear;
}

.img-container:hover .cart-btn {
    transform: translate(0, 0);
}

.cart-btn:hover {
    color: var(--mainBlue);
    cursor: pointer;
}
`
