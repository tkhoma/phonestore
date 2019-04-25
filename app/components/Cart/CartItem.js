import React, { Component } from 'react'
import {
    Row,
    Col
} from 'reactstrap'
import { connect } from 'react-redux'

class CartItem extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { id, title, img, price, count, total } = this.props.item

        return (
            <Row className="my-2 text-capitalize text-center">
                <Col className="col-10 mx-auto col-lg-2">
                    <img
                        src={`/${img}`}
                        style={{width:'5rem', height:'5rem'}}
                        className="img-fluid"
                        alt="product"
                    />
                </Col>
                <Col className="col-10 mx-auto col-lg-2">
                    <span className="d-lg-none">product : </span>
                    {title}
                </Col>
                <Col className="col-10 mx-auto col-lg-2">
                    <span className="d-lg-none">price : </span>
                    {price}
                </Col>
                <Col className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                    <div className="d-flex justify-content-center">
                        <span className="btn btn-black mx-1" onClick={() => this.props.decrement(id)}>
                            -
                        </span>
                        <span className="btn btn-black mx-1">{count}</span>
                        <span className="btn btn-black mx-1" onClick={() => this.props.increment(id)}>
                            +
                        </span>
                    </div>
                </Col>
                <Col className="col-10 mx-auto col-lg-2">
                    <div className="cart-icon" onClick={() => this.props.removeItem(id)}>
                        <i className="fas fa-trash"></i>
                    </div>
                </Col>
                <Col className="col-10 mx-auto col-lg-2">
                    <strong>item total : $ </strong>
                    {total}
                </Col>
            </Row>
        )
    }
}

export default connect()(CartItem);
