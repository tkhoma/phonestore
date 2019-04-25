import React, { Component } from 'react'
import styled from 'styled-components'
import { ButtonContainer } from './ui/Button'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { OPEN_MODAL, CLOSE_MODAL, CLEAN_DETAIL } from '../ActionTypes'

class Modal extends Component {
    constructor(props) {
        super(props)

        this.closeModal = this.closeModal.bind(this)
    }

    closeModal() {
        this.props.dispatch({ type: CLOSE_MODAL });
        this.props.dispatch({ type: CLEAN_DETAIL });
    }

    render() {
        if (!this.props.modalOpen) {
            return null
        } else {
            return (
                <ModalContainer>
                    <div className="container">
                        <div className="row">
                            <div id="modal" className="col-8 mx-auto col-lg-4 col-md-6 text-center text-capitalize p-5">
                                <h5>item added to the cart</h5>
                                <img src={`/${this.props.detailProduct.img}`} className="img-fluid" alt="product" />
                                <h5>{this.props.detailProduct.title}</h5>
                                <h5 className="text-muted">price : $ {this.props.detailProduct.price}</h5>
                                <Link to='/'>
                                    <ButtonContainer onClick={this.closeModal}>
                                        store
                                    </ButtonContainer>
                                </Link>
                                <Link to='/cart'>
                                    <ButtonContainer cart onClick={this.closeModal}>
                                        go to cart
                                    </ButtonContainer>
                                </Link>
                            </div>
                        </div>
                    </div>
                </ModalContainer>
            )
        }
    }
}

function mapStateToProps(state, ownProps) {
    return {
        modalOpen: state.modal.modalOpen,
        detailProduct: state.cart.detailProduct
    }
}

export default connect(mapStateToProps)(Modal);

const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.3);
    display: flex;
    align-items: center;
    justfify-content: center;
    #modal {
        background: var(--mainWhite);
    }
`
