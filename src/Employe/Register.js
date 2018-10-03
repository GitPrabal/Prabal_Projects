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
<<<<<<< HEAD
      errorMsg:false,
      errorText:''
=======
      emailErrorMsg: false
>>>>>>> 510930aa5e88d2501e749f331929a235bb732e71
    }]
}


registerUserData = () => {

    var name = this.state.fullname;
    var email = this.state.email;
    var pass = this.state.password;

<<<<<<< HEAD
    if (name == '' ) {
      this.setState({
       errorMsg:true,
       errorText:"Name Can't be blank"
      })
      return;
    }else{ 
      this.setState({
        errorMsg:false,
        errorText:""
       })
    }

    var check = /^[A-Za-z ]+$/.test(name);

    if (!check) {
      this.setState({
        errorMsg:true,
        errorText:"Please Insert Valid Name"
       })
 
    }else{
      this.setState({
        errorMsg:false,
        errorText:""
       })
=======
    if (name === '' || name == null) {
      alert("Name Should not be blanked");
      return;
    }
    var check = /^[A-Za-z ]+$/.test(name);
    if (!check) {
      alert("Name is not valid");
      return;
>>>>>>> 510930aa5e88d2501e749f331929a235bb732e71
    }


    if (email === '' || email == null) {
<<<<<<< HEAD
      this.setState({
        errorMsg:true,
        errorText:"Email can't be blank"
       })
       return
    }else{
       this.setState({
        errorMsg:false,
        errorText:""
       })
=======
      alert("Email Should not be blanked");
      return;
>>>>>>> 510930aa5e88d2501e749f331929a235bb732e71
    }

    var validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

    if (!validEmail) {
<<<<<<< HEAD
        this.setState({
        errorMsg:true,
        errorText:"Invalid Email !"
       })
       return

    }else{
      this.setState({
        errorMsg:false,
        errorText:""
       })

    }

    if (pass === '' || pass == null) {
      this.setState({
        errorMsg:true,
        errorText:"Password Can't be blank"
       })

      return;
    }else{
      this.setState({
        errorMsg:false,
        errorText:""
       })
    }
    

    var data = {
      fullname  : this.state.fullname,
      email     : this.state.email,
      pass      : this.state.password 
  }

  fetch("http://localhost/ReactApi/insert_data.php", {
      method: 'POST',
      body: JSON.stringify(data)
  }).then((res)=> res.json())
    .then((res) =>{ 

      this.setState({
        isLoaded:false
      })
      console.log(res.status);

      if(res.status==='300' || res.status===300){
        this.setState({
          errorMsg:true,
          errorText:"Email id already in use"
        })

        return;
      }

      if(res.status==='200' || res.status===200){
        this.setState({
          errorMsg:true,
          errorText:"Thanks for registering with us"
        })

        setTimeout( () => {

        this.props.history.push('/');

        }, 2000);




      }


     


  })
  .catch(function(err) {
      console.log(err)
  });
    


     
=======
      alert("You have entered an invalid email address!");
      return;
    }

    if (pass === '' || pass == null) {
      alert("Please insert password");
      return;
    }


    this.setState({
      isLoaded: true,
      fullname: '',
      password: '',
      email: '',
      emailErrorMsg: false
    });

    axios.post('http://localhost/ReactApi/insert_data.php',
      {
        fullname: name,
        email: email,
        pass: pass
      }).then((response) => response).then((response) => {

        if (response.data.status === '300') {
          this.setState({
            emailErrorMsg: true,
            isLoaded: false
          })
          return;
        }

        if (response.data.status === '200') {
          this.setState({
            isLoaded: false
          })
          alert("Account Created Successfully");
          this.props.history.push('/');
        }

      }).catch((error) => {
        console.error("Error Founds In--------------" + error);
      });

      setTimeout( () => {
        this.setState({
          emailErrorMsg: false
        });
      }, 4000);
>>>>>>> 510930aa5e88d2501e749f331929a235bb732e71


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
<<<<<<< HEAD
              {this.state.errorMsg ?
                <div className="btn btn-danger">
                  {this.state.errorText}
=======
              {this.state.emailErrorMsg ?
                <div className="btn btn-danger">
                  Email id already in use
>>>>>>> 510930aa5e88d2501e749f331929a235bb732e71
            </div> : null}
            </center>

          </div>
          <div className="register-box-body">
            <p className="login-box-msg">Register a new membership</p>

            <div className="form-group has-feedback">
              <input type="text" className="form-control" id="" placeholder="Full name" name="fullname"
<<<<<<< HEAD
                onChange={this.changeNameHandler} 
=======
                onChange={this.changeNameHandler} value={this.state.fullname}
>>>>>>> 510930aa5e88d2501e749f331929a235bb732e71
              />
              <span className="glyphicon glyphicon-user form-control-feedback"></span>
            </div>
            <div className="form-group has-feedback">
              <input type="email" className="form-control" placeholder="Email" name="email"
<<<<<<< HEAD
                onChange={this.changeEmailHandler} 
=======
                onChange={this.changeEmailHandler} value={this.state.email}
>>>>>>> 510930aa5e88d2501e749f331929a235bb732e71
              />
              <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
            </div>
            <div className="form-group has-feedback">
              <input type="password" className="form-control" placeholder="Password" name="password"
<<<<<<< HEAD
                onChange={this.changePassHandler} 
=======
                onChange={this.changePassHandler} value={this.state.password}
>>>>>>> 510930aa5e88d2501e749f331929a235bb732e71
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







