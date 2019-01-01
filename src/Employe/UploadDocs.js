import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import Sidebar from './Sidebar';

import '../Admin/bower_components/bootstrap/dist/css/bootstrap.min.css';
import '../Admin/bower_components/Ionicons/css/ionicons.min.css';
import '../Admin/bower_components/font-awesome/css/font-awesome.min.css';
import '../Admin/dist/css/AdminLTE.min.css';

import '../Admin/dist/css/skins/_all-skins.min.css';
import '../Admin/bower_components/jvectormap/jquery-jvectormap.css';
import '../Admin/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css';

class UploadDocs extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: [],
      file: '',
      imagePreviewUrl: '',
      selectedFile: null,
      imagename: null,
      errorFlag: false,
      errorText: '',
      hideButton: true,
      loader: false,
      user_id:'',
      showHtml:''
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

  componentDidMount() {
    fetch('http://test.reactapi.com/getCategory')
    .then( (response) => response.json())
          .then( (response) => (response))
          .then( (response) =>{
            this.setState({
              data :  response
            })
    })
  }


  fileChangedHandler = (event) => {
    this.setState({ selectedFile: event.target.files[0] })
    if( event.target.files[0] === undefined){
      this.setState({
        imagePreviewUrl:''
      })
      return;    
    }

    let reader = new FileReader();
    let file = event.target.files[0];

    var fileName = file.name;

    this.setState({
      imagename: file.name
    })


    var validExt = ["jpg", "jpeg", "png", "PNG", "JPEG", "JPG"];
    var fileExtension = fileName.substr(fileName.lastIndexOf('.') + 1);
    var isValidFile = validExt.indexOf(fileExtension) > -1;

    if (!(isValidFile)) {
      this.setState({
        errorFlag: true,
        errorText: 'Please choose valid image',
        hideButton: true
      })

      setTimeout(() => {
        this.setState({
          errorFlag: false,
          errorText: ''
        });
      }, 3000);
      return;

    } else {
      this.setState({
        hideButton: false
      })
    }

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }
    reader.readAsDataURL(file)
  }

  uploadHandler = () => {

    var name    = this.state.imagename;
    var user_id = sessionStorage.getItem('myData');

    var e           = document.getElementById("document_name");
    var document_id = e.options[e.selectedIndex].value;

    if (name == 'undefined' || name === '' || name == '' || name == undefined) {
      this.setState({
        errorFlag: true,
        errorText: 'Please choose image to upload'
      })
      setTimeout(() => {
        this.setState({
          errorFlag: false,
          errorText: ''
        });
      }, 3000);
      return;
    }

    this.setState({
      loaded:true,
      hideButton:true
    })

    const formData = new FormData()

    formData.append('user_id',user_id)
    formData.append('document_id',document_id)
    formData.append('myFile', this.state.selectedFile, this.state.selectedFile.name)

    axios.post('http://test.reactapi.com/uploadDocs', formData, {
      onUploadProgress: progressEvent => {
        var result = progressEvent.loaded / progressEvent.total;
      }
    })

    .then((res)=>{

      if(res.data.status===200 || res.data.status=='200'){
      this.setState({
        loaded:false,
        imagename:'',
        hideButton:true,
        imagePreviewUrl:'',
        showHtml:<div class="callout callout-info"><h4>Added For Review !</h4><hr /><p>Your Document has been added successfully for review.
                  Our team will review your docuement and contact you shortly
                  </p>
                 </div>
      })

      setTimeout(() => {
        this.setState({
          showHtml: ''
        });
      }, 3000);
      
      document.getElementById("docId").value='';

    }

    if(res.data.status===300 || res.data.status=='300'){

      this.setState({
        loaded:false,
        imagename:'',
        hideButton:true,
        imagePreviewUrl:'',
        showHtml:<div className="callout callout-warning"><h4>Document Found !</h4><hr /><p>It Seems that you already added document with this category.
                  Mean while you can edit document in <a href="/doc-list">Document List</a> section
                  </p>
                  </div>
      })

      setTimeout(() => {
        this.setState({
          showHtml: ''
        });
      }, 8000);
      
      document.getElementById("docId").value='';

    }

    if(res.data.status===500 || res.data.status=='500'){

      this.setState({
        showHtml: <div class="callout callout-danger">
        <h4>Warning!</h4>
        <p>It Seems that server is not responding ! We will fix it right away. Please try after some time</p>
        </div>
      })

      setTimeout(() => {
        this.setState({
          showHtml: ''
        });
      }, 3000);
      document.getElementById("docId").value='';
    }   

    }).catch(function(err) {
      console.log(err)
      });

  }

  render() {
  
    var cat  = this.state.data.map( (category)=>{
               return <option value={category.id}>{category.document_name}</option>
    })

    var full_name = sessionStorage.getItem('full_name');
    var reg_date = sessionStorage.getItem('reg_date');

    let { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }

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
                    <li class="active">Upload Docs</li>
                  </ol>
                </section>
                <section class="content">
                  <div class="box box-default">
                    <div class="box-header with-border">
                    <center>
                        {this.state.loader ?
                          <div className="">
                            <i class="fa fa-spinner fa-spin" ></i>
                          </div>
                          : null}
                      </center>
                      <center>
                       {this.state.showHtml}
                      </center>
                      <center>
                        {this.state.errorFlag ?
                          <div className="btn btn-danger">
                            {this.state.errorText}
                          </div> : null}
                      </center>
                      <h3 class="box-title">Choose Documents To Upload</h3>
                    </div>
                    <div class="box-body">
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group">
                            <label>Select</label>
                            <select class="form-control select2" name="document_name" id="document_name">
                           {cat}
                            </select>
                          </div>
                          <div class="form-group">
                            <input type="file" class="form-control" id="docId"
                              onChange={this.fileChangedHandler}
                            />
                          </div>
                          <div class="form-group">
                            {this.state.hideButton ?
                              <button disabled className="btn btn-info" onClick={this.uploadHandler} >Upload</button>
                              :
                              <button className="btn btn-info" onClick={this.uploadHandler} >Upload</button>
                            }
                          </div>
                          <div className="form-group">
                            {$imagePreview}
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
export default UploadDocs;