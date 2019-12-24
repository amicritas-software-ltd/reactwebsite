import React, { Component } from 'react';
import ProductSample from "../ProductSample";
import Thumbnile from "../img/item8.png";

class Product1 extends Component {
    state = {
        productclass : "col-md-3 col-xs-6",
        thumbnile : Thumbnile,
        productname : "HTML5 Web Browser Game",
        productalt : "Product 8"
      };
    render() {
        return (
            <ProductSample
            productclass={this.state.productclass}
            thumbnile={this.state.thumbnile}
            productalt={this.state.productalt}
            productname= {this.state.productname}
      />
        );
    }
}
export default Product1;