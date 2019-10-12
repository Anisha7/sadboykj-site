import React, { Component } from 'react';

class TicketPayment extends Component {
    constructor(props) {
        super(props)
        this.state={
            goHome: false,
            goToError: false,
            goToConfirmation: false,
            paymentSuccess: false,
        }
    }

    render() {
        return (
            <HomeWrapper> 
                <CheckoutForm />
            </HomeWrapper>
         )
    }
}