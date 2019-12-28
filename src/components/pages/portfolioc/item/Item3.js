import React, { Component } from "react";
import PortfolioSample from "../PortfolioSamle";
import Thumbnile from "../img/img4.png";
class PortfolioItem3 extends Component {
  state = {
    itemclass: "cbp-item website",
    thumbnile: Thumbnile,
    itemalt: "Item 2",
    itemurl: "https://vitasasp.com/",
    lightboximg: Thumbnile,
    itemtitle: "Wordpress WebSite",
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

export default PortfolioItem3;
