import React, { Component } from "react";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import PortfolioItem1 from "./item/Item1";
import PortfolioItem2 from "./item/Item2";
import PortfolioItem3 from "./item/Item3";
import PortfolioItem4 from "./item/Item4";

class Portfolioc extends Component {
  render() {
    return (
      <section className="portfolio light-gray-bg padding-top-70 padding-bottom-20">
        <div className="container">
          <div className="heading text-center">
            <h4>Our Recent Work</h4>
          </div>
          <AnimatedOnScroll
            animationIn="bounceInLeft"
            animationOut=""
            animationInDuration={1000}
            animationOutDuration={5000}
            isVisible={true}
          >
            <div className="text-center">
              <div
                id="ajax-work-filter"
                className="cbp-l-filters-buttonCenter filter-style-2"
              >
                <div
                  data-filter="*"
                  className="cbp-filter-item-active cbp-filter-item"
                >
                  All
                  <div className="cbp-filter-counter"></div>
                </div>
                <div data-filter=".website" className="cbp-filter-item">
                  Websites
                  <div className="cbp-filter-counter"></div>
                </div>
                <div data-filter=".mobile" className="cbp-filter-item">
                  Mobile App
                  <div className="cbp-filter-counter"></div>
                </div>
                <div data-filter=".software" className="cbp-filter-item">
                  Software
                  <div className="cbp-filter-counter"></div>
                </div>
                <div data-filter=".solution" className="cbp-filter-item">
                  IT Solutions
                  <div className="cbp-filter-counter"></div>
                </div>
                <div data-filter=".other" className="cbp-filter-item">
                  Others
                  <div className="cbp-filter-counter"></div>
                </div>
              </div>
            </div>
          </AnimatedOnScroll>
        </div>
        <AnimatedOnScroll
          animationIn="bounceInRight"
          animationOut=""
          animationInDuration={1000}
          animationOutDuration={5000}
          isVisible={true}
        >
          <div className="ajax-work col-3">
            <PortfolioItem1></PortfolioItem1>
            <PortfolioItem2></PortfolioItem2>
            <PortfolioItem3></PortfolioItem3>
            <PortfolioItem4></PortfolioItem4>
          </div>
        </AnimatedOnScroll>
        <div
          className="text-center margin-top-50 margin-bottom-50 animate fadeInUp"
          data-wow-delay="0.4s"
        ></div>
      </section>
    );
  }
}

export default Portfolioc;
