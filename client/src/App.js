import React, { Component } from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { StripeProvider } from 'react-stripe-elements';

import './App.css';

import Home from './components/Home';
import ZonaccinoHome from './components/Home/Zonaccino';
import PurchaseTicketForm from './components/PurchaseTicketForm';
import Confirmation from './components/Confirmation';
import Error from './components/Error';

import reducers from './reducers';
const store = createStore(reducers)

class App extends Component {

  render() {
    return (
    // TODO: set up API key in .env to use here
      <StripeProvider apiKey={ process.env.REACT_APP_STRIPE_PUBLISH }>
        <Provider store={store}>
          <div className="wrapper">
            <Router>
              <Switch>
                  <Route exact path="/">
                    <Home />
                  </Route>
                  <Route exact path="/zonaccino">
                    <ZonaccinoHome />
                  </Route>
                  <Route path="/tickets">
                    <PurchaseTicketForm />
                  </Route>
                  {/* Only goes here if form is submitted, 
                  else goes to error page */}
                  <Route path="/confirmation">
                    <Confirmation />
                  </Route>
                  <Route path="/error">
                    <Error />
                  </Route>
                </Switch>
            </Router>
          </div>
        </Provider>
      </StripeProvider>
    )
  }
}

export default App;
