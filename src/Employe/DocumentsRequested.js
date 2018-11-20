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



class DocumentsRequested extends Component {
  
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
    
    var user_id = sessionStorage.getItem('myData');
    user_id     = new Buffer(user_id).toString('base64');

    var url = 'http://test.reactapi.com/requestedDocument/'+user_id;

    fetch(url)
    .then( (response) => response.json())
    .then( (response)=> (response))
    .then( (response) =>{
        console.log(response);
            this.setState({
               userlist :  response
            })
    })
    

}

  render() {
    
    var full_name =  sessionStorage.getItem('full_name');
    var reg_date =  sessionStorage.getItem('reg_date');

    console.log(this.state.userlist);

    var documents  = this.state.userlist.map((category,i) => {
        return <tr key={i}>
          <td value={i}>{category.fullname}</td>
          <td value={i}>
          {category.document_name}
          </td>
          </tr>
       })


  

   

    return (
      <div>
        
        <div className="hold-transition skin-blue sidebar-mini">
          <div className="wrapper">
          
            <Header click={this.handleLogOut} name={full_name} reg_date={reg_date} push={this.props.history}/>
            <Sidebar name={full_name} />
            <div className="content-wrapper">
              <section className="content-header">
                <h1>
                  Dashboard
                 <small>Control panel</small>
                </h1>
                <ol className="breadcrumb">
                  <li><a ><i className="fa fa-dashboard"></i> Home</a></li>
                  <li className="active">Dashboard</li>
                </ol>
              </section>
              <section className="content">
      <div className="row">
        <div className="col-xs-12">
          <div className="box">
            <div className="box-header">
              <h3 className="box-title">
              List Of Documents Requested By Other Users
              </h3>
            </div>
            <div class="box-body">
              <table id="example1" class="table table-bordered table-striped">
                <thead>
                <tr>
                  <th>Types of Documents</th>
                  <th>Image</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
                </thead>
                <tbody>
                
                </tbody>
              </table>
            </div>
          
          </div>
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
export default DocumentsRequested;