import React, { Component } from "react";

import "../Admin/bower_components/bootstrap/dist/css/bootstrap.min.css";
import "../Admin/bower_components/Ionicons/css/ionicons.min.css";
import "../Admin/bower_components/font-awesome/css/font-awesome.min.css";
import "../Admin/dist/css/AdminLTE.min.css";

import "../Admin/dist/css/skins/_all-skins.min.css";
import "../Admin/bower_components/jvectormap/jquery-jvectormap.css";
import "../Admin/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css";

import Header from "../Employe/Header";
import Sidebar from "../Employe/Sidebar";

class Expenses extends Component {
  constructor(props) {
    super(props);
    this.state = [
      {
        date: "",
        price: "",
        desc: "",
        flag: false,
        msg: ""
      }
    ];
  }

  componentWillMount = () => {
    const result = sessionStorage.getItem("myData");
    if (result === "" || result == null) {
      this.props.history.push("/");
    }
  };

  handleLogOut = () => {
    sessionStorage.clear();
    this.props.history.push("/");
  };

  sendExpenses = () => {
    var price = this.state.price;
    var date = this.state.date;
    var desc = this.state.desc;
    var user_id = sessionStorage.getItem("myData");

    if (date == "" || date == "undefined" || date == null) {
      this.setState({
        flag: true,
        msg: "Date Can not be blanked"
      });

      setTimeout(() => {
        this.setState({
          flag: false
        });
      }, 3000);

      return;
    }

    if (price == "" || price == "undefined" || price == null) {
      this.setState({
        flag: true,
        msg: "Price Can not be blanked"
      });

      setTimeout(() => {
        this.setState({
          flag: false
        });
      }, 3000);
      return;
    }

    var price = new Buffer(price).toString("base64");
    var date = new Buffer(date).toString("base64");
    var desc = new Buffer(desc).toString("base64");
    user_id = new Buffer(user_id).toString("base64");

    fetch(
      "http://localhost/ReactApi/InsertExpenses.php?price=" +
        price +
        "&date=" +
        date +
        "&desc=" +
        desc +
        "&user_id=" +
        user_id
    )
      .then(res => res.json())
      .then(res => {
        if (res.status == "200" || res.status == 200) {
          this.setState({
            flag: true,
            msg: "Expenses has been added",
            price: "",
            desc: "",
            date: ""
          });

          document.getElementById("date").value = "";
          document.getElementById("price").value = "";
          document.getElementById("description").value = "";

          setTimeout(() => {
            this.setState({
              flag: false,
              price: "",
              desc: "",
              date: ""
            });
          }, 3000);
        }
      });
  };

  changeDate = event => {
    this.setState({
      date: event.target.value
    });
  };

  changePrice = event => {
    this.setState({
      price: event.target.value
    });
  };

  changeDesc = event => {
    this.setState({
      desc: event.target.value
    });
  };

  goBack = () => {
    this.props.history.goBack();
  };

  render() {
    const cursor = {
      cursor: "pointer",
      color: "#cb2431"
    };
    var full_name = sessionStorage.getItem("full_name");
    var reg_date = sessionStorage.getItem("reg_date");
    return (
      <div>
        <div>
          <div className="hold-transition skin-blue sidebar-mini">
            <div className="wrapper">
              <Header
                click={this.handleLogOut}
                name={full_name}
                reg_date={reg_date}
                push={this.props.history}
              />
              <Sidebar name={full_name} />
              <div className="content-wrapper">
                <section className="content-header">
                  <h5 style={cursor} onClick={this.goBack}>
                    <i class="fa fa-arrow-left" aria-hidden="true" />
                    &nbsp;&nbsp;&nbsp;Go Back
                  </h5>
                  <div className="box box-primary">
                    <div className="box-header with-border">
                      <h3 className="box-title">Enter Expenses Details</h3>
                    </div>
                    <form role="form">
                      <div className="box-body">
                        <div className="form-group">
                          <center>
                            {this.state.flag ? (
                              <div className="btn btn-primary">
                                {this.state.msg}
                              </div>
                            ) : null}
                          </center>
                          <label for="exampleInputEmail1">Date</label>
                          <input
                            type="date"
                            className="form-control"
                            id="date"
                            placeholder="Enter email"
                            onChange={this.changeDate}
                          />
                        </div>
                        <div className="form-group">
                          <label for="price">Price</label>
                          <input
                            type="text"
                            className="form-control"
                            id="price"
                            placeholder="Price"
                            onChange={this.changePrice}
                          />
                        </div>
                        <div className="form-group">
                          <label for="details">Details</label>
                          <textarea
                            cols="10"
                            rows="3"
                            className="form-control"
                            onChange={this.changeDesc}
                            id="description"
                          />
                        </div>
                      </div>
                      <div class="box-footer">
                        <button
                          type="button"
                          onClick={this.sendExpenses}
                          className="btn btn-primary"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </section>
              </div>
              <footer className="main-footer">
                <div className="pull-right hidden-xs">
                  <b>Version</b> 2.4.0
                </div>
                <strong>
                  Copyright &copy; 2018-2019 <a>Smart Documents</a>.
                </strong>{" "}
                All rights reserved.
              </footer>
              <div className="control-sidebar-bg" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Expenses;
