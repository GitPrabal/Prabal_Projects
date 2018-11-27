import React, { Component } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

import '../Admin/bower_components/bootstrap/dist/css/bootstrap.min.css';
import '../Admin/bower_components/Ionicons/css/ionicons.min.css';
import '../Admin/bower_components/font-awesome/css/font-awesome.min.css';
import '../Admin/dist/css/AdminLTE.min.css';

import '../Admin/dist/css/skins/_all-skins.min.css';
import '../Admin/bower_components/jvectormap/jquery-jvectormap.css';
import '../Admin/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css';

class SetIpin extends Component {

  constructor(props) {
    super(props)
    this.state = {
      confirm_ipin:'',
      ipin:'',
      errorFlag:false,
      otp:false,
      successFlag:false,
      successText:'',
      secondsRemaining:0,
      setOtp:''
      }
  }

  componentWillMount = () => {
    const result = sessionStorage.getItem('myData');
    if (result === '' || result == null) {
      sessionStorage.clear();
      this.props.history.push('/')
      return;
    }
  }

  changeIpinHandler = (event) =>{
    this.setState({
        ipin: event.target.value
      })
  }

  changeConfirmIpinHandler = (event) =>{
    this.setState({
        confirm_ipin: event.target.value
    })
  }

  tick = () => {
    this.setState({secondsRemaining: this.state.secondsRemaining - 1});
    if (this.state.secondsRemaining <= 0) {
      //  sessionStorage.clear();
      //  this.props.history.push('/');
        clearInterval(this.interval);
    }
  }


  setIpin = ()=>{

    if(this.state.ipin.length == 0 || this.state.confirm_ipin.length == 0){
        this.setState({
         errorFlag:true,
         errorText:'Please Set Ipin for both fields'
        })

        setTimeout( () => {
            this.setState({
                errorFlag:false,
                errorText:''
               })
            }, 3000);

            return;
    }

    if(this.state.ipin!= this.state.confirm_ipin ){
        this.setState({
            errorFlag:true,
            errorText:'Ipin are not same'
        })

        setTimeout( () => {
            this.setState({
                errorFlag:false,
                errorText:''
               })
            }, 3000);

            return;
    }

    this.setState({
     otp:true
    })

    this.setState({ secondsRemaining: 30 });
    this.interval = setInterval(this.tick, 1000);



var data = {
    user_id : sessionStorage.getItem('myData'),
    otp     : Math.floor(1000 + Math.random() * 9000)
}

fetch('http://test.reactapi.com/sendOtp',{
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
    })
    .then( (response) => response.json())
    .then( (response)=> (response))
    .then( (response) =>{
        if(response.status === 200 || response.status == '200'){
            this.setState({
                successFlag:true,
                successText:'A 4 digit OTP is send to your registered mobile number'
            })
        }
    })
}

verifyOtp = () =>{
var data = {
    otp  : this.state.setOtp,
    ipin : this.state.ipin,
    user_id : sessionStorage.getItem('myData')
}

fetch('http://test.reactapi.com/setUserIpin',{
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
    })
    .then( (response) => response.json())
    .then( (response)=> (response))
    .then( (response) =>{
        if(response.status === 200 || response.status == '200'){
            this.setState({
                successFlag:true,
                successText:'Ipin Set Successfully, Redirecting To Dashboard',
            })

            setTimeout( ()=>{
                this.props.history.push('/dashboard')
             },2000 )

        }else{
            this.setState({
                errorFlag:true,
                errorText:'OTP is not valid please try to again !',
            })
        }
    })

}

changeOtpHandler = (event) => {
    this.setState({
        setOtp:event.target.value
    })
}

  render() {

    var style = {
        width:'40%'
    }


    var classes = [];

    if(this.state.otp){
        classes.push('show-otp hide-pin-div');
    }else{
        classes.push('hide-otp');
    }

    var full_name = sessionStorage.getItem('full_name');
    var reg_date = sessionStorage.getItem('reg_date');

    return (
      <div>
        <div>
          <div className="hold-transition skin-blue sidebar-mini">
            <div className="wrapper">
              <Header click={this.handleLogOut} name={full_name} reg_date={reg_date} push={this.props.history} />
              <Sidebar name={full_name} />
              <div class="content-wrapper">
                <section class="content-header">
                  <h1>
                    <small></small>
                  </h1>
                  <ol class="breadcrumb">
                    <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
                    <li><a href="#">Forms</a></li>
                    <li class="active">Send Docs</li>
                  </ol>
                </section>
                <section class="content">
                  <div class="box box-default">
                    <div class="box-body">
                
                 <center>
                     <div style={style}>
                     {this.state.errorFlag ? 
                     <div className="alert alert-danger fontBold">
                     {this.state.errorText}
                     </div> :null
                     }
                    </div> 
                 </center>


                      <div className={"row" +  classes}>
                        <div className="col-md-6">
                          <div className="form-group">
                          <label>Enter New IPIN</label>
                          </div>

                          <div className="form-group">
                          <input type="password" class="form-control" id="ipin" placeholder="Enter IPIN" 
                          onChange={this.changeIpinHandler}
                          />
                          </div>

                          <div className="form-group">
                          <label>Confirm IPIN</label>
                          </div>

                          <div className="form-group">
                          <input type="password" class="form-control" id="ipin" placeholder="Confirm IPIN" 
                          onChange={this.changeConfirmIpinHandler}
                          />
                          </div>

                          <div class="form-group">
                            <button  className="btn btn-info" onClick={this.setIpin}>Send</button>
                          </div>
                        </div>
                      </div>

                      <div className={"row " + classes}>
                      <center>
                      { this.state.successFlag ? 
                        
                        <div className="btn btn-success">
                            <i class="fa fa-check" aria-hidden="true"></i>&nbsp;&nbsp;
                            {this.state.successText}<br />
                        </div>
                      : null }
                      </center>
                        <div className="col-md-6">
                          <div className="form-group">
                          <label>Enter OTP</label>
                          </div>
                          
                          <div className="form-group">
                          <input type="text" class="form-control" id="otp" placeholder="Enter OTP" 
                          onChange={this.changeOtpHandler}
                          />
                          </div>
                          
                          <p>Enter OTP In {this.state.secondsRemaining} seconds.</p>
                          <p>Otherwise you will be redirected to login page for security reasons</p>
                          <div class="form-group">
                            {this.state.verifyOtpButton ? 
                            <button disabled className="btn btn-info">Verify OTP</button>
                            : <button  className="btn btn-info" onClick={this.verifyOtp}>Verify OTP</button>
                            }
                          </div>
                        </div>
                      </div>


                    </div>
                    <div className="box-footer">
                      Visit <a href="#">Digital Documents Storage </a> for more examples and information about
                      the plugin.
                    </div>
                  </div>

                </section>
              </div>
            </div>
          </div>
        </div>
      </div>

    )

  }

}
export default SetIpin;