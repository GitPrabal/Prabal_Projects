import React, { Component } from 'react';

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
      isLoaded: false,
      emailErrorMsg: false,
      errorFlag:false,
      errorText:''
    }]
  }


  getUserLoggedIn = () =>{

  var email = this.state.email;
  var password = this.state.password;
  var validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

  if(email=== '' || !validEmail ){
    this.setState({
    errorFlag:true,
    errorText:"Invalid Email"
    })
    return;
  }else{      
    this.setState({
    errorFlag:false,
    errorText:''
    })
}
  if(password===''){
    this.setState({
      errorFlag:true,
      errorText:"Password can't be blanked"
      })
    return;
  }
  else{      
    this.setState({
    errorFlag:false,
    errorText:''
    })
}

  this.setState({
    email: '',
    password: '',
    isLoaded: true,
    errorFlag:false,
    errorText:''
   }) 

   document.getElementById('user_email').value='';
   document.getElementById('user_pass').value='';

   fetch('http://localhost/ReactApi/checkUserLoggedIn.php?email='+email+'&password='+password)
   .then(res => res.json())
   .then(res=>{
    if(res.flag){
      this.setState({
       emailErrorMsg:false,
       isLoaded:false
    })
      sessionStorage.setItem('myData',res.user_id);
      this.props.history.push('/dashboard');
    }

    if(res.status=='404')
    {
      alert("Invalid Credentials");
      this.setState({
        emailErrorMsg:false,
        isLoaded:false
     })
     return;

    }



   })

   setTimeout( () => {
    this.setState({
      errorFlag: false
    });
  }, 3000);



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
    return (
      <div>
        <div className="login-box">
          <div className="login-logo">
            <a href=""><b>Login</b></a>
             <center>

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


            </center>
          </div>
          <div className="login-box-body">
            <p className="login-box-msg">Sign in to start your session</p>
            <div className="form-group has-feedback">
              <input type="email" className="form-control" placeholder="Email" 
               onChange={this.changeEmailHandler}
               id="user_email"
              />
              <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
            </div>
            <div className="form-group has-feedback">
              <input type="password" className="form-control" placeholder="Password" 
               onChange={this.changePassHandler}
               id="user_pass"
              />
              <span className="glyphicon glyphicon-lock form-control-feedback"></span>
            </div>

            
            <div className="row">
              <div className="col-xs-8">
              </div>
              <div className="col-xs-4">
              {this.state.isLoaded ? 
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
