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

handleLogOut = () =>{
  sessionStorage.clear();
  this.props.history.push('/');
}

    render(){

      var full_name =  sessionStorage.getItem('full_name');
      var reg_date =  sessionStorage.getItem('reg_date');

      var numbers  =['Aadhaar Card','PAN Verification Record','LPG Subscription Voucher','Insurance Policy Certificate'
,'Registration of Vehicles','Vehicle Tax Receipt','Fitness Certificate','Driving License'
,'Class X Marksheet','Insurance Policy Certificate- Car','Income Certificate','Caste Certificate','Class XII Marksheet','Insurance Policy Certificate- Commercial Vehicle'
,'Class X Passing Certificate'
,'Domicile Certificate'
,'Class XII Passing Certificate'
,'Class X Migration Certificate'
,'Records of Rights'
,'Insurance Policy Certificate- Health'
,'Residence Certificate'
,'Class XII Migration'
,'Birth Certificate'
,'Possession Certificate'
,'Ration Card'
,'Insurance Policy Certificate- Engineering'
,'Integrated Certificate'
,'Community and Date of Birth Certificate'
,'Skill Certificate'
,'Death Certificate'
,'Community Certificate'
,'Copy of Registered Deed'
,'OBC Certificate'
,'Nativity Certificate'
,'One and the Same Certificate'
,'Insurance Policy Certificate- Travel'
,'Class X Provisional Certificate'
,'NDLM Certificate Level'
,'Pension Certificate'
,'ITI Certificate'
,'Economically Weaker Section Certificate'
,'Sandhya Surakhsha Yojna Certificate'
,'Class XII Provisional Certificate'
,'NEET Marksheet'
,'Leave and License Certificate'
,'Bonafide Certificate'
,'GPF Statement'
,'SC/ST Certificate'
,'Crop Certificate'
,'Family Membership Certificate'
,'Location Certificate'
,'NEET Rank Letter'
,'Possession and Non-Attachment Certificate'
,'Character Certificate'
,'Admit Card','Skill Marksheet/ Score Card',
'Surviving Member Certificate',
'TDS Certificate',
'HK Region Residence and Eligibility Certificate',
'Agriculture/ Agriculturist Certificate','Issue of Small and Marginal Farmer Certificate',
'Relationship Certificate',
'Land Valuation/ Holding/ Record Certificate',
'Non-Tenancy Certificate',
'EBC Certificate',
'Late Registration of Birth and Death Certificate',
'Legal Heir Certificate',
'Degree/ Diploma Marksheet',
'Interest Certificate',
'Non-Remarriage Certificate',
'ROR Register',
'Anthya Samskara Yojna',
'Dogra Class Certificate',
'Economically Backward In General Caste Certificate','New Electricity Connection Certificate'];

var result  =  numbers.map( numbers=>
    <tr>
            <td>{numbers}</td>
            
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
                  <th>Types of Docuements</th>
                  
                </tr>
                </thead>
                <tbody>
                {result}
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