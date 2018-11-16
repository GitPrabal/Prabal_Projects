import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import Sidebar from './Sidebar';

import '../Admin/bower_components/bootstrap/dist/css/bootstrap.min.css';
import '../Admin/bower_components/Ionicons/css/ionicons.min.css';
import '../Admin/bower_components/font-awesome/css/font-awesome.min.css';
import '../Admin/dist/css/AdminLTE.min.css';

import '../Admin/dist/css/skins/_all-skins.min.css';
import '../Admin/bower_components/jvectormap/jquery-jvectormap.css';
import '../Admin/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css';

class RequestForDoc extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: [],
      userlist: [],
    }
  }


  componentWillMount = () => {
    const result = sessionStorage.getItem('myData');
    if (result === '' || result == null) {
      sessionStorage.clear();
      this.props.history.push('/')
      return;
    }
  }

  componentDidMount() {

    var data = {
        user_id : sessionStorage.getItem('myData')
    }

    fetch('http://test.reactapi.com/getCategory')
    .then( (response) => response.json())
          .then( (response) => (response))
          .then( (response) =>{
            this.setState({
              data :  response
            })
    })

    fetch('http://test.reactapi.com/getAllUser',{
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
        })
        .then( (response) => response.json())
        .then( (response)=> (response))
        .then( (response) =>{
                this.setState({
                   userlist :  response
                })
        })
}

makeRequest = ()=>{
    var document_name = document.getElementsByTagName('select')[0].value;
    alert(document_name);
}


  render() {
  
    var cat  = this.state.data.map( (category)=>{
               return <option value={category.id}>{category.document_name}</option>
    })

    var username  = this.state.userlist.map( (user,i)=>{
        return <option key={i} value={user.user_id}>{user.fullname}</option>
       })


    var full_name = sessionStorage.getItem('full_name');
    var reg_date = sessionStorage.getItem('reg_date');

    return (
      <div>
        <div>
          <div className="hold-transition skin-blue sidebar-mini">
            <div className="wrapper">
              <Header click={this.handleLogOut} name={full_name} reg_date={reg_date} push={this.props.history} />
              <Sidebar name={full_name} />
              <div class="content-wrapper">
                <section class="content-header">
                  <h1>
                    <small></small>
                  </h1>
                  <ol class="breadcrumb">
                    <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
                    <li><a href="#">Forms</a></li>
                    <li class="active">Upload Docs</li>
                  </ol>
                </section>
                <section class="content">
                  <div class="box box-default">
                    <div class="box-header with-border">
                    <center>
                        {this.state.loader ?
                          <div className="">
                            <i class="fa fa-spinner fa-spin" ></i>
                          </div>
                          : null}
                      </center>
                      <center>
                       {this.state.showHtml}
                      </center>
                      <center>
                        {this.state.errorFlag ?
                          <div className="btn btn-danger">
                            {this.state.errorText}
                          </div> : null}
                      </center>
                      <h3 className="box-title">Choose Documents To Upload</h3>
                    </div>
                    <div className="box-body">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Select</label>
                            <select className="form-control select2" name="document_name" id="document_name">
                           {cat}
                            </select>
                          </div>
                          <div className="form-group">
                            <label>Select User</label>
                          </div>
                          <div class="form-group">
                          <select className="form-control select2" 
                          data-placeholder="Select User" id="user_list" name="userNameList[]"
                          >
                          {username}
                          </select>
                          </div>
                          
                          <div class="form-group">
                              <button className="btn btn-info" onClick={this.makeRequest} >Make a request</button>
                          </div>
                         
                        </div>
                      </div>
                    </div>
                    <div class="box-footer">
                      Visit <a href="#">Digital Documents Storage </a> for more examples and information about
                      the plugin.
        </div>
                  </div>

                </section>
              </div>
            </div>
          </div>
        </div>
      </div>

    )

  }

}
export default RequestForDoc;