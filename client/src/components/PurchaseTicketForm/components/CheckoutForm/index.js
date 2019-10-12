import React, { Component } from 'react';
import { Elements } from 'react-stripe-elements';
import CheckoutFormContent from '../CheckoutFormContent';
import '../../../../commonStyles.css'

class CheckoutForm extends Component {
  render() {
    return (
      <div className="example">
          <Elements>
            <CheckoutFormContent  succeeded={ this.props.succeeded } />
          </Elements>
        </div>
    );
  }
}

export default CheckoutForm;