import React, { Component } from 'react';
import axios from 'axios';
import '../Admin/bower_components/bootstrap/dist/css/bootstrap.min.css';
import '../Admin/bower_components/Ionicons/css/ionicons.min.css';
import '../Admin/dist/css/AdminLTE.min.css';
import '../Admin/bower_components/font-awesome/css/font-awesome.min.css';
import '../Admin/plugins/iCheck/square/blue.css';
import '../Employe/css/login.css';


class Register extends Component {

  constructor(props) {
    super(props);
    this.state = [{
      fullname: '',
      email: '',
      password: ''
    }]
  }

  getUserList = () => {

    this.setState({
      isLoaded: true
    });

    /* API Call */
    fetch('https://randomuser.me/api/?results=10&inc=name,registered&nat=fr')
      .then(res => res.json())
      .then((res) => {
        this.setState({
          users: res.results,
          showComponent: true,
          isLoaded: false
        });

      })
  }


  Insert_Data_Into_MySQL = () => {

    fetch('https://reactnativecode.000webhostapp.com/Insert_Product.php',
      {
        method: 'POST',
        headers:
        {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(
          {
            fullname: this.state.fullname,
            email: this.state.email,
            password: this.state.password

          })

      }).then((response) => response.json()).then((responseJsonFromServer) => {
        console.log(responseJsonFromServer);
      }).catch((error) => {
        console.error(error);
      });

  }




  registerUserData = () => {

  var name = this.state.fullname;
  var email = this.state.email;
  var pass = this.state.password;

  if(name==='' || name ==null){
    alert("Name Should not be blanked");
    return;
  }
  var check = /^[A-Za-z ]+$/.test(name);
  if(!check){
    alert("Name is not valid");
    return;
  }


  if(email==='' || email ==null){
    alert("Email Should not be blanked");
    return;
  }

var validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

if(!validEmail){
  alert("You have entered an invalid email address!");
  return;
}

  if(pass==='' || pass ==null){
    alert("Please insert password");
    return;
  }

 

  axios.post('http://localhost/ReactApi/insert_data.php',
  {
      fullname:name,
      email:email,
      pass:pass
      }).then((response) => response.json()).then((responseJsonFromServer) => {
        console.log("Response Found n---------------------"+responseJsonFromServer);
      }).catch((error) => {
        console.error("Error Founds In--------------"+error);
      });

}
  changeEmailHandler = (event) => {
    this.setState({
      email: event.target.value
    })
  }

  changeNameHandler = (event) => {
    this.setState({
      fullname: event.target.value
    })
  }

  changePassHandler = (event) => {
    this.setState({
      password: event.target.value
    })
  }



  render() {
    return (
      <div className="register-box">
        <div className="register-logo">
          <a href="../../index2.html"><b>Register Your Self</b> </a>
        </div>
        <div className="register-box-body">
          <p className="login-box-msg">Register a new membership</p>
          <div className="form-group has-feedback">
            <input type="text" className="form-control" id="" placeholder="Full name" name="fullname"
              onChange={this.changeNameHandler}
            />
            <span className="glyphicon glyphicon-user form-control-feedback"></span>
          </div>
          <div className="form-group has-feedback">
            <input type="email" className="form-control" placeholder="Email" name="email"
              onChange={this.changeEmailHandler}
            />
            <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
          </div>
          <div className="form-group has-feedback">
            <input type="password" className="form-control" placeholder="Password" name="password"
              onChange={this.changePassHandler}
            />
            <span className="glyphicon glyphicon-lock form-control-feedback"></span>
          </div>
          <div className="row">
            <div className="col-xs-8">
              <div className="checkbox icheck">
              </div>
            </div>
            <div className="col-xs-4">
              <button type="button" className="btn btn-primary btn-block btn-flat" onClick={this.registerUserData}>Register</button>
            </div>

          </div>


          <div className="social-auth-links text-center">
            <p>- OR -</p>
            <a href="" className="btn btn-block btn-social btn-facebook btn-flat"><i className="fa fa-facebook"></i> Sign up using
        Facebook</a>
            <a href="" className="btn btn-block btn-social btn-google btn-flat"><i className="fa fa-google-plus"></i> Sign up using
        Google+</a>
          </div>
          <a href='/' className="text-center">I already have a membership</a>
        </div>
      </div>
    )
  }
}
export default Register







