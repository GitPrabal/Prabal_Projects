import React, { Component } from 'react';

import '../Admin/bower_components/bootstrap/dist/css/bootstrap.min.css';
import '../Admin/bower_components/Ionicons/css/ionicons.min.css';
import '../Admin/dist/css/AdminLTE.min.css';
import '../Admin/bower_components/font-awesome/css/font-awesome.min.css';
import '../Admin/plugins/iCheck/square/blue.css';
import '../Employe/css/login.css';


class Register extends Component {

  constructor(props)
  {
    super(props);
    this.state = [{
    fullname:'',
    email:'',
    password:'' 
    }]
  }

  registerUserData = ()=>{
  var name = this.state.fullname;
  var email = this.state.email;
  var pass = this.state.password;

  }

  changeEmailHandler = (event) => {
    this.setState({
      email:event.target.value
    })
  }

  changeNameHandler = (event) => {
    this.setState({
      fullname:event.target.value
    })
  }

  changePassHandler = (event) => {
    this.setState({
      password:event.target.value
    })
  }

  

    render() {
        return (
            <div class="register-box">
                <div class="register-logo">
                    <a href="../../index2.html"><b>Register Your Self</b> </a>
                </div>

                <div class="register-box-body">
                    <p class="login-box-msg">Register a new membership</p>
                    <div class="form-group has-feedback">
                        <input type="text" class="form-control" id="" placeholder="Full name" name="fullname"
                         onChange={this.changeNameHandler}
                        />
                        <span class="glyphicon glyphicon-user form-control-feedback"></span>
                    </div>
                    <div class="form-group has-feedback">
                        <input type="email" class="form-control" placeholder="Email" name="email"
                          onChange={this.changeEmailHandler}
                        />
                        <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
                    </div>
                    <div class="form-group has-feedback">
                        <input type="password" class="form-control" placeholder="Password" name="password"
                         onChange={this.changePassHandler}
                         />
                        <span class="glyphicon glyphicon-lock form-control-feedback"></span>
                    </div>
                    <div class="row">
                        <div class="col-xs-8">
                            <div class="checkbox icheck">
                                
          </div>
                            </div>

                            <div class="col-xs-4">
                                <button type="button" class="btn btn-primary btn-block btn-flat" onClick={this.registerUserData}>Register</button>
                            </div>

                        </div>


                        <div class="social-auth-links text-center">
                            <p>- OR -</p>
                            <a href="#" class="btn btn-block btn-social btn-facebook btn-flat"><i class="fa fa-facebook"></i> Sign up using
        Facebook</a>
                            <a href="#" class="btn btn-block btn-social btn-google btn-flat"><i class="fa fa-google-plus"></i> Sign up using
        Google+</a>
                        </div>
                        <a href='/' className="text-center">I already have a membership</a>
                    </div>
                </div>
        )
    }
}
export default Register







