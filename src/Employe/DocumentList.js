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
          alldocs: []
        };
    }


componentDidMount =()=> {
  var data = {
    user_id : sessionStorage.getItem('myData')
  }
    fetch('http://test.reactapi.com/getAllDocs'
    , {
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

      const style = {
        cursor:'pointer'
      }

     
      var documents  = this.state.alldocs.map( (category,i)=>{
        return <tr><td value={i}>{category.document_name}</td></tr>
       })

      var full_name =  sessionStorage.getItem('full_name');
      var reg_date =  sessionStorage.getItem('reg_date');

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
                 <h4>List Of Documents !</h4>
                 <hr />
                  <p>This section shows all documents / certificates which you can upload here.</p>
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
                  <th>Types of Documents</th>
                </tr>
                </thead>
                <tbody>
                {documents}
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

export default DocumentList;