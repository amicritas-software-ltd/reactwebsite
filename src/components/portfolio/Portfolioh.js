import React, { Component } from "react";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import { Link } from "react-router-dom";
import PortfolioItem1 from "../pages/portfolioc/item/Item1";
import PortfolioItem2 from "../pages/portfolioc/item/Item2";
import PortfolioItem3 from "../pages/portfolioc/item/Item3";
import PortfolioItem4 from "../pages/portfolioc/item/Item4";

class Portfolioh extends Component {
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
                  Web Development
                  <div className="cbp-filter-counter"></div>
                </div>
                <div data-filter=".mobile" className="cbp-filter-item">
                  Mobile app
                  <div className="cbp-filter-counter"></div>
                </div>
                <div data-filter=".software" className="cbp-filter-item">
                  Softwares
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
        <AnimatedOnScroll
          animationIn="jello"
          animationOut=""
          animationInDuration={1500}
          animationOutDuration={5000}
          isVisible={true}
        >
          <div
            className="text-center margin-top-50 margin-bottom-50 animate fadeInUp"
            data-wow-delay="0.4s"
          >
            <Link to="/portfolio" className="btn margin-top-30">
              View Full Portfolio<i className="fa fa-caret-right"></i>
            </Link>
          </div>
        </AnimatedOnScroll>
      </section>
    );
  }
}

export default Portfolioh;
