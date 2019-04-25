import React, { Component } from 'react'
import {
    Container,
    Row,
    Col
} from 'reactstrap'
import { Link } from 'react-router-dom'
import { ButtonContainer } from './ui/Button'
import { connect } from 'react-redux'

class DetailsComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { id, title, img, company, price, info } = this.props.product;
        let inCart;
        if (!this.props.cart) {
            inCart = false;
        } else {
            let result = this.props.cart.filter(p => p.id === id)
            inCart = result.length == 1
        }

        return (
            <Container className="py-5">
            { /* title */ }
                <Row>
                    <Col className="col-10 mx-auto text-center text-slanted text-blue my-5">
                        <h1>{title}</h1>
                    </Col>
                </Row>
            { /* end of title */ }
            { /* product info */ }
                <Row>
                    <Col className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                        <img src={`/${img}`} className="img-flid" alt="product" />
                    </Col>
                    <Col className="col-10 mx-auto col-md-6 my-3 text-capitalize pl-md-5">
                        <h2>model: {title}</h2>
                        <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                            made by <span className="text-uppercase"> {company} </span>
                        </h4>
                        <h4 className="text-blue">
                            <strong>
                                price: <span>$</span>
                                {price}
                            </strong>
                        </h4>
                        <p className="text-capitalize font-weight-bold mt-3 mb-0">some info about product:</p>
                        <p className="text-muted lead">{info}</p>
                        <Link to='/'>
                            <ButtonContainer>
                                back to products
                            </ButtonContainer>
                        </Link>
                        <ButtonContainer
                            className={(inCart ? "not-allowed" : "")}
                            cart
                            disabled={inCart?true:false}
                            onClick={() => this.props.addToCart(this.props.product)}
                        >
                            {inCart ? "in cart" : "add to cart"}
                        </ButtonContainer>
                    </Col>
                </Row>
            { /* end of product info */ }
            </Container>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        cart: state.cart.products
    }
}

export default connect(mapStateToProps)(DetailsComponent);
