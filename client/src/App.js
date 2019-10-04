import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Home from './components/Home/';

class App extends Component {
  
  render() {
    return (
      <div className="wrapper">
      <Router>
        {/* render navbar here */}
        <Switch>
            <Route path="/">
              {/* <p>HELLO</p> */}
              <Home />
              {/* render home page component here */}
            </Route>
            {/* <Route path="/tickets">
              <Tickets />
            </Route>
            <Route path="/events">
              <Events />
            </Route>
            <Route path="/albums">
              <Albums />
            </Route> */}
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