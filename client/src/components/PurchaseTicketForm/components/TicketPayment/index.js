import React, { Component } from 'react';

class TicketPayment extends Component {
    constructor(props) {
        super(props)
        this.state={
            paymentSuccess: false,
        }
    }

    render() {
        return (
            <HomeWrapper> 
                <CheckoutForm succeeded={ (val) => this.setState( { paymentSuccess: val })}/>
            </HomeWrapper>
         )
    }
}