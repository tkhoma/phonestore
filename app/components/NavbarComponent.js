import React, { Component } from 'react'
import {
    Nav,
    NavbarBrand,
    NavItem,
    NavLink
} from 'reactstrap'
import styled from 'styled-components'
import { ButtonContainer } from './ui/Button'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class NavbarComponent extends Component {
    render() {
        return (
            <NavWrapper className="navbar navar-expand-sm navbar-dark px-sm-5">
                <NavbarBrand tag={Link} to="/">
                    <img src="/dist/9f7e506d7455da27ce24e474c84a8e0a.svg" alt="store" className="navbar-brand" />
                </NavbarBrand>
                <Nav navbar className="align-items-center">
                    <NavItem className="ml-3">
                        <NavLink tag={Link} to="/">
                            products
                        </NavLink>
                    </NavItem>
                </Nav>
                <NavLink tag={Link} to="/cart" className="ml-auto">
                    <ButtonContainer>
                        <span className="mr-2">
                            <i className="fas fa-cart-plus"></i>
                        </span>
                        my cart
                    </ButtonContainer>
                </NavLink>
            </NavWrapper>
        )
    }
}

export default NavbarComponent;

const NavWrapper = styled.nav`
background: var(--mainBlue);
.nav-link {
    color: var(--mainWhite)!important;
    font-size: 1.3rem;
    text-transform: capitalize;
}
`
