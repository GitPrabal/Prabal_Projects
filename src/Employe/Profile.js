import React, { Component } from "react";

import Header from "./Header";
import Sidebar from "./Sidebar";

import "../Admin/bower_components/bootstrap/dist/css/bootstrap.min.css";
import "../Admin/bower_components/Ionicons/css/ionicons.min.css";
import "../Admin/bower_components/font-awesome/css/font-awesome.min.css";
import "../Admin/dist/css/AdminLTE.min.css";

class Profile extends Component {
  constructor(props) {
    super(props);
  }

  handleLogOut = () => {
    sessionStorage.clear();
    this.props.history.push("/");
  };

  fileChangedHandler = (event) => {

    this.setState({selectedFile: event.target.files[0]})
  }

  render() {
    return (
      <div>
        <div class="hold-transition skin-blue sidebar-mini">
          <div class="wrapper">
            <Header click={this.handleLogOut} />
            <Sidebar />
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
                          Nina Mcintire
                        </h3>
                        <p class="text-muted text-center">Software Engineer</p>
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
                      <div class="tab-content">
                        <div class="active tab-pane" id="settings">
                          <div class="form-horizontal">
                            <div class="form-group">
                              <label
                                for="inputName"
                                class="col-sm-2 control-label"
                              >
                                Name
                              </label>

                              <div class="col-sm-10">
                                <input
                                  type="email"
                                  class="form-control"
                                  id="inputName"
                                  placeholder="Name"
                                />
                              </div>
                            </div>
                            <div class="form-group">
                              <label
                                htmlFor="user-email"
                                class="col-sm-2 control-label"
                              >
                                Email
                              </label>

                              <div class="col-sm-10">
                                <input
                                  type="email"
                                  class="form-control"
                                  id="inputEmail"
                                  placeholder="Email"
                                />
                              </div>
                            </div>
                            
                            <div class="form-group">
                              <label
                                htmlFor="inputExperience"
                                class="col-sm-2 control-label"
                              >
                                Address
                              </label>

                              <div class="col-sm-10">
                                <textarea name="address"
                                  class="form-control"
                                  id="inputExperience"
                                  placeholder="Address"
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
                                />
                              </div>
                            </div>
                            <div class="form-group">
                              <label
                                for="inputSkills"
                                class="col-sm-2 control-label"
                              >
                                Profile Pic
                              </label>

                              <div class="col-sm-10">
                                <input
                                  type="file"
                                  class="form-control"
                                  onChange={this.fileChangedHandler}
                                />
                              </div>
                            </div>
                            <div class="form-group">
                              <div class="col-sm-offset-2 col-sm-10">
                                <div class="checkbox">
                                  <label>
                                    For Change Password {" "}
                                    <a>click here</a>
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div class="form-group">
                              <div class="col-sm-offset-2 col-sm-10">
                                <button type="type" class="btn btn-danger">
                                  Submit
                                </button>
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
