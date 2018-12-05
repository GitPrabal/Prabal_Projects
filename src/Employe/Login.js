import React, { Component } from 'react';
import AutoLogout from './AutoLogout';

import '../Admin/bower_components/bootstrap/dist/css/bootstrap.min.css';
import '../Admin/bower_components/Ionicons/css/ionicons.min.css';
import '../Admin/dist/css/AdminLTE.min.css';
import '../Admin/bower_components/font-awesome/css/font-awesome.min.css';
import '../Admin/plugins/iCheck/square/blue.css';
import '../Employe/css/login.css';

class Login extends Component {

  constructor(props){
    super(props)
    this.state = [{
      email: '',
      password: '',
      emailErrorMsg: false,
      errorFlag:false,
      errorText:'',
      invalidEmail:false,
      invalidPass:false,
      blocking:false
    }]
    
  }

  getUserLoggedIn = () =>{

  var email = this.state.email;
  var password = this.state.password;
  var validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

  this.setState({
    blocking:true
  })


  if(email=== '' || !validEmail ){

    this.setState({
    errorFlag:true,
    invalidEmail:true,
    errorText:"Invalid Email",
    blocking:false
    })

    setTimeout( () => {
      this.setState({
        errorFlag: false,
        invalidEmail:false,
        blocking:false
      });
    }, 3000);
    return;
  }
  else{      
    this.setState({
    errorFlag:false,
    invalidEmail:false,
    errorText:'',
    blocking:false
    })
}



  if(typeof password == 'undefined' || password == ' '){

    this.setState({
      errorFlag:true,
      errorText:"Password can't be blanked",
      invalidPass:true,
      blocking:false
    })

    setTimeout( () => {
        this.setState({
          errorFlag: false,
          invalidPass:false
        });
      }, 3000);

    return;
  }
  else{      
    this.setState({
    errorFlag:false,
    errorText:'',
    invalidPass:false
    })
}
   document.getElementById('user_email').value='';
   document.getElementById('user_pass').value='';
   var data = {
    email     : new Buffer(email).toString('base64'),
    pass      : new Buffer(password).toString('base64') 
}
   fetch(('http://test.reactapi.com/userlogin'),{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
    })
   .then(res => res.json())
   .then(res=>{

    if(res.flag){
      this.setState({
       emailErrorMsg:false,
       blocking:false
    })
      sessionStorage.setItem('myData',res.user_id);
      sessionStorage.setItem('full_name',res.fullname);
      sessionStorage.setItem('reg_date',res.reg_date);
      
      this.props.history.push('/dashboard');
    }

    if(res.status=='404')
    {
      this.setState({
      errorFlag:true,
      errorText:"Invalid Credentials",
      emailErrorMsg:false,
      blocking:false
      })

      setTimeout( () => {
        this.setState({
          errorFlag: false
        });
      }, 3000);
     return;
    }

   }).catch((err)=> {
    
    this.setState({
      errorFlag:true,
      errorText:"It Seems that server is not responding Please try after sometime"
    })
   });
}



  changeEmailHandler = (event) => {
    this.setState({
      email: event.target.value
    })
  }

  changePassHandler = (event) => {
    this.setState({
      password: event.target.value
    })
  }


  render() {

 let classes = [];
 let passClass=[];

 if(this.state.invalidEmail){
   classes.push('red-bold');
 }

 if(this.state.invalidPass){
  passClass.push('red-bold');
 }
    return (
      <div>
        <div className="login-box">
          <div className="login-logo">
            <b>Login</b>
               <div id="errorMsg">
              {this.state.emailErrorMsg ?
                <div className="btn btn-danger">
                  Invalid Credentials
            </div> : null}
            </div>
            <div id="errorMsg1">
              {this.state.errorFlag ?
                <div className="btn btn-danger">
                  {this.state.errorText}
            </div> : null}
            </div>
          </div>
          <div className="login-box-body">
            <p className="login-box-msg">Sign in to start your session</p>
            <div className="form-group has-feedback">
            <input type="email" className={"form-control " + classes} placeholder="Email" 
               onChange={this.changeEmailHandler} name="email"
               id="user_email"
              />

              <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
            </div>

            <div className="form-group has-feedback">
            <input type="password" className={"form-control " + passClass}  placeholder="Password" 
               onChange={this.changePassHandler} name="password"
               id="user_pass"
              />

              <input type="hidden" name="password" className="csrf" value={Math.random()} />


          
              <span className="glyphicon glyphicon-lock form-control-feedback"></span>
            </div>

            
            <div className="row">
              <div className="col-xs-8">
              </div>
              <div className="col-xs-4">
              {this.state.blocking ? 
                <button disabled type="button" className="btn btn-primary btn-block btn-flat"><i className="fa fa-spinner fa-spin"></i></button>
                :<button type="button" className="btn btn-primary btn-block btn-flat" onClick={this.getUserLoggedIn}>Sign In</button>
              }
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
            <a href="/forgot-pass">I forgot my password</a><br />
            <a href='/register' className="text-center">Register a new membership</a>
            </div>

          </div>
        </div>
      </div>
    );
  }

}

export default Login;
