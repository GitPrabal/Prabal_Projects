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
      successFlag:false,
      successText:'',
      textHead:'',
      errorFlag:false,
      errorText:'',
      loader:false
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

    var document_id = document.getElementsByTagName('select')[0].value;
    var requested_user_name = document.getElementsByTagName('select')[1].value;

    this.setState({
      loader:true
    })

    var data = {
      user_id : sessionStorage.getItem('myData'),
      document_id:document_id,
      requested_user_name:requested_user_name
    }

    fetch('http://test.reactapi.com/requestDocFromUser',{
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

        if( response.status == '200' || response.status === 200 ){
          this.setState({
            successFlag:true,
            textHead:'Request Recorded Successfully',
            successText:'Your Request Has been recorded and requested user has been notified with your request',
            loader:false,
            errorFlag:false,
          })

          setTimeout( ()=>{
            this.setState({
              successFlag:false,
              successText:'',
              errorFlag:false
            })
          },5000 )
        }

        if(response.status=='400' || response.status===400){
          this.setState({
            errorFlag:true,
            successFlag:false,
            textHead:'Duplicate Request Found',
            errorText:'It seems that you already made the request ! ',
            loader:false
          })
          setTimeout( ()=>{
            this.setState({
              successFlag:false,
              successText:'',
              errorFlag:false
            })
          },7000 )
        }
        else{
          this.setState({
            errorFlag:true,
            successFlag:false,
            textHead:'Request Recorded Successfully',
            errorText:'It seems that user has not uploaded the requested document which your looking for ! Still we have notified user with your request',
            loader:false
          })
          setTimeout( ()=>{
            this.setState({
              successFlag:false,
              successText:'',
              errorFlag:false
            })
          },7000 )
        }

      }).catch((err)=> {
    
        this.setState({
          loader:false,
          errorFlag:true,
          textHead:'Server Down !',
          errorText:"It Seems that server is not responding Please try after sometime"
        })
      });

}


  render() {
  
    var cat  = this.state.data.map( (category)=>{
               return <option value={category.id}>{category.document_name}</option>
    })

    var username  = this.state.userlist.map( (user,i)=>{
        return <option key={i} value={user.user_id}>Name:{user.fullname}&nbsp;&nbsp;&nbsp;&nbsp;Email:{user.email}</option>
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
                       {this.state.successFlag ?
                         <div class="callout callout-info">
                         <h4>{this.state.textHead}&nbsp;</h4>
                         <hr />
                         <p>{this.state.successText}.</p>
                         </div>
                         :null
                      }
                      </center>
                      <center>
                      {this.state.errorFlag ?
                         <div class="callout callout-warning">
                         <h4>{this.state.textHead}&nbsp;</h4>
                         <hr />
                         <p>{this.state.errorText}.</p>
                         </div>
                         :null
                      }
                      </center>
                      <h3 className="box-title">Make a Request For Document</h3>
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
                          {this.state.loader
                            ?<button disabled className="btn btn-info"  >Make a request</button>
                            :<button className="btn btn-info" onClick={this.makeRequest} >Make a request</button>
                          }
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