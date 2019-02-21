import React,{Component} from "react";

class Header extends Component{

  handleLogOut = () =>{
  var user_id = new Buffer(sessionStorage.getItem('myData')).toString('base64');

  var data = {
    user_id : user_id
}


  fetch(('http://test.reactapi.com/userlogout'),{
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then( (res) => res.json() )
  .then((res)=>{   })
    sessionStorage.clear();
    this.props.push.push('/');
  }
  

render(){

  const style = {

    cursor:'pointer'
  }

  return (
    <div>
      <header className="main-header">
        <a className="logo" href="/dashboard">
          <span className="logo-mini">
            <b>A</b>
            LT
          </span>
          <span className="logo-lg">
            <a ><b>Dashboard</b></a>
          </span>
        </a>
        <nav className="navbar navbar-static-top">
          <a className="sidebar-toggle" data-toggle="push-menu" role="button">
            <span className="sr-only">Toggle navigation</span>
          </a>
          <div className="navbar-custom-menu">
            <ul className="nav navbar-nav">
              <li className="dropdown user user-menu">
                <a className="dropdown-toggle" data-toggle="dropdown" style={style}>
                  <img
                    src={require("../Admin/dist/img/user2-160x160.jpg")}
                    className="user-image"
                    alt=""
                  />
                  <span className="hidden-xs">{this.props.name}</span>
                  &nbsp;&nbsp;
                  <i className="fa fa-caret-down" aria-hidden="true"></i>
                </a>
                <ul className="dropdown-menu">
                  <li className="user-header">
                    <img
                      src={require("../Admin/dist/img/user2-160x160.jpg")}
                      className="img-circle"
                      alt=""
                    />
                    <p>
                      {this.props.name}
                      <small>Member since {this.props.reg_date}</small>
                    </p>
                  </li>
                  <li className="user-footer">
                    <div className="pull-left">
                      <a href = "/user-profile" className="btn btn-default btn-flat">Profile</a>
                    </div>
                    <div className="pull-right">
                      <a
                        className="btn btn-default btn-flat"
                        onClick={this.handleLogOut}
                      >
                        Sign out
                      </a>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}
};

export default Header;
