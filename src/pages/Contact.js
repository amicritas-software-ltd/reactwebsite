import React, { Component } from "react";
import Header from "../components/header/Header";
import Pagetop from "../components/pages/Pagetop";
import Content from "../components/pages/contactUs/Content";
import Footer from "../components/footer/Footer";
import Bottomfooter from "../components/footer/Bottomfooter";

class Contact extends Component{
    state = {
        title: "Contact",
        background:
          "http://new.uouapps.com/iod-html/html/images/bg/sub-bnr-bg-1.jpg",
        name: "Contact"
      }
    render(){
        return(
            <header>
            <Header></Header>
            <Pagetop
          Title={this.state.title}
          Background={this.state.background}
          Name={this.state.name}
        />
            <Content></Content>
            <Footer></Footer>
            <Bottomfooter></Bottomfooter>
            </header>
            );
    }
}  
  export default Contact;