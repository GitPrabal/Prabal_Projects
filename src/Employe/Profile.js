import React, { Component } from "react";

import Header from "./Header";
import Sidebar from "./Sidebar";

import "../Admin/bower_components/bootstrap/dist/css/bootstrap.min.css";
import "../Admin/bower_components/Ionicons/css/ionicons.min.css";
import "../Admin/bower_components/font-awesome/css/font-awesome.min.css";
import "../Admin/dist/css/AdminLTE.min.css";

class Profile extends Component {

  state = {
     details:[],
     errorFlag:false,
     fullname:null,
     email:null,
     mobile_no:null,
     selectedFile:null
  }


  handleLogOut = () => {
    sessionStorage.clear();
    this.props.history.push("/");
};

componentWillMount = ()=>{
const result = sessionStorage.getItem('myData');
sessionStorage.setItem('changePassToken',result); 

  if( result   === '' || result == null ){
    this.props.history.push('/')
}
}

componentDidMount = () =>{

  const user_id = sessionStorage.getItem('myData');

  var data = {
    user_id :user_id
  }

   fetch('http://test.reactapi.com/checkUserDetails',{
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
    })
    .then( (response) => response.json() )
    .then( (res)=>{

          this.setState({
            fullname:res.fullname,
            email:res.email,
            mobile_no:res.mobile_no
          })
    })
    .catch((err)=> {
    this.setState({
      errorFlag:true,
      errorText:"It Seems that server is not responding Please try after sometime"
    })
   });
}


  fileChangedHandler = (event) => {
    this.setState({ selectedFile: event.target.files[0] })
    if( event.target.files[0] === undefined){
      this.setState({
        imagePreviewUrl:''
      })
      return;    
    }

    let reader = new FileReader();
    let file = event.target.files[0];

    var fileName = file.name;

    this.setState({
      imagename: file.name
    })


    var validExt = ["jpg", "jpeg", "png", "PNG", "JPEG", "JPG"];
    var fileExtension = fileName.substr(fileName.lastIndexOf('.') + 1);
    var isValidFile = validExt.indexOf(fileExtension) > -1;

    if (!(isValidFile)) {
      this.setState({
        errorFlag: true,
        errorText: 'Please choose valid image',
        hideButton: true
      })

      setTimeout(() => {
        this.setState({
          errorFlag: false,
          errorText: ''
        });
      }, 3000);
      return;

    } else {
      this.setState({
        hideButton: false
      })
    }

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }
    reader.readAsDataURL(file)
  }




  render() {

    var full_name =  sessionStorage.getItem('full_name');
    var reg_date =  sessionStorage.getItem('reg_date');

    let { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }

    return (
      <div>
        <div class="hold-transition skin-blue sidebar-mini">
          <div class="wrapper">
            <Header click={this.handleLogOut} name={full_name} reg_date={reg_date} push={this.props.history}/>
            <Sidebar name={full_name}/>
            
            {this.state.details}
            <div class="content-wrapper">
              <section class="content-header">
                <h1>User Profile</h1>
                <ol class="breadcrumb">
                  <li>
                    <a>
                      <i class="fa fa-dashboard" /> Home
                    </a>
                  </li>
                  <li class="active">User profile</li>
                </ol>
              </section>
              <section class="content">
                <div class="row">
                  <div class="col-md-3">
                    <div class="box box-primary">
                      <div class="box-body box-profile">
                        <img
                          class="profile-user-img img-responsive img-circle"
                          src={require('../Admin/dist/img/user4-128x128.jpg')}
                          alt=""
                        />
                        <h3 class="profile-username text-center">
                          {full_name}
                        </h3>
                        <p class="text-muted text-center">Member Since {reg_date}</p>
                        <center>
                        <span className="btn btn-info btn-file">
                           Upload Pic <input type="file" />
                        </span>
                        </center>
                      </div>
                    </div>
                  </div>

                  

                  <div class="col-md-9">
                    <div class="nav-tabs-custom">
                      <ul class="nav nav-tabs">
                        <li className="active">
                          <a href="#settings" data-toggle="tab">
                            Profile Details
                          </a>
                        </li>
                      </ul>
                      <center>
                      <div id="errorMsg1">
              {this.state.errorFlag ?
                <div className="btn btn-danger">
                  {this.state.errorText}
                  </div>
                  :null}
            </div></center>
                      <div class="tab-content">
                        <div class="active tab-pane" id="settings">
                          <div class="form-horizontal">
                            <div class="form-group">
                              <label
                                htmlFor="inputName"
                                class="col-sm-2 control-label"
                              >
                                Name
                              </label>

                              <div class="col-sm-10">
                                <input
                                  type        = "email"
                                  className   = "form-control"
                                  id          = "inputName"
                                  placeholder = "Name"
                                  value={this.state.fullname}
                                />
                              </div>
                            </div>
                            <div class="form-group">
                              <label
                                htmlFor="user-email"
                                className="col-sm-2 control-label"
                              >
                                Email
                              </label>

                              <div class="col-sm-10">
                                <input
                                  type="email"
                                  className="form-control"
                                  id="inputEmail"
                                  placeholder="Email"
                                  value={this.state.email}
                                />
                              </div>
                            </div>
                            <div class="form-group">
                              <label
                                for="inputSkills"
                                class="col-sm-2 control-label"
                              >
                                Phone No
                              </label>

                              <div class="col-sm-10">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="inputSkills"
                                  placeholder="Mobile No"
                                  value={this.state.mobile_no}
                                />
                              </div>
                            </div>
                            <div class="form-group">
                              <div class="col-sm-offset-2 col-sm-10">
                                <div class="checkbox">
                                  <label>
                                    For Change Login Password {" "}
                                    <a href="/change-pass">click here</a>
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div class="form-group">
                              <div class="col-sm-offset-2 col-sm-10">
                              {this.state.errorFlag ? 
                                <button disabled type="type" class="btn btn-danger">Submit</button>
                                :<button type="type" class="btn btn-danger">Submit</button>
                               }
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
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
                Copyright &copy; 2014-2016{" "}
                <a href="https://adminlte.io">Almsaeed Studio</a>.
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
export default Profile;
