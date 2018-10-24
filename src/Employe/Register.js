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
      password: '',
      isLoaded: false,
      errorMsg:false,
      errorText:''
    }]
}


registerUserData = () => {

    var name = this.state.fullname;
    var email = this.state.email;
    var pass = this.state.password;

    this.setState({
      isLoaded:true
    })
    if (name == '' ) {
      this.setState({
       errorMsg:true,
       isLoaded:false,
       errorText:"Name Can't be blank"
      })
      return;
    }else{ 
      this.setState({
        errorMsg:false,
        errorText:"",
        isLoaded:true,
       })
    }
    
    var check = /^[A-Za-z ]+$/.test(name);

    if (!check) {
      this.setState({
        errorMsg:true,
        errorText:"Please Insert Valid Name",
        isLoaded:false,
       })

       return;
 
    }else{
      this.setState({
        errorMsg:false,
        errorText:"",
        isLoaded:true,
       })
    }


    if (email === '' || email == null) {
      this.setState({
        errorMsg:true,
        errorText:"Email can't be blank",
        isLoaded:false,
       })
       return
    }else{
       this.setState({
        errorMsg:false,
        errorText:"",
        isLoaded:true
       })
    }

    var validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

    if (!validEmail) {
        this.setState({
        errorMsg:true,
        errorText:"Invalid Email !",
        isLoaded:false,
       })
       return

    }else{
      this.setState({
        errorMsg:false,
        errorText:"",
        isLoaded:true,
       })

    }

    if (pass === '' || pass == null) {
      this.setState({
        errorMsg:true,
        errorText:"Password Can't be blank",
        isLoaded:false,
       })

      return;
    }else{
      this.setState({
        errorMsg:false,
        errorText:"",
        isLoaded:true,
       })
    }
    

    var data = {
      fullname  : this.state.fullname,
      email     : this.state.email,
      pass      : this.state.password 
  }

  fetch("http://localhost/ReactApi/insert_data2.php", {
      method: 'POST',
      body: JSON.stringify(data)
  }).then((res)=> res.json())
    .then((res) =>{
      if(res.status==='300' || res.status===300){
        this.setState({
          errorMsg:true,
          errorText:"Email id already in use",
          isLoaded:false,
        })
        return;
      }

      if(res.status==='200' || res.status===200)
      {
        this.setState({
          errorMsg:true,
          errorText:"Thanks for registering with us",
          isLoaded:false,
        })

        setTimeout( () => {
        this.props.history.push('/');
        }, 850);

        return;
      }
      if(res.status==='400' || res.status===400){
        this.setState({
          errorMsg:true,
          errorText:"Something wents wrong !",
          isLoaded:false,
        })

      }




  })
  .catch(function(err) {
      console.log(err)
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
      <div>
        <div className="register-box">
          <div className="register-logo">
            <a><b>Register Your Self</b></a>

            <center>
              {this.state.errorMsg ?
                <div className="btn btn-danger">
                  {this.state.errorText}
            </div> : null}
            </center>

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

                {this.state.isLoaded ?
                  <button disabled type="button" className="btn btn-primary btn-block btn-flat">
                    <i className="fa fa-spinner fa-spin"></i>
                  </button> :
                  <button type="button" className="btn btn-primary btn-block btn-flat" onClick={this.registerUserData}>Register</button>
                }

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
      </div>
    )
  }
}
export default Register







