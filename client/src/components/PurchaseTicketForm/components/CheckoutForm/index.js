import React, {Component} from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutFormContent from '../CheckoutFormContent';
import '../../../../commonStyles.css'

class CheckoutForm extends Component {
  render() {
    // TODO: set up API key in .env to use here
    return (
      <StripeProvider apiKey="pk_test_TYooMQauvdEDq54NiTphI7jx">
        <div className="example">
          <h1>React Stripe Elements Example</h1>
          <Elements>
            <CheckoutFormContent />
          </Elements>
        </div>
      </StripeProvider>
    );
  }
}

export default CheckoutForm;