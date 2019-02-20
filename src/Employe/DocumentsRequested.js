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
      noteDoc:null,
      imagePath:''

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

changeNoteHandler = (event) =>{
 this.setState({
  noteDoc:event.target.value
 })
}

verifyIpin = () =>{
var noteDoc =  this.state.noteDoc;
  if(noteDoc == '' || noteDoc==undefined){
    alert("Please put some note");
    return;
  }

  var url = 'http://test.reactapi.com/verifyUserIpin';  
  var data = {
    user_id:sessionStorage.getItem('myData'),
    ipin:this.state.userIpin,
    note:this.state.noteDoc
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

    this.setState({
      loader:true,
      blocking:true
    })
    this.sendRequestedDocViaEmailToUser(data);
    }
      else{
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

  sendRequestedDocViaEmailToUser = (data) => {
    
    var url = 'http://test.reactapi.com/sendRequestedDocViaEmailToUser';

    var data = {
      id:this.state.documentId,
      user_id:sessionStorage.getItem('myData'),
      note:this.state.noteDoc
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
            loader:false,
            imagePath:res
          })

          if( res.status == 404 || res.status == '404'){
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
                  Document Listed
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

    {this.state.imagePath}
            </div>
          </div>
        </div>

<img id="output" src="data:image/png;base64,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" />
     
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

                        <div class="col-md-6">
                          <div class="form-group">
                            <label>Please add note</label>
                          </div>
                          <div class="form-group">
                          <input type="text" class="form-control" id="docs-note" placeholder="Please Enter Note For Docs" 
                          onChange={this.changeNoteHandler}
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