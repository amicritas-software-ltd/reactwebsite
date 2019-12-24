import React, { Component } from 'react';
import ProductSample from "../ProductSample";
import Thumbnile from "../img/item2.png";

class Product2 extends Component {
    state = {
        productclass : "col-md-3 col-xs-6",
        thumbnile : Thumbnile,
        productname : "Marketing Website (Using Wordpress)",
        productalt : "Product 2",
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
export default Product2;