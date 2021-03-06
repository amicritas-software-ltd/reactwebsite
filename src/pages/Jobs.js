import React, { Component } from "react";
import Header from "../components/header/Header";
import Pagetop from "../components/pages/Pagetop";
import Footer from "../components/footer/Footer";
import Bottomfooter from "../components/footer/Bottomfooter";
import Jobsinfo from "../components/pages/jobs/Jobsinfo";

class Jobs extends Component {
  state = {
    title: "Jobs",
    background:
      "http://new.uouapps.com/iod-html/html/images/bg/sub-bnr-bg-1.jpg",
    name: "Jobs"
  };

  render() {
    return (
      <div>
        <Header></Header>
        <Pagetop
          Title={this.state.title}
          Background={this.state.background}
          Name={this.state.name}
        />
        <Jobsinfo></Jobsinfo>
        <Footer></Footer>
        <Bottomfooter></Bottomfooter>
      </div>
    );
  }
}

export default Jobs;
