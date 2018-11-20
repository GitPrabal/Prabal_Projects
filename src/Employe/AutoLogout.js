import React, { Component } from 'react';

const MINUTES_UNITL_AUTO_LOGOUT = 1 // in mins
const CHECK_INTERVAL = 10000 // in ms
const STORE_KEY =  'lastAction';



class AutoLogout extends Component {

  constructor(props) {
    super(props);
    this.check();
    this.initListener();
    this.initInterval();
    }
    

  getLastAction() {
    return parseInt(localStorage.getItem(STORE_KEY));
    }
    setLastAction(lastAction: 10) {
    localStorage.setItem(STORE_KEY, lastAction.toString());
    }
    initListener() {
    document.body.addEventListener('click', () => this.reset());
    document.body.addEventListener('mouseover',()=> this.reset());
    document.body.addEventListener('mouseout',() => this.reset());
    document.body.addEventListener('keydown',() => this.reset());
    document.body.addEventListener('keyup',() => this.reset());
    document.body.addEventListener('keypress',() => this.reset());
    }
    reset() {
    this.setLastAction(Date.now());
    }
    initInterval() {
    setInterval(() => {
    this.check();
    }, CHECK_INTERVAL);
    }
    check() {
    const now = Date.now();
    const timeleft = this.getLastAction() + MINUTES_UNITL_AUTO_LOGOUT * 60 * 1000;
    const diff = timeleft - now;
    const isTimeout = diff < 0;
    if (isTimeout) {
    

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
    alert("No activity from last 5 minutes! Now worries you will be redirected to login page to start your session again");
     // Call here logout function, expire session
    localStorage.clear();
    window.location.reload();
    }
    }
    

  render() {
    return (
      <div>
     
        <div>
        
        </div>
     
      </div>
    );
  }

}

export default AutoLogout;
