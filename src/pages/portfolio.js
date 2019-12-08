import React, { Component } from 'react';
import Header from "../components/header/Header";
import Pagetop from "../components/pages/Pagetop";
import Portfolioc from "../components/pages/portfolioc/Portfolioc";
import Footer from "../components/footer/Footer";
import Bottomfooter from "../components/footer/Bottomfooter";

class Portfolio extends Component{
    state = {
        title: "Portfolio",
        background:
          "http://new.uouapps.com/iod-html/html/images/bg/sub-bnr-bg-1.jpg",
        name: "Portfolio"
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
        <Portfolioc></Portfolioc>
            <Footer></Footer>
            <Bottomfooter></Bottomfooter>
            </header>
        );
    }
}

export default Portfolio;