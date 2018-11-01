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

class DocumentList extends Component{

    constructor(props){
        super(props);
        this.state = {
          data: [],
          Total:'',
          errorFlag:false
        };
    }
    
    componentWillMount = () => {

      var isLoggedIn = sessionStorage.getItem('myData');
      if( isLoggedIn   === '' || isLoggedIn == null )
      {
        this.props.history.push('/')
        return;
      }
}

handleLogOut = () =>{
  sessionStorage.clear();
  this.props.history.push('/');
}

    render(){

      var full_name =  sessionStorage.getItem('full_name');
      var reg_date =  sessionStorage.getItem('reg_date');
      var numbers = this.state.data;
      var result  =  numbers.map( numbers=>
            <tr>
                  <td>{numbers.date}</td>
                  <td>{numbers.price}</td>
            </tr>

      )
      return(
       <div>
        <div className="hold-transition skin-blue sidebar-mini">
         <div className="wrapper">
          <Header click={this.handleLogOut} name={full_name} reg_date={reg_date} 
           push={this.props.history}
          />
          <Sidebar name={full_name} />

    <div class="content-wrapper">
    <section class="content-header">
      <h1>
        Document List
      </h1>
    </section>
    <section class="content">
      <div class="row">
        <div class="col-xs-12">
          <div class="box">
            <div class="box-header">

          
            <div id="errorMsg1">
              {this.state.errorFlag ?

              <div class="callout callout-danger">
              <h4>Warning!</h4>
              <p>{this.state.errorText}</p>
              </div>
              :null}
            </div>
          

              <h3 class="box-title">
                <a href="/upload-docs">Upload Documents</a>
                {this.state.users}
              </h3>
            </div>
            <div class="box-body">
              <table id="example1" class="table table-bordered table-striped">
                <thead>
                <tr>
                  <th>Date</th>
                  <th>Price</th>
                </tr>
                </thead>
                <tbody>
                {result}
                </tbody>
                <tfoot>
                <tr>
                  <th>Date</th>
                  <th>Price</th>
                </tr>
                </tfoot>
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

export default DocumentList;