import React, { Component } from 'react'
import Header from "../components/header/Header";
import Pagetop from "../components/pages/Pagetop";
import Footer from "../components/footer/Footer";
import Bottomfooter from "../components/footer/Bottomfooter";
import Jobsinfo from "../components/pages/jobs/Jobsinfo";

class Jobs extends Component {
    state = {
        title: "Presentation",
        background:
          "http://new.uouapps.com/iod-html/html/images/bg/sub-bnr-bg-1.jpg",
        name: "Presentation"
      };

    render() {
      return (
        <header>
            <Header></Header>
            <Pagetop
          Title={this.state.title}
          Background={this.state.background}
          Name={this.state.name}
        />
        <Jobsinfo></Jobsinfo>
            <Footer></Footer>
            <Bottomfooter></Bottomfooter>
            </header>
    );
    }
}

export default Jobs;