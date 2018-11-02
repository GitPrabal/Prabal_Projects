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

class AddDocCategory extends Component {

  constructor(props) {
    super(props)
    this.state = {
        category: '',
        hideButton:true,
        showFlag:false,
        showText:'',
        loader:false,
        showHtml:null
      }
  }

  componentWillMount = () => {
    const result = sessionStorage.getItem('myData');
    if (result === '' || result == null) {
      sessionStorage.clear();
      this.props.history.push('/')
      return;
    }
  }

  changeNameHandler = (event) => {
    this.setState({
        category: event.target.value,
        hideButton:false
    })
    if( event.target.value =='' || event.target.value === ' ' ){
        this.setState({
            hideButton:true
        })
    }
  }

 

  addCategory = () => {

    var data = {
        category  : this.state.category
    }

    this.setState({
        hideButton:true,
        loader:true
    })

    fetch("http://test.reactapi.com/addCategory", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then( (res) => res.json())
    .then( (res)=>{
    if(res.status==='200' ||  res.status===200){
        this.setState({
            loader:false,
            hideButton:true,
            showFlag:true,
            category:'',
            showText:'Category Added',
            showHtml:<div className="btn btn-info">&nbsp;<i className="fa fa-check
            "></i>&nbsp;Category Added Successfully</div>
        })

        document.getElementById("categoryId").value='';
        setTimeout( () => {
            this.setState({
                showHtml:'',
            })   
        }, 3000);

    }else{
        this.setState({
            loader:false,
            hideButton:false,
            showFlag:true,
            showText:'Unable To Add Category',
            showHtml:<div className="btn btn-danger">&nbsp;<i className="fa fa-times
            "></i>&nbsp;Unable To Add Category </div>
        })

    }    

    }).catch((err)=> {
        this.setState({
          showFlag:true,
          loader:false,
          hideButton:false,
          showHtml:<div className="btn btn-danger">&nbsp;<i class="fa fa-exclamation-triangle" aria-hidden="true"></i>&nbsp;It seems server is not responding ! Please try to refresh page and try again </div>
        })
       }); 
  }

  render() {

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
                    <li class="active">Add Category</li>
                  </ol>
                </section>
                <section class="content">
                  <div class="box box-default">
                    <div class="box-header with-border">
                      <h3 class="box-title">Add A Category</h3>
                    </div>
                    <div class="box-body">
                    <center>
                    {this.state.showHtml}
                    </center>


                    <center>
                   {
                       this.state.loader ? 
                    <h4><i class="fa fa-spinner fa-spin"></i>&nbsp;
                    Please wait while we are adding ....
                    </h4> 
                    :null}

                    </center> 
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group">
                            <label>Category Name</label>
                          </div>
                          <div class="form-group">
                          <input type="text" class="form-control" id="categoryId" placeholder="Add A Category" 
                          onChange={this.changeNameHandler}
                          />
                          </div>
                          <div class="form-group">
                          {this.state.hideButton ? 
                            <button disabled className="btn btn-info" >Upload</button>
                            :<button  className="btn btn-info" onClick={this.addCategory}>Upload</button> 
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
export default AddDocCategory;