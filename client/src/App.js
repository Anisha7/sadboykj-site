import React, { Component } from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';

import Home from './components/Home';
import PurchaseTicketForm from './components/PurchaseTicketForm';
import Confirmation from './components/Confirmation';
import Error from './components/Error';

import reducers from './reducers';
const store = createStore(reducers)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
      fetch("http://localhost:9000/testAPI")
          .then(res => res.text())
          .then(res => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
      this.callAPI();
  }

  render() {
    return (
      <Provider store={store}>
        <div className="wrapper">
          <p className="App-intro">;{this.state.apiResponse}</p>
          <Router>
            <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/tickets">
                  <PurchaseTicketForm />
                </Route>
                {/* Only be able to go here if form is submitted, 
                else go to error page */}
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
    )
  }
}

export default App;
