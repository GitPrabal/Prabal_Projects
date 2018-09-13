import React from 'react';
import '../Person/css/login.css';

const Loginbody = (props) =>{

  return (
    <div>
      <center><h2>Login Form</h2></center>

      <div className="container">
        <label htmlFor="uname"><b>Username</b></label>
        <input type="text" placeholder="Enter Username" name="uname" onChange={props.onChangeEmail} required />

        <label htmlFor="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" onChange={props.onChangePass}   required />
        <button type="submit" onClick={props.loginUser}>Login</button>
      </div>

      <div className="width20">
      <button onClick={props.click}>See Users Lists</button>
      </div>

      <div className="container" >
        <span className="psw"><a href="/register">Register Your Self</a></span>
      </div>
    </div>
  );
}

export default Loginbody;