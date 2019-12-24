import React, { Component } from 'react';
import ProductSample from "../ProductSample";
import Thumbnile from "../img/item6.png";

class Product1 extends Component {
    state = {
        productclass : "col-md-3 col-xs-6",
        thumbnile : Thumbnile,
        productname : "Dating App and Website (Using Ionic4)",
        productalt : "Product 6"
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