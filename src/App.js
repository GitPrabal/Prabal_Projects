import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './Employe/Login';
import Register from './Employe/Register';
import Forgotpass from './Employe/Forgotpass';

class App extends Component {

  render() {
    return (
      <div>
      <Router>
        <div>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/forgot-pass" component={Forgotpass} />
          <Route exact path="/connect" component={Forgotpass} />
        </div>
      </Router>
      </div>
    );
  }

}

export default App;
