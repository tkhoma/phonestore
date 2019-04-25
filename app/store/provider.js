import React, { Component } from 'react'
import myContext from './context'

class MyProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalOpen: false
        }
    }

    closeModal() {
        console.log('close modal');
    }

    openModal() {
        console.log('show modal');
    }

    render() {
        return (
            <myContext.Provider
                value={{
                    modalOpen: this.state.modalOpen,
                    closeModal: this.closeModal,
                    openModal: this.openModal
                }}
            >
                {this.props.children}
            </myContext.Provider>
        )
    }
}

export default MyProvider
