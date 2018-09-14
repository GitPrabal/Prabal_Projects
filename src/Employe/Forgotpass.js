import React, { Component } from 'react';

import '../Admin/bower_components/bootstrap/dist/css/bootstrap.min.css';
import '../Admin/bower_components/Ionicons/css/ionicons.min.css';
import '../Admin/dist/css/AdminLTE.min.css';
import '../Admin/bower_components/font-awesome/css/font-awesome.min.css';
import '../Admin/plugins/iCheck/square/blue.css';
import '../Employe/css/login.css';

class Forgotpass extends Component {

  render() {
    return (
      <div>
        <div className="login-box">
          <div className="login-logo">
            <a href=""><b>Forgot Password</b></a>
          </div>
          <div className="login-box-body">
            <p className="login-box-msg">Enter email to retrive password</p>
            <div className="form-group has-feedback">
              <input type="email" className="form-control" placeholder="Email" />
              <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
            </div>
            
            <div className="row">
              <div className="col-xs-7">
              </div>
              <div className="col-xs-5">
                <button type="submit" className="btn btn-primary btn-block btn-flat">Send Password</button>
              </div>
            </div>

            <div className="social-auth-links text-center">
              <p>- OR -</p>
              <a href="" className="btn btn-block btn-social btn-facebook btn-flat"><i className="fa fa-facebook"></i> Sign in using
            Facebook</a>
              <a href="" className="btn btn-block btn-social btn-google btn-flat"><i className="fa fa-google-plus"></i> Sign in using
            Google+</a>
            </div>

            <div>
            <a href='/' className="text-center">I already have a membership</a>
            <br />
            <a href='/register' className="text-center">Register a new membership</a>
            </div>

            
          </div>
        </div>
      </div>
    );
  }

}

export default Forgotpass;
