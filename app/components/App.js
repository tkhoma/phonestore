import React, { Component, Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from './NavbarComponent'
import ProductList from './ProductList'
import Details from './Details'
import { Cart } from './Cart'
import Default from './Default'
import Product from './Product'
import './App.css'
import Modal from './Modal'
import MyProvider from '../store/provider'

class App extends Component {
    render() {
        return (
            <Fragment>
                <MyProvider>
                    <Navbar />
                    <Switch>
                        <Route exact path="/" component={ProductList} />
                        <Route path="/details/:productId" component={Details} />
                        <Route path="/cart" component={Cart} />
                        <Route component={Default} />
                    </Switch>
                    <Modal />
                </MyProvider>
            </Fragment>
        )
    }
}

export default App
