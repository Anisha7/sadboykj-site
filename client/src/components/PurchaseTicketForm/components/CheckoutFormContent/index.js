import React, { Component } from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';
import '../../styles.css'
import '../../../../commonStyles.css'

class CheckoutFormContent extends Component {
  constructor(props) {
    super(props);
    this.state = { error: false,
    card: null };
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    let { token } = await this.props.stripe.createToken(this.state.card);
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
        <p>Pay $5 to purchase an entry ticket!</p>
        <CardElement onChange={(e) => this.setState({ card: e })} />
        <button onClick={this.submit}>Purchase ticket</button>
        <p>{error}</p>
      </div>
    );
  }
}

export default injectStripe(CheckoutFormContent);