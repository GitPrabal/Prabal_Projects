import React,{Component} from 'react';

import '../Admin/bower_components/bootstrap/dist/css/bootstrap.min.css';
import '../Admin/bower_components/Ionicons/css/ionicons.min.css';
import '../Admin/bower_components/font-awesome/css/font-awesome.min.css';
import '../Admin/dist/css/AdminLTE.min.css';

import '../Admin/dist/css/skins/_all-skins.min.css';
import '../Admin/bower_components/jvectormap/jquery-jvectormap.css';
import '../Admin/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css';

import Header from '../Employe/Header';
import Sidebar from '../Employe/Sidebar';

class MyRequest extends Component{

    constructor(props){
        super(props);
        this.state = {
          alldocs: []
        };
    }

componentWillMount = () =>{

    var data = {
        user_id : sessionStorage.getItem('myData')
    }

    fetch('http://test.reactapi.com/getAllRequestByUserId',{
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
              alldocs :  response
            })
    })
}



handleLogOut = () =>{
  sessionStorage.clear();
  this.props.history.push('/');
}
    render(){
     
      var full_name =  sessionStorage.getItem('full_name');
      var reg_date =  sessionStorage.getItem('reg_date');

      var all_docs = this.state.alldocs.map( (alldocs)=>{

        return <tr>
               <td>
                   {alldocs.requested_for}
               </td>
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

    <div className="content-wrapper">
    <section className="content-header">
      <div className="callout callout-info">
                 <h4>My Request !</h4>
                 <hr />
                  <p>This section shows all request including pending and approved.</p>
         </div>
    </section>
    <section className="content">
      <div className="row">
        <div className="col-xs-12">
          <div className="box">
            <div className="box-header">
              <h3 className="box-title">
              List Of Documents
              </h3>
            </div>
            <div class="box-body">
              <table id="example1" class="table table-bordered table-striped">
                <thead>
                <tr>
                  <th>Types of Request</th>
                  <th>Image</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
                </thead>
                <tbody>
                   {all_docs}
                </tbody>
              </table>
            </div>
          
          </div>
        </div>
      </div>
    </section>
  </div>
 </div>
 </div>
 </div>
        )
    }
}

export default MyRequest;