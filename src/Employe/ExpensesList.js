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

class ExpensesList extends Component{

    constructor(props){
        super(props);
        this.state = {
          data: [],
          Total:''
        };
    }
    
    componentWillMount = () => {

      var isLoggedIn = sessionStorage.getItem('myData');
      if( isLoggedIn   === '' || isLoggedIn == null )
      {
        this.props.history.push('/')
      }
        const result = sessionStorage.getItem('myData');
        var id    = new Buffer(result).toString('base64');

        fetch('http://localhost/ReactApi/expenses.php?user_id='+id)
          .then( (response) => response.json())
          .then( (response) => (response))
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
        Expenses List
      </h1>
    </section>
    <section class="content">
      <div class="row">
        <div class="col-xs-12">
          <div class="box">
            <div class="box-header">
              <h3 class="box-title">
                <a href="/expenses">Add Expenses</a>
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

export default ExpensesList;