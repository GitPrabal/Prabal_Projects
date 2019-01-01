import React, { Component } from 'react';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';


import Header from './Header';
import Sidebar from './Sidebar';

import '../Admin/bower_components/bootstrap/dist/css/bootstrap.min.css';
import '../Admin/bower_components/Ionicons/css/ionicons.min.css';
import '../Admin/bower_components/font-awesome/css/font-awesome.min.css';
import '../Admin/dist/css/AdminLTE.min.css';

import '../Admin/dist/css/skins/_all-skins.min.css';
import '../Admin/bower_components/jvectormap/jquery-jvectormap.css';
import '../Admin/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css';

class ShareDoc extends Component {

  constructor(props) {
    super(props)
    this.state = {
        userlist: [],
        approvedDocs:[],
        ipin:'',
        errorText:'',
        errorFlag:false,
        successFlag:false,
        successText:''
      }
  }


  componentDidMount = ()=>{
    NotificationManager.success('We are soon rolling out new feature where you can select multiple docs and also can share with multiple users', 'Close after 10 seconds', 10000);
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

    fetch('http://test.reactapi.com/getUserApprovedDocs',{
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
               approvedDocs :  response
            })
    })
  }


  changeIpinHandler = (event) =>{
    this.setState({
        ipin: event.target.value
      })
  }





  sendDocs = () =>{

    var document_list = document.getElementsByTagName('select')[0];
    var selected_document = [];
    var document_list_values = document_list && document_list.options;
    var opt;
    for (var i=0, iLen=document_list_values.length; i<iLen; i++) {
      opt = document_list_values[i];
  
      if (opt.selected) {
        selected_document.push(opt.value || opt.text);
      }
    }

    var username_list = document.getElementsByTagName('select')[1];
    var selected_users = [];
    var username_list_values = username_list && username_list.options;
    var opt1;
    for (var i=0, iLen=username_list_values.length; i<iLen; i++) {
      opt1 = username_list_values[i];
  
      if (opt1.selected) {
        selected_users.push(opt1.value || opt1.text);
      }
    }

    if(selected_document.length === 0 || selected_document.length === '0'){

        this.setState({
         errorFlag:true,
         errorText:'Please select document which you want to share'
        })
        setTimeout( () => {
            this.setState({
              errorFlag: false,
              errorText:''
            });
        }, 3000); 
        return;
}
    if(selected_users.length < 1 ){

        this.setState({
            errorFlag:true,
            errorText:'Please select user with you want to share'
           })
           setTimeout( () => {
               this.setState({
                 errorFlag: false,
                 errorText:''
               });
           }, 3000);
           return;
    }

    if(this.state.ipin === '' || this.state.ipin === null || this.state.ipin === 'undefined'){

        this.setState({
            errorFlag:true,
            errorText:'IPIN can not be blanked'
           })
           setTimeout( () => {
               this.setState({
                 errorFlag: false,
                 errorText:''
               });
           }, 3000);

           return;
    }

    var data = {
        user_id           : sessionStorage.getItem('myData'),
        ipin              : this.state.ipin,
        selected_users    : selected_users,
        selected_document : selected_document

    }

    fetch('http://test.reactapi.com/shareUserDocuments',{
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
      if(response.status=='200' || response.status===200){
        this.setState({
          successFlag:true,
          successText:'Your Document Has Been Shared'
        })

        setTimeout(() => {

          this.setState({
          successFlag:false,
          successText:''
        })

        window.location.reload();

        }, 3000);

        

      }
      if(response.status=='402' || response.status===402){
        this.setState({
          errorFlag:true,
          errorText:"Ipin is not valid",
          successFlag:false,
          successText:''
        })

        setTimeout(() => {
          
          this.setState({
            errorFlag:false,
            errorText:''
          })
          
        }, 2000);
      }

    })
}



  render() {

    var style = {
        width:'40%'
    }
    
    var full_name = sessionStorage.getItem('full_name');
    var reg_date = sessionStorage.getItem('reg_date');

    var username  = this.state.userlist.map( (user,i)=>{
        return <option key={i} value={user.user_id}>{user.fullname}</option>
       })

    var approvedDocs =  this.state.approvedDocs.map( (docs , i )=>{
        return <option key={i} value={docs.document_id}>{docs.document_name}</option>
    })   

    return (
      <div>
        <div>
          <div className="hold-transition skin-blue sidebar-mini">
            <div className="wrapper">
            <NotificationContainer/>
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

                     <div style={style}>
                     {this.state.successFlag ? 
                     <div className="alert alert-success">
                     <i class="fa fa-check" aria-hidden="true"></i>&nbsp;&nbsp;{this.state.successText}
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
                          <select className="form-control select2"  
                          data-placeholder="Select Document" id="docs_list" name="docsName[]"
                          >
                          {approvedDocs}
                          </select>
                          </div>

                          <div class="form-group">
                            <label>Select User</label>
                          </div>
                          <div class="form-group">
                          <select className="form-control select2" 
                          data-placeholder="Select User" id="user_list" name="userNameList[]"
                          >
                          {username}
                          </select>
                          </div>

                          <div className="form-group">
                          <label>Enter IPIN</label>
                          </div>

                          <div className="form-group">
                          <input type="password" class="form-control" id="ipin" placeholder="Enter IPIN" 
                          onChange={this.changeIpinHandler}
                          />
                          <a href="/set-ipin"><b>Forgot IPIN</b></a>
                          </div>
                          {this.state.ipin.length > 0 ? 
                          <div class="form-group">
                            <button  className="btn btn-info" onClick={this.sendDocs}>Send</button> 
                          </div>
                          :
                          <div class="form-group">
                            <button disabled className="btn btn-info">Send</button> 
                          </div>
                          }
                         
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
export default ShareDoc;