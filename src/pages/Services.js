import React, { Component } from "react";
import Header from "../components/header/Header";
import Pagetop from "../components/pages/Pagetop";
import Service from "../components/service/Service";
import Footer from "../components/footer/Footer";
import Bottomfooter from "../components/footer/Bottomfooter";
class Services extends Component {
  state = {
    title: "Services",
    background:
      "http://new.uouapps.com/iod-html/html/images/bg/sub-bnr-bg-1.jpg",
    name: "Services"
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
        <Service></Service>
        <Footer></Footer>
        <Bottomfooter></Bottomfooter>
      </div>
    );
  }
}

export default Services;
