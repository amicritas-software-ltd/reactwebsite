import React, { Component } from "react";
import PortfolioSample from "../PortfolioSamle";
import Thumbnile from "../img/img2.png";
class PortfolioItem2 extends Component {
  state = {
    itemclass: "cbp-item website",
    thumbnile: Thumbnile,
    itemalt: "Item 2",
    itemurl: "https://www.banglars.com/",
    lightboximg: Thumbnile,
    itemtitle: "Ecommerce Shopping Site",
    itemcategory: "Website Design"
  };
  render() {
    return (
      <PortfolioSample
        itemclass={this.state.itemclass}
        thumbnile={this.state.thumbnile}
        itemalt={this.state.itemalt}
        itemurl={this.state.itemurl}
        lightboximg={this.state.lightboximg}
        itemtitle={this.state.itemtitle}
        itemcategory={this.state.itemcategory}
      />
    );
  }
}

export default PortfolioItem2;
