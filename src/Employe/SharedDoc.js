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

import '../Employe/css/common.css';



class SharedDoc extends Component {
  
  constructor(props){
    super(props)
    this.state = [{
      userdetails:[]
    }]
  }

componentWillMount = ()=>{
    const result = sessionStorage.getItem('myData');
    if( result   === '' || result == null ){
      this.props.history.push('/')
}

}

  render() {

    var full_name =  sessionStorage.getItem('full_name');
    var reg_date =  sessionStorage.getItem('reg_date');

    return (
      <div>
        <div className="hold-transition skin-blue sidebar-mini">
          <div className="wrapper">
            <Header click={this.handleLogOut} name={full_name} reg_date={reg_date} push={this.props.history}/>
            <Sidebar name={full_name} />
            <div className="content-wrapper">
              <section className="content-header">
                <div class="callout callout-info">
                 <h4>Shared Documents !</h4>
                 <hr />
                  <p>This section shows all documents / certificates you have shared with others via email. .</p>
         </div>

        <div class="box box-default">
          <div class="box-header with-border">
            <center><h3 class="box-title font-bold">Nothing shared yet</h3></center>
          </div>
          <div class="box-body">
             <center>Documents shared by you will show up here</center>
          </div>
        </div>
       </section>
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
export default SharedDoc;