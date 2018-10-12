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

              <li className="dropdown user user-menu">
                <a className="dropdown-toggle" data-toggle="dropdown">
                  <img
                    src={require("../Admin/dist/img/user2-160x160.jpg")}
                    className="user-image"
                    alt=""
                  />
                  <span className="hidden-xs">{props.name}</span>
                </a>
                <ul className="dropdown-menu">
                  <li className="user-header">
                    <img
                      src={require("../Admin/dist/img/user2-160x160.jpg")}
                      className="img-circle"
                      alt=""
                    />
                    <p>
                      {props.name}
                      <small>Member since {props.reg_date}</small>
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
