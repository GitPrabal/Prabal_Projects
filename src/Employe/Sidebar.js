import React,{Component} from 'react';

class Sidebar extends Component{
    render(){
      console.log("--------------------",this.props.name);
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
          <a href="/expenseslist"><i className="fa fa-list" aria-hidden="true"></i> Manage Expenses</a>
        </li>
        <li>
          <a href="/uploaded-docs"><i class="fa fa-file-o" aria-hidden="true"></i>Uploaded Documents</a>
        </li>
        <li>
          <a href="/share"><i class="fa fa-share-alt-square" aria-hidden="true"></i>Shared Documents</a>
        </li>
        <li>
          <a href="/type-of-docs"><i class="fa fa-keyboard-o" aria-hidden="true"></i>Types of Documents</a>
        </li>


      </ul>
    </section>

  </aside>
            </div>
        )
    }
}


export default Sidebar;

