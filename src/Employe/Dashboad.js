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
import Dashboardcards from './Dashboardcards';
import { userInfo } from 'os';

class Dashboard extends Component {
  

componentWillMount = ()=>{

    const result = sessionStorage.getItem('myData');
    if( result   === '' || result == null ){
      this.props.history.push('/')
    }


    fetch( ('http://localhost/ReactApi/checkUserDetails.php?user_id='+result) )
    .then( res => res.json())
    .then( (res)=> {
      sessionStorage.setItem('userData',res);
     })
     
     


 
    
    

}


handleLogOut = () =>{
  sessionStorage.clear();
  this.props.history.push('/');
}


  render() {
    var userData =  sessionStorage.getItem('userData');
    return (
      <div>
        <div className="hold-transition skin-blue sidebar-mini">
          <div className="wrapper">
            <Header click={this.handleLogOut}/>
            <Sidebar />
            <div className="content-wrapper">
              <section className="content-header">
                <h1>
                {console.log(userData)}
                  Dashboard
                 <small>Control panel</small>
                </h1>
                <ol className="breadcrumb">
                  <li><a ><i className="fa fa-dashboard"></i> Home</a></li>
                  <li className="active">Dashboard</li>
                </ol>
              </section>
                <Dashboardcards />
            </div>

            <footer className="main-footer">
              <div className="pull-right hidden-xs">
                <b>Version</b> 2.4.0
              </div>
              <strong>Copyright &copy; 2018-2019 <a>Smart Documents</a>.</strong> All rights
              reserved.
            </footer>

            <div className="control-sidebar-bg"></div>
          </div>
        </div>
      </div>
    )

  }

}
export default Dashboard;