import React, { Component } from 'react';
import { Elements } from 'react-stripe-elements';
import CheckoutFormContent from '../CheckoutFormContent';
import '../../../../commonStyles.css'

class CheckoutForm extends Component {

  success() {
    this.props.succeeded()
  }

  render() {
    return (
      <div className="example">
          <Elements>
            <CheckoutFormContent  succeeded={ () => this.success() } name={ this.props.name }/>
          </Elements>
        </div>
    );
  }
}

export default CheckoutForm;