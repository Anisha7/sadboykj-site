import React, { Component } from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';
import '../../styles.css'
import '../../../../commonStyles.css'

class CheckoutFormContent extends Component {
  constructor(props) {
    super(props);
    this.state = { error: false };
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    let {token} = await this.props.stripe.createToken({name: "Name"});
    let response = await fetch("http://localhost:9000/charge", {
      method: "POST",
      headers: {"Content-Type": "text/plain"},
      body: token.id
    });
  
    if (response.ok) { 
      this.props.succeeded(true);
      console.log("Purchase Complete!");
    } else {
      this.setState({ error : true })
    }
  }

  render() {
    let error = ''
    if (this.state.error) {
      error = 'Try Again!'
    };

    return (
      <div className="checkout">
        <p>Would you like to complete the purchase?</p>
        <CardElement/>
        <button onClick={this.submit}>Purchase</button>
        <p>{error}</p>
      </div>
    );
  }
}

export default injectStripe(CheckoutFormContent);