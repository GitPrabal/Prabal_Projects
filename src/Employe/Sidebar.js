import React,{Component} from 'react';

class Sidebar extends Component{
    render(){
        return(
            <div>
<aside className="main-sidebar">
    <section className="sidebar">
      <div className="user-panel">
        <div className="pull-left image">
          <img src={require('../Admin/dist/img/user2-160x160.jpg')} className="img-circle" alt="" />
        </div>
        <div className="pull-left info">
          <p>{this.props.name}</p>
          <a><i className="fa fa-circle text-success"></i> Online</a>
        </div>
      </div>

      <form  method="get" className="sidebar-form">
        <div className="input-group">
          <input type="text" name="q" className="form-control" placeholder="Search..." />
          <span className="input-group-btn">
                <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search"></i>
                </button>
              </span>
        </div>
      </form>

      <ul className="sidebar-menu" data-widget="tree">

        <li>
          <a href="/dashboard"><i className="fa fa-dashboard"></i> Dashboard</a>
        </li>

        <li>
          <a href="/addcategory"><i className="fa fa-list" aria-hidden="true"></i> Add Doc Category</a>
        </li>

        <li>
          <a href="/upload-docs"><i className="fa fa-file-o" aria-hidden="true"></i>Upload Documents</a>
        </li>

        <li>
          <a href="/doc-list"><i className="fa fa-bars" aria-hidden="true"></i>Document List</a>
        </li>

         <li>
          <a href="/share-docs"><i className="fa fa-retweet" aria-hidden="true"></i>Share Your Document</a>
        </li>
        
        <li>
          <a href="/set-ipin"><i className="fa fa-key" aria-hidden="true"></i>Set Instant IPIN</a>
        </li>

        <li>
          <a href="/share"><i className="fa fa-share-alt-square" aria-hidden="true"></i>Shared Documents</a>
        </li>

        <li>
          <a href="/my-request"><i className="fa fa-envelope" aria-hidden="true"></i>My Request</a>
        </li>

        <li>
          <a href="/doc-requested"><i className="fa fa-file-text" aria-hidden="true"></i>Document Request From Others</a>
        </li>
        
        <li>
          <a href="/request-doc"><i className="fa fa-sign-in" aria-hidden="true"></i>Request For Documents</a>
        </li>

        
        <li>
          <a href="/type-of-docs"><i className="fa fa-keyboard-o" aria-hidden="true"></i>Types of Documents</a>
        </li>

        


      </ul>
    </section>

  </aside>
            </div>
        )
    }
}


export default Sidebar;

