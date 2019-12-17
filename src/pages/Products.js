import React, { Component } from 'react';
import Header from "../components/header/Header";
import Pagetop from "../components/pages/Pagetop";
import Footer from "../components/footer/Footer";
import Bottomfooter from "../components/footer/Bottomfooter";
import Product from "../components/pages/products/Product"
class Products extends Component {
    state = {
        title: "Products",
        background:
          "http://new.uouapps.com/iod-html/html/images/bg/sub-bnr-bg-1.jpg",
        name: "Products"
      }
    render() { 
        return (
            <div>
            <Header></Header> 
            <Pagetop
                Title={this.state.title}
                Background={this.state.background}
                Name={this.state.name}
            />
            <Product></Product>
            <Footer></Footer>
            <Bottomfooter></Bottomfooter>
            </div>
         );
    }
}
 
export default Products;