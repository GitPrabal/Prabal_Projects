import React, { Component } from 'react';

import '../Admin/bower_components/bootstrap/dist/css/bootstrap.min.css';
import '../Admin/bower_components/Ionicons/css/ionicons.min.css';
import '../Admin/bower_components/font-awesome/css/font-awesome.min.css';
import '../Admin/dist/css/AdminLTE.min.css';
import '../Admin/dist/css/skins/_all-skins.min.css';



class Error extends Component {

    render() {
        return (
            <div className="">
                <section className="content-header">
                    <h1>
                        500 Error Page
                    </h1>
                  
                </section>
                <section className="content">
                    <div className="error-page">
                        <h2 className="headline text-red">500</h2>
                        <div className="error-content">
                            <h3><i className="fa fa-warning text-red"></i> Oops! Something went wrong.</h3>
                            <p>
                                We unable to locate your session.
            Meanwhile, you may <a href="/">return to login</a> to start your new session.
          </p>
                            <form className="search-form">
                                <div className="input-group">
                                    

                                    <div className="input-group-btn">
                                        
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>

            </div>
        )

    }


}
export default Error;