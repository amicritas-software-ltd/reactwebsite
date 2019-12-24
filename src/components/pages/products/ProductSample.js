import React, { Component } from 'react';
import {Link} from "react-router-dom";

class ProductSample extends Component {
    render() {
        return (
                <div class={this.props.productclass}>
                  <article>
                    <div class="item-img"> <img src = {this.props.thumbnile} alt={this.props.productalt} /> </div>
                    <a href="#." class="tittle">{this.props.productname}</a> <Link to="/contact" class="btn btn-1 btn-sm margin-top-10">Buy Now<i class="fa fa-caret-right"></i></Link> </article>
                </div>
        );
    }
}
export default ProductSample;