import React, { Component } from "react";

import Header from "./Header";
import Sidebar from "./Sidebar";

import "../Admin/bower_components/bootstrap/dist/css/bootstrap.min.css";
import "../Admin/bower_components/Ionicons/css/ionicons.min.css";
import "../Admin/bower_components/font-awesome/css/font-awesome.min.css";
import "../Admin/dist/css/AdminLTE.min.css";

class ChangeLoginPass extends Component {

    constructor(props){
    super(props)
    this.state={
        errorFlag:false,
        errorText:null,
        oldPass:null,
        newPass:null,
        confirmPass:null,
        successFlag:false,
        successText:null,
        loader:false
    }       
}


  handleLogOut = () => {
    sessionStorage.clear();
    this.props.history.push("/");
};

componentWillMount = ()=>{

const result = sessionStorage.getItem('myData');

  if( result   === '' || result == null ){
    sessionStorage.clear();
    this.props.history.push('/')
    }
}


changeOldPassword = (event)=>{
    this.setState({
        oldPass:event.target.value
    })
}

changeNewPassword = (event)=>{
    this.setState({
        newPass:event.target.value
    })
}

changeConfirmPassword = (event)=>{
    this.setState({
        confirmPass:event.target.value
    })
}




  sendNewPassword = () =>{
  
   var oldPass = this.state.oldPass;
   var newPass = this.state.newPass;
   var confirmPass = this.state.confirmPass;

    if( oldPass == '' || oldPass == undefined){
        this.setState({
            errorFlag:true,
            errorText:'Please insert old password for the verification'
        })
        return;
    }

    if( newPass == '' || newPass == undefined){
        this.setState({
            errorFlag:true,
            errorText:'New Password can not be blanked'
        })
        return;
    }

    if( confirmPass == '' || confirmPass == undefined){
        this.setState({
            errorFlag:true,
            errorText:'Please confirm your password'
        })
        return;
    }

    if(newPass !== confirmPass){
        this.setState({
            errorFlag:true,
            errorText:'New Password and Confirm Password should be same'
        })
        return;
    }

    this.setState({
      loader:true
    })

    var user_id = sessionStorage.getItem('myData');
    var data = {
        user_id:user_id,
        oldPass:this.state.oldPass
    }

    var url = 'http://test.reactapi.com/checkUserPassword';

    fetch((url),{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
        })
       .then(res => res.json())
       .then(res => {
           if(res == 1 || res == '1'){

            var data = {
              user_id : sessionStorage.getItem('myData'),
              newPass : this.state.newPass,
            }

            fetch(('http://test.reactapi.com/changePassword'),{
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
              })
              .then( (res)=> res.json())
              .then( (res)=>{
                if(res.status == 200 || res.status == '200'){
                 this.setState({
                   successFlag:true,
                   successText:'Password Changed Successfully',
                   errorFlag:false,
                   loader:false,
                   errorText:null
                 }) 

                document.getElementById("oldPass").value='';
                document.getElementById("newPass").value='';
                document.getElementById("confirmPass").value='';

                }else{
                  this.setState({
                    errorFlag:true,
                    errorText:'Something wents wrong ! Please try again later',
                    successFlag:false,
                    successText:null,
                    loader:false
                  }) 
                }
              })

           }else{
             this.setState({
               errorFlag:true,
               loader:false,
               errorText:'Old password did not match'
             })
          document.getElementById("oldPass").value='';
          document.getElementById("newPass").value='';
          document.getElementById("confirmPass").value='';
           }

       })




  }




  render() {

    var full_name =  sessionStorage.getItem('full_name');
    var reg_date =  sessionStorage.getItem('reg_date');

    return (
      <div>
        <div class="hold-transition skin-blue sidebar-mini">
          <div class="wrapper">
            <Header click={this.handleLogOut} name={full_name} reg_date={reg_date} push={this.props.history}/>
            <Sidebar name={full_name}/>

   <div className="content-wrapper">
    <section className="content-header">
      <h1>Change Credentials</h1>
      <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
        <li><a href="#">Forms</a></li>
        <li className="active">Change Password</li>
      </ol>
    </section>

    <section className="content">
      <div className="row">
        <div className="col-md-12">
          <div className="box box-primary">
            <div className="box-header with-border">
              <h3 className="box-title">Change Password</h3>
            </div>
            <br />
            <center>

                { this.state.loader ? 
                <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
                :null
                }

                {this.state.errorFlag ? 
                <div className="btn btn-danger">{this.state.errorText}</div>
                :null
                }

                {this.state.successFlag ? 
                <div className="btn btn-success">{this.state.successText}</div>
                :null
                }

            </center>    
            <form role="form">
              <div className="box-body">
                <div className="form-group">
                  <label for="exampleInputEmail1">Old Password</label>
                  <input type="password" className="form-control" id="oldPass" placeholder="Old Password" 
                    onChange={this.changeOldPassword}
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">New Password</label>
                  <input type="password" className="form-control" id="newPass" placeholder="New Password" 
                   onChange={this.changeNewPassword}
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Confirm Password</label>
                  <input type="password" className="form-control" id="confirmPass" placeholder="Confirm Password" 
                   onChange={this.changeConfirmPassword}
                  />
                </div>
              </div>
              <div class="box-footer">
                <button type="button" className="btn btn-primary" onClick={this.sendNewPassword}>Change Password</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
            <footer class="main-footer">
              <div class="pull-right hidden-xs">
                <b>Version</b> 2.4.0
              </div>
              <strong>
                Copyright &copy; 2018-2019{" "}
                <a>Document Storage</a>.
              </strong>{" "}
              All rights reserved.
            </footer>

            <div class="control-sidebar-bg" />
          </div>
        </div>
      </div>
    );
  }
}
export default ChangeLoginPass;
