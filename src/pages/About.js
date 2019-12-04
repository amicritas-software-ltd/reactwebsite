import React, { Component } from "react";
import Header from "../components/header/Header";
import Pagetop from "../components/pages/Pagetop";
import Aboutcontent from "../components/pages/about/Aboutcontent";
import Companyhistory from "../components/pages/about/Companyhistory";
import Client from "../components/client/Client";
import Footer from "../components/footer/Footer";
import Bottomfooter from "../components/footer/Bottomfooter";

class About extends Component {
  state = {
    title: "About Us",
    background:
      "http://new.uouapps.com/iod-html/html/images/bg/sub-bnr-bg-1.jpg",
    name: "About"
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
        <Aboutcontent></Aboutcontent>
        <Companyhistory></Companyhistory>
        <Client></Client>
        <Footer></Footer>
        <Bottomfooter></Bottomfooter>
      </div>
    );
  }
}

export default About;
