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
    super(props);
    this.state = {
      userdetails:[],
      data:[],
      noDataFound:false,
      loader:null
    }
  }

componentWillMount = ()=>{
    const result = sessionStorage.getItem('myData');
    if( result   === '' || result == null ){
      this.props.history.push('/')
    }
}

componentDidMount = () =>{

  var data = {
    user_id : sessionStorage.getItem('myData')
   }
   
   this.setState({
     loader:true
   })
     
   
  fetch("http://test.reactapi.com/getAllSharedDocsList",{

    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then((response) => response.json())
  .then( (response) =>{
            this.setState({
              data :  response,
              noDataFound:false,
              loader:false
            })
  })



}

  render() {

    var full_name =  sessionStorage.getItem('full_name');
    var reg_date =  sessionStorage.getItem('reg_date');

    var category = this.state.data.map( (category,i)=>{

    return <tr key={i} >
    <td key={i} >{category.document_name}</td>
    <td key={i} >{category.fullname}</td>
    <td key={i} >{category.email}</td>
    <td key={i} ><img src={category.document_image} height="50" width="50"></img></td>
    <td key={i} >{category.transaction_date }</td>
    <td key={i} >{category.transaction_time }</td>
    </tr>
    })



    

     return(
      <div>
       <div className="hold-transition skin-blue sidebar-mini">
        <div className="wrapper">
         <Header click={this.handleLogOut} name={full_name} reg_date={reg_date} 
          push={this.props.history}
         />
         <Sidebar name={full_name} />

   <div class="content-wrapper">

          <div class="box">
            <div class="box-header">
              <h3 class="box-title">List Of Docs Which you shared with other users</h3>
            </div>
            {this.state.loader  ?
             <center>
               <i class="fa fa-spinner" aria-hidden="true"></i>
             </center>
            :
            <div class="box-body">
              <table id="example1" class="table table-bordered table-striped">
                <thead>
                <tr>
                  <th>Document Name</th>
                  <th>Share With</th>
                  <th>Shared User Email</th>
                  <th>Document Image</th>
                  <th>Transaction Date</th>
                  <th>Transaction Time</th>
                </tr>
                </thead>
                <tbody>
                  {this.state.loader ? 
                  <i class="fa fa-spinner" aria-hidden="true"></i>:
                  category
                  }
               
                </tbody>
              </table>
            </div>
            }
          </div>
   
  
 </div>


 
</div>
</div>
</div>
       )


    




   


  

  }

}
export default SharedDoc;