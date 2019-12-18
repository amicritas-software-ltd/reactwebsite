import React, { Component } from 'react';
import Header from "../components/header/Header";
import Pagetop from "../components/pages/Pagetop";
import Bloginfo from "../components/pages/blog/BlogInfo";
import Footer from "../components/footer/Footer";
import Bottomfooter from "../components/footer/Bottomfooter";

class Blog extends Component{
    state = {
        title: "Blog",
        background:
          "http://new.uouapps.com/iod-html/html/images/bg/sub-bnr-bg-1.jpg",
        name: "Blog"
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
            <Bloginfo></Bloginfo>
            <Footer></Footer>
            <Bottomfooter></Bottomfooter>
            </header>
            );
    }
}
export default Blog;