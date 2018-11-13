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

class SetIpin extends Component {

  constructor(props) {
    super(props)
    this.state = {
      user_ipin:[]     
      }
  }

  componentWillMount = () => {
    const result = sessionStorage.getItem('myData');
    if (result === '' || result == null) {
      sessionStorage.clear();
      this.props.history.push('/')
      return;
    }

    var data = {
        user_id : sessionStorage.getItem('myData')
    }

    fetch('http://test.reactapi.com/getUserIpin',{
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
      
    })
  }

  changeIpinHandler = (event) =>{
    this.setState({
        ipin: event.target.value
      })
  }








  render() {

    var style = {
        width:'40%'
    }

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
                    <li class="active">Send Docs</li>
                  </ol>
                </section>
                <section class="content">
                  <div class="box box-default">
                    <div class="box-body">
                    <div class="callout callout-info">
                 <h4>Shared Your Documents Any Where In Just One Click !</h4>
                 <hr />
                  <p>Now sharing your documents is very easy. You can select registered user to send docs .</p>
                 </div>
                
                 <center>
                     <div style={style}>
                     {this.state.errorFlag ? 
                     <div className="alert alert-danger">
                     {this.state.errorText}
                     </div> :null
                     }
                    </div> 
                 </center>


                      <div class="row">
                        <div class="col-md-6">

                         <div class="form-group">
                            <label>Select Docs To Share</label>
                          </div>

                          <div class="form-group">
                          <select className="form-control select2" multiple="multiple" 
                          data-placeholder="Select Document" id="docs_list" name="docsName[]"
                          >
                          
                          </select>
                          </div>

                          <div class="form-group">
                            <label>Select User</label>
                          </div>
                          <div class="form-group">
                          <select className="form-control select2" multiple="multiple"
                          data-placeholder="Select User" id="user_list" name="userNameList[]"
                          >
                          
                          </select>
                          </div>

                          <div className="form-group">
                          <label>Enter IPIN</label>
                          </div>

                          <div className="form-group">
                          <input type="password" class="form-control" id="ipin" placeholder="Enter IPIN" 
                          onChange={this.changeIpinHandler}
                          />
                          </div>

                          <div class="form-group">
                            <button  className="btn btn-info" onClick={this.sendDocs}>Send</button> 
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
export default SetIpin;