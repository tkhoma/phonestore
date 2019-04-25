import React, { Component } from 'react'

export default class Spinner extends Component {
    render() {
        return (
            <div className="mt-5">
                <div className="spinner">
                    <div className="bounce1"></div>
                    <div className="bounce2"></div>
                    <div className="bounce3"></div>
                </div>
            </div>
        );
    }
}
