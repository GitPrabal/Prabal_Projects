import React, { Component } from 'react';

class Dashboardcards extends Component {
    render() {
        
        var cursor = {
            cursor:'pointer'
        }
        return (
        <section className="content">    
            <div className="row">
                <div className="col-lg-3 col-xs-6">
                    <div className="small-box bg-aqua">
                        <div className="inner">
                            <h3>{this.props.count}</h3>
                            <p>My Total Requested Documents</p>
                        </div>
                        <div className="icon">
                            
                        </div>
                        <a href="/my-request" className="small-box-footer" style={cursor}>More info <i className="fa fa-arrow-circle-right"></i></a>
                    </div>
                </div>
                <div className="col-lg-3 col-xs-6">
                    <div className="small-box bg-green">
                        <div className="inner">
                            <h3>{this.props.notification_count}</h3>
                            <p>New Notification</p>
                        </div>
                        <div className="icon">
                        </div>
                        <a href="/doc-requested" className="small-box-footer">More info <i className="fa fa-arrow-circle-right"></i></a>
                    </div>
                </div>

                <div className="col-lg-3 col-xs-6">
                    <div className="small-box bg-yellow">
                        <div className="inner">
                            <h3>44</h3>
                            <p>Document Requested</p>
                        </div>
                        <div className="icon">
                            <i className="ion ion-person-add"></i>
                        </div>
                        <a href="/my-request" className="small-box-footer">More info <i className="fa fa-arrow-circle-right"></i></a>
                    </div>
                </div>

                <div className="col-lg-3 col-xs-6">
                    <div className="small-box bg-red">
                        <div className="inner">
                            <h3>65</h3>
                            <p>Last Login Time</p>
                        </div>
                        <div className="icon">
                            <i className="ion ion-pie-graph"></i>
                        </div>
                        <a className="small-box-footer">More info <i className="fa fa-arrow-circle-right"></i></a>
                    </div>
                </div>
            </div>
        </section> 
        )
    }
}
export default Dashboardcards;