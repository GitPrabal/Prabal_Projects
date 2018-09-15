import React, { Component } from 'react';
import '../Person/css/login.css';
import ListItems from './ListItems';
import Loginbody from './Loginbody';
import Dashboard from './Dashboard';

class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      users: [],
      store: [],
      showComponent: false,
      isLoaded: false,
      email: '',
      pass: '',
      redirect: false
    }
  }

  getUserList = () => {

    this.setState({
      isLoaded: true
    });

    /* API Call */
    fetch('https://randomuser.me/api/?results=10')
      .then(res => res.json())
      .then((res) => {
        this.setState({
          users: res.results,
          showComponent: true,
          isLoaded: false
        });

      })
  }

  loginUser = () => {
    var email = this.state.email;
    var pass = this.state.pass;
    if (email === '') {
      alert("Please Insert Email Id");
      return;
    }

    var emailValid = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);

    if (emailValid === '' || emailValid === null) {
      alert("Please Insert Valid Email");
      return;
    }

    if (pass === '' || pass === null) {
      alert("Please Insert Password");
      return;
    }

    fetch('https://reqres.in/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "email": this.state.email,
        "password": this.state.pass
      })
    })
      .then((res)=> {

        if(res.ok){
          this.setState({
            redirect:true
          })
          this.props.history.push('/dashboard');

        }else{
          this.setState({
            redirect:false
          })

        }

      })

  }

  onChangeEmail = (event) => {
    this.setState({
      email: event.target.value,
      pass: event.target.value
    });
  }

  onChangePass = (event) => {
    this.setState({
      pass: event.target.value
    });
  }


  render() {
    if (this.state.isLoaded) {
      return (
        <div>
          <Loginbody click={this.getUserList} onChangeEmail={this.onChangeEmail} onChangePass={this.onChangePass} />
          <center>
            <div className="loader"></div>
          </center>
        </div>
      )
    }
    else {
      return (
        <div>

          <Loginbody click={this.getUserList} onChangeEmail={this.onChangeEmail} onChangePass={this.onChangePass} username={this.state.email} userpass={this.state.pass} loginUser={this.loginUser} />
          <center>
            {this.state.showComponent ?
              <p>List Of the users</p> : null}
          </center>

          <div ref='wrap'>{
            this.state.showComponent ? <ListItems props={this.state.users} loadFlag={this.state.isLoaded} /> : null
          }
          </div>
        </div>
      )


    }


  }
}

export default Login;