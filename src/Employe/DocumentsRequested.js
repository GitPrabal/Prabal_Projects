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
    this.state = {
      userdetails:[],
      loader:false,
      errorFlag:false,
      errorText:null,
      successFlag:false,
      successText:null,
      loader:false,
      blocking:false,
      sendOption:null,
      documentId:null,
      userIpin:null,
      invalidUserIpinFlag:false,
      invalidUserIpinText:null,

    }
  }

 
   componentWillMount = () =>{
    var user_id = sessionStorage.getItem('myData');
    user_id     = new Buffer(user_id).toString('base64');
    var data = {
        user_id:user_id
    }

    var url = 'http://test.reactapi.com/requestedDocument';
    fetch((url),{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
        })
       .then(res => res.json())
       .then(res => {
         this.setState({
             userdetails:res
         })
       })
  }


  setDocumentId = (id) =>{

    this.setState({
      documentId:id
    })

}


changeUserIpinHandler = (event)=>{
  
  this.setState({
    userIpin:event.target.value
  })
}

verifyIpin = () =>{

  var url = 'http://test.reactapi.com/verifyUserIpin';  
  var data = {
    user_id:sessionStorage.getItem('myData'),
    ipin:this.state.userIpin
  }
  fetch((url),{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
    })
    .then( (res)=>res.json())
    .then( (res)=>{
      if( res.status=='200' || res.status === 200){
        document.getElementById("hidePopUpBtn").click();
        this.sendRequestedDocViaEmailToUser(data);
      }else{
         this.setState({
          invalidUserIpinFlag:true,
          invalidUserIpinText:'Ipin is not valid'
         })

         setTimeout( () => {

          document.getElementById("hidePopUpBtn").click();
          document.getElementById('userpin').value='';

          this.setState({
            userIpin:'',
            invalidUserIpinFlag:false
          })

         }, 3000);
        return;

      }
    })

}

  sendRequestedDocViaEmailToUser = () => {


    var url = 'http://test.reactapi.com/sendRequestedDocViaEmailToUser';

    var data = {
      id:this.state.documentId,
      user_id:sessionStorage.getItem('myData')
    }

    this.setState({
      loader:true,
      blocking:true
    })
    
    fetch((url),{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
        })
        .then( (res)=>res.json())
        .then( (res)=>{

          this.setState({
            loader:false
          })

          if( res.status==404 || res.status == '404'){
            this.setState({
              errorFlag:true,
              errorText:<div class="callout callout-warning">
                        <h4>Document Not Found ?</h4>
                        <hr />
                        <p>It seems that you have not uploaded your document.No worries you can <a href="/upload-docs">Click Here</a>  to upload in just single click</p>
                        </div>
            })
          }

          if( res.status == 200 || res.status == '200'){

            this.setState({
              errorFlag:true,
              errorText:<div class="callout callout-success">
                        <h5><i className="fa fa-check" aria-hidden="true"></i>&nbsp;&nbsp;
                          Document Sent Successfully !</h5>
                        <hr />
                        <p>Now you can keep track of your all documents at <a href="/share">Shared Documents</a> Section</p>
                        </div>
            })

            setTimeout( () => {
              this.setState({
                successFlag:false,
                successText:null
              })
              window.location.reload();
            }, 5000);
          }
        })
  }

  render() {
    
    var full_name =  sessionStorage.getItem('full_name');
    var reg_date =  sessionStorage.getItem('reg_date');

    var docs = this.state.userdetails;

    if(this.state.userdetails.length == 0 || this.state.userdetails.length == undefined){
    
    }else{
    var docsList = docs.map( (docs,i)=>{
        return <tr key={i}><td>{docs.fullname}</td>
                   <td>{docs.document_name}</td>
                   <td>{docs.description}</td>
                   <td>{docs.requested_date}</td>
                   <td>{docs.requested_time}</td>
                   <td>{ docs.status == 0 ? 'Pending' : 'Sent' }</td>
                   <td>{ docs.status == 1 ? 
                   <button className="btn btn-info sendDoc" data-toggle="modal" data-target="#myModal" onClick={() => this.setDocumentId(docs.id)}>Send Again</button>
                   :
                   this.state.blocking ? 
                   <button disabled className="btn btn-success sendDoc" >Send</button>
                   :   
                   <button className="btn btn-success sendDoc" data-toggle="modal" data-target="#myModal" onClick={() => this.setDocumentId(docs.id)}>Send</button>
                   }
                   </td>
                   
               </tr>
    })

    }    



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
              <br />
              <br />
              { this.state.errorFlag ?   
              <div className="alert-alert-warning">
               <center>{this.state.errorText}</center>    
              </div>
              : null
              }

             { this.state.successFlag ?   
              <div className="alert-alert-success">
               <center>{this.state.successText}</center>    
              </div>
              : null
              }
            </div>

            {/* Loader */}
            {this.state.loader ? 
            <div>
              <center><h4><i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
              <span className="sr-only">Sending...</span>
              </h4>
              </center>
              </div>
              : null
            }

            { this.state.userdetails.length == 0 || this.state.userdetails.length == undefined ?
            <center><h3>No Docs Found</h3><br /></center>
            : 
            <div class="box-body">
             <table id="example1" class="table table-bordered table-striped">
               <thead>
               <tr>
                 <th>Requested User</th>
                 <th>Document Name</th>
                 <th>Description</th>
                 <th>Requested Date</th>
                 <th>Requested Time</th>
                 <th>Status</th>
                 <th>Action</th>
               </tr>
               </thead>
               <tbody>
               {docsList}                 
               </tbody>
             </table>
           </div>
            }

          </div>
        </div>
      </div>
    </section>
            </div>
          </div>
        </div>
     
<div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
        <h4 className="modal-title" id="myModalLabel">We need to verify you</h4>
      </div>
      <div className="modal-body">
      { this.state.invalidUserIpinFlag ?   
                        <div className="alert-alert-warning">
                        <center><h3>{this.state.invalidUserIpinText}</h3></center>    
                        </div>
                        : null
                        }
      <div class="row">
                        <div class="col-md-6">
                        

                          <div class="form-group">
                            <label>Enter Your IPIN Here</label>
                          </div>
                          <div class="form-group">
                          <input type="password" class="form-control" id="userpin" placeholder="Please enter your ipin" 
                          onChange={this.changeUserIpinHandler}
                          />
                          </div>
                        </div>
                      </div>  
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-default" id="hidePopUpBtn" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" onClick={this.verifyIpin}>Verify</button>
      </div>
    </div>
  </div>
</div>
                    






      </div>
    )

  }

}
export default DocumentsRequested;