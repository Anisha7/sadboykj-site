import React, {Component} from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutFormContent from '../CheckoutFormContent';
import '../../../../commonStyles.css'

class CheckoutForm extends Component {
  render() {
    return (
      <div className="example">
          <Elements>
            <CheckoutFormContent />
          </Elements>
        </div>
    );
  }
}

export default CheckoutForm;