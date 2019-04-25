import React, { Component } from 'react'
import {
    Container,
    Row,
    Col
} from 'reactstrap'

class EmptyCart extends Component {
    render() {
        return (
            <Container className="mt-5">
                <Row>
                    <Col className="col-10 mx-auto text-center text-title">
                        <h1>your cart is currently empty</h1>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default EmptyCart;
