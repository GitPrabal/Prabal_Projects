import React from "react";

const Header = props => {
  return (
    <div>
      <header className="main-header">
        <a className="logo">
          <span className="logo-mini">
            <b>A</b>
            LT
          </span>
          <span className="logo-lg">
            <a href="/dashboard"><b>Dashboard</b></a>
          </span>
        </a>
        <nav className="navbar navbar-static-top">
          <a className="sidebar-toggle" data-toggle="push-menu" role="button">
            <span className="sr-only">Toggle navigation</span>
          </a>
          <div className="navbar-custom-menu">
            <ul className="nav navbar-nav">
              <li className="dropdown messages-menu">
                <ul className="dropdown-menu">
                  <li className="header">You have 4 messages</li>
                  <li>
                    <ul className="menu">
                      <li>
                        <a>
                          <div className="pull-left">
                            <img
                              src={require("../Admin/dist/img/user2-160x160.jpg")}
                              className="img-circle"
                              alt=""
                            />
                          </div>
                          <h4>
                            Support Team
                            <small>
                              <i className="fa fa-clock-o" /> 5 mins
                            </small>
                          </h4>
                          <p>Why not buy a new awesome theme?</p>
                        </a>
                      </li>

                      <li>
                        <a>
                          <div className="pull-left">
                            <img
                              src={require("../Admin/dist/img/user3-128x128.jpg")}
                              className="img-circle"
                              alt=""
                            />
                          </div>
                          <h4>
                            AdminLTE Design Team
                            <small>
                              <i className="fa fa-clock-o" /> 2 hours
                            </small>
                          </h4>
                          <p>Why not buy a new awesome theme?</p>
                        </a>
                      </li>
                      <li>
                        <a>
                          <div className="pull-left">
                            <img
                              src="dist/img/user4-128x128.jpg"
                              className="img-circle"
                              alt=""
                            />
                          </div>
                          <h4>
                            Developers
                            <small>
                              <i className="fa fa-clock-o" /> Today
                            </small>
                          </h4>
                          <p>Why not buy a new awesome theme?</p>
                        </a>
                      </li>
                      <li>
                        <a>
                          <div className="pull-left">
                            <img
                              src="dist/img/user3-128x128.jpg"
                              className="img-circle"
                              alt=""
                            />
                          </div>
                          <h4>
                            Sales Department
                            <small>
                              <i className="fa fa-clock-o" /> Yesterday
                            </small>
                          </h4>
                          <p>Why not buy a new awesome theme?</p>
                        </a>
                      </li>
                      <li>
                        <a>
                          <div className="pull-left">
                            <img
                              src="dist/img/user4-128x128.jpg"
                              className="img-circle"
                              alt=""
                            />
                          </div>
                          <h4>
                            Reviewers
                            <small>
                              <i className="fa fa-clock-o" /> 2 days
                            </small>
                          </h4>
                          <p>Why not buy a new awesome theme?</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="footer">
                    <a>See All Messages</a>
                  </li>
                </ul>
              </li>

              <li className="dropdown user user-menu">
                <a className="dropdown-toggle" data-toggle="dropdown">
                  <img
                    src={require("../Admin/dist/img/user2-160x160.jpg")}
                    className="user-image"
                    alt=""
                  />
                  <span className="hidden-xs">Alexander Pierce</span>
                </a>
                <ul className="dropdown-menu">
                  <li className="user-header">
                    <img
                      src={require("../Admin/dist/img/user2-160x160.jpg")}
                      className="img-circle"
                      alt=""
                    />
                    <p>
                      Alexander Pierce - Web Developer
                      <small>Member since Nov. 2012</small>
                    </p>
                  </li>

                  <li className="user-footer">
                    <div className="pull-left">
                      <a href = "/user-profile" className="btn btn-default btn-flat">Profile</a>
                    </div>
                    <div className="pull-right">
                      <a
                        className="btn btn-default btn-flat"
                        onClick={props.click}
                      >
                        Sign out
                      </a>
                    </div>
                  </li>
                </ul>
              </li>

              <li>
                <a data-toggle="control-sidebar">
                  <i className="fa fa-gears" />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
