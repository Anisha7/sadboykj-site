import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';

class App extends Component {
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
  render() {
    <Router>
      {/* render navbar here */}
      <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/tickets">
            <Tickets />
          </Route>
          <Route path="/events">
            <Events />
          </Route>
          <Route path="/albums">
            <Albums />
          </Route>
        </Switch>
    </Router>
  }
}

export default App;
