import React, { Component } from "react";
import PortfolioSample from "../PortfolioSamle";
import Thumbnile from "../img/img1.png";
class PortfolioItem1 extends Component {
  state = {
    itemclass: "cbp-item website",
    thumbnile: Thumbnile,
    itemalt: "Item 1",
    itemurl: "https://www.bartaprotikkhon.com/",
    lightboximg: Thumbnile,
    itemtitle: "Newspaper custom website",
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

export default PortfolioItem1;
