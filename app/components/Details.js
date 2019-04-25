import React, { Component } from 'react'
import { getProductById } from '../actions/productActions'
import { connect } from 'react-redux'
import Spinner from './ui/Spinner'
import Error from './ui/Error'
import { ADD_TO_CART, OPEN_MODAL } from '../ActionTypes'
import DetailsComponent from './DetailsComponent'

class Details extends Component {
    constructor(props) {
        super(props)
        this.state = {
            product: {},
            isLoading: true,
            loadingError: false
        }
        this.addToCart = this.addToCart.bind(this);
    }

    componentDidMount() {
        let productId = this.props.match.params.productId
        this.props.dispatch(getProductById(productId));
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            product: nextProps.product,
            isLoading: nextProps.isLoading,
            loadingError: nextProps.loadingError
        });
    }

    addToCart() {
        let product = this.state.product;
        this.props.dispatch({ type: ADD_TO_CART, product });
        this.props.dispatch({ type: OPEN_MODAL });
    }

    render() {
        const { isLoading, loadingError, product } = this.state;

        if (isLoading) {
            return (
                <Spinner />
            )
        } else if (loadingError) {
            return (
                <Error text="Failed to load product" />
            )
        }

        return (
            <DetailsComponent product={product} addToCart={this.addToCart}/>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        product: state.detailProduct.data,
        isLoading: state.detailProduct.isFetching,
        loadingError: state.detailProduct.error
    }
}

export default connect(mapStateToProps)(Details);
