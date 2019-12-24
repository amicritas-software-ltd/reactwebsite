import React, { Component } from 'react';
import {AnimatedOnScroll} from "react-animated-css-onscroll";
import Product1 from "./Products.js/Product1";
import Product2 from "./Products.js/Product2";
import Product3 from "./Products.js/Product3";
import Product4 from "./Products.js/Product4";
import Product5 from "./Products.js/Product5";
import Product6 from "./Products.js/Product6";
import Product7 from "./Products.js/Product7";
import Product8 from "./Products.js/Product8";
import Product9 from "./Products.js/Product9";
import Product10 from "./Products.js/Product10";
import Product11 from "./Products.js/Product11";
import Product12 from "./Products.js/Product12";


class Product extends Component {
    render() {
        return (
          <AnimatedOnScroll
            animationIn="bounceInLeft"
            animationOut=""
            animationInDuration={1000}
            animationOutDuration={5000}
            isVisible={true}
          >
          <section class="shop padding-top-70 padding-bottom-70">
      <div class="container">
            <div class="products margin-top-30">
              <div class="row"> 
              <Product1></Product1>
              <Product2></Product2>
              <Product3></Product3>
              <Product4></Product4>
              <Product5></Product5>
              <Product6></Product6>
              <Product7></Product7>
              <Product8></Product8>
              <Product9></Product9>
              <Product10></Product10>
              <Product11></Product11>
              <Product12></Product12>
              </div>
            </div>
      </div>
    </section>
    </AnimatedOnScroll>
        );
    }
}
export default Product;