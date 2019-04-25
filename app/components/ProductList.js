import React, { Component } from 'react'
import { connect } from 'react-redux'
import Product from './Product'
import {
    Container,
    Row
} from 'reactstrap'
import Title from './ui/Title'
import { getProducts } from '../actions/productActions'
import Spinner from './ui/Spinner'
import {
    ADD_TO_CART,
    LEAVE_DETAILS
} from '../ActionTypes'

const API = 'http://172.17.0.1:8080/products'

class ProductList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [],
            isLoading: true,
            loadingError: false,
            modalOpen: false
        }
    }

    componentDidMount() {
        this.props.dispatch(getProducts());
        this.props.dispatch({ type: LEAVE_DETAILS });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            products: nextProps.products,
            isLoading: nextProps.isLoading,
            loadingError: nextProps.loadingError
        })
    }

    render() {
        const { isLoading, loadingError, products } = this.state;

        if (isLoading) {
            return (
                <Spinner />
            )
        } else if (loadingError) {
            return (
                <Container className="mt-5">
                    <Row className="justify-content-center text-danger">
                        <h1>Failed to load products</h1>
                    </Row>
                </Container>
            )
        }

        return (
            <div className="py-5">
                <Container>
                    <Title name="our" title="products" />
                    <Row>
                    {
                        products.map( product => {
                            return <Product
                                key={product.id}
                                product={product}
                                openModal={this.openModal}
                                closeModal={this.closeModal}
                            />
                        })
                    }
                    </Row>
                </Container>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        products: state.products.data,
        isLoading: state.products.isFetching,
        loadingError: state.products.error
    }
}

export default connect(mapStateToProps)(ProductList);
