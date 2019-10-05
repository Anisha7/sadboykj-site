import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Home from './components/Home/';
import PurchaseTicketForm from './components/PurchaseTicketForm';

class App extends Component {
  
  render() {
    return (
      <div className="wrapper">
      <Router>
        <Switch>
            <Route exact path="/" handler={Home}>
              <Home />
            </Route>
            <Route path="/tickets" handler={PurchaseTicketForm}>
              <PurchaseTicketForm />
            </Route>
          </Switch>
      </Router>
      </div>
    )
  }
}

export default App;
// constructor(props) {
  //   super(props);
  //   this.state = { apiResponse: "" };
  // }

  // callAPI() {
  //     fetch("http://localhost:9000/testAPI")
  //         .then(res => res.text())
  //         .then(res => this.setState({ apiResponse: res }));
  // }

  // componentWillMount() {
  //     this.callAPI();
  // }

  // render() {
  //   return (
  //     <div className="App">
  //       <div className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <h2>Welcome to React</h2>
  //       </div>
  //       <p className="App-intro">;{this.state.apiResponse}</p>
  //     </div>
  //   );
  // }