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

class UploadedDocs extends Component {

  constructor(props) {
    super(props)
    this.state = {
      userdetails: [],
      file: '',
      imagePreviewUrl: '',
      selectedFile: null,
      imagename: null,
      errorFlag: false,
      errorText: '',
      hideButton: true,
      loader: false
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



  fileChangedHandler = (event) => {

    this.setState({ selectedFile: event.target.files[0] })

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

    var name = this.state.imagename;

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

    formData.append('myFile', this.state.selectedFile, this.state.selectedFile.name)
    axios.post('http://test.reactapi.com/uploadImage', formData, {

      onUploadProgress: progressEvent => {
        
        var result = progressEvent.loaded / progressEvent.total;
       
        if (result) {
          this.setState({
            successFlag: true,
            successText: 'Document has been added for review',
            loaded:false,
            hideButton:false,
            imagename:'',
            hideButton:true
          })

          setTimeout(() => {
            this.setState({
              successFlag: false,
              successText: ''
            });
          }, 3000);
         
          document.getElementById("docId").value='';


        }
      }


    })


  }

  render() {

    var full_name = sessionStorage.getItem('full_name');
    var reg_date = sessionStorage.getItem('reg_date');


    var numbers = ['Aadhaar Card', 'PAN Verification Record', 'LPG Subscription Voucher', 'Insurance Policy Certificate'
      , 'Registration of Vehicles', 'Vehicle Tax Receipt', 'Fitness Certificate', 'Driving License'
      , 'Class X Marksheet', 'Insurance Policy Certificate- Car', 'Income Certificate', 'Caste Certificate', 'Class XII Marksheet', 'Insurance Policy Certificate- Commercial Vehicle'
      , 'Class X Passing Certificate'
      , 'Domicile Certificate'
      , 'Class XII Passing Certificate'
      , 'Class X Migration Certificate'
      , 'Records of Rights'
      , 'Insurance Policy Certificate- Health'
      , 'Residence Certificate'
      , 'Class XII Migration'
      , 'Birth Certificate'
      , 'Possession Certificate'
      , 'Ration Card'
    ];

    var docs = numbers.map(numbers =>
      <option value={numbers}>{numbers}</option>
    )

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
                        {this.state.successFlag ?
                          <div class="callout callout-info">
                            <h4>Added For Review !</h4>
                            <hr />
                            <p>Your Document has been added successfully for review.
                              Our team will review your docuement and contact you shortly
                </p>
                          </div>
                          : null}
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
                            <select class="form-control select2">
                              {docs}
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
export default UploadedDocs;