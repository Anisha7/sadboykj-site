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
    let token = await this.props.stripe.createToken(this.state.card);
    fetch("http://localhost:9000/charge", {
      method: "POST",
      headers: {'Accept': 'application/json', "Content-Type": "application/json"},
      body: JSON.stringify(token.token)
    }).then((res) => {
      console.log(res)
      console.log(res.ok)
      if (res.ok === true) {
        console.log("Purchase Complete!")
        return this.props.succeeded()
      } else {
        this.setState({ error : true })
      }
    })
  }

  render() {
    let error = ''
    if (this.state.error) {
      error = 'Try Again!'
    };

    return (
      <div className="checkout">
        <p>$5</p>
        <CardElement onChange={(e) => this.setState({ card: e })} />
        <button onClick={this.submit}>Purchase ticket</button>
        <p>{error}</p>
      </div>
    );
  }
}

export default injectStripe(CheckoutFormContent);