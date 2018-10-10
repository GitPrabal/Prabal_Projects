import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './Employe/Login';
import Register from './Employe/Register';
import Forgotpass from './Employe/Forgotpass';
import Dashboard from './Employe/Dashboad';
import Header from './Employe/Header';
import Error from './Employe/Error';
import Profile from './Employe/Profile';


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
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/header" component={Header} />
          <Route exact path="/user-profile" component={Profile} />
          <Route exact path="/error" component={Error} />

        </div>
      </Router>
      </div>
    );
  }

}

export default App;
