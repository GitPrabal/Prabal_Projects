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

class TypeDocs extends Component{

    constructor(props){
        super(props);
        this.state = {
          data: [],
          Total:'',
          errorFlag:false
        };
    }


componentDidMount =()=> {
    fetch('http://test.reactapi.com/getCategory')
    .then( (response) => response.json())
    .then( (response)=> (response))
    .then( (response) =>{
            this.setState({
              data :  response
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

      var cat  = this.state.data.map( (category)=>{
       return <tr><td value={category.id}>{category.document_name}</td></tr>
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
    <section class="content-header">
      <div class="callout callout-info">
                 <h4>Types Of Documents !</h4>
                 <hr />
                  <p>This section shows all documents / certificates which you can upload here.</p>
         </div>
    </section>
    <section class="content">
      <div class="row">
        <div class="col-xs-12">
          <div class="box">
            <div class="box-header">
            <center>
                      <div id="errorMsg1">
              {this.state.errorFlag ?
                <div className="btn btn-danger">
                  {this.state.errorText}
                  </div>
                  :null}
            </div></center>

              <h3 class="box-title">
               
                Types Of Docuements That Can Uploaded
                
                {this.state.users}
              </h3>
            </div>
            <div class="box-body">
              <table id="example1" class="table table-bordered table-striped">
                <thead>
                <tr>
                  <th>Types of Documents</th>
                </tr>
                </thead>
                <tbody>
                {cat}
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

export default TypeDocs;