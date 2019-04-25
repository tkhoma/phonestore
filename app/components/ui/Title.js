import React, { Component } from 'react'
import {
    Row,
    Col
} from 'reactstrap'

class Title extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Row>
                <Col className="col-10 mx-auto my-2 text-center text-title">
                    <h1 className="text-capitalize font-weight-bold">
                        {this.props.name} <strong className="text-blue">{this.props.title}</strong>
                    </h1>
                </Col>
            </Row>
        );
    }
}

export default Title;
