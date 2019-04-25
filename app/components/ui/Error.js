import React, { Component } from 'react'
import {
    Container,
    Row
} from 'reactstrap'

export default class Error extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Container className="mt-5">
                <Row className="justify-content-center text-danger">
                    <h1>{this.props.text}</h1>
                </Row>
            </Container>
        )
    }
}
