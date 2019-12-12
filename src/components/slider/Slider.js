import React, { Component } from "react";
import {AnimatedOnScroll} from "react-animated-css-onscroll";
class Slider extends Component {
  render() {
    return (
      <AnimatedOnScroll animationIn="bounce" animationOut="" animationInDuration={1000} animationOutDuration={5000} isVisible={true}>
      <section className="home-slide">
        <ul className="slides">
          <li className="slide-img-1" data-stellar-background-ratio="0.6">
            <div className="position-center-center">
              <h1>Welcome to Amicritas</h1>
              <h5>Vision of great future</h5>
              <a href="#." className="btn margin-top-30">
                Read More <i className="fa fa-caret-right"></i>
              </a>
            </div>
          </li>

          <li className="slide-img-2" data-stellar-background-ratio="0.6">
            <div className="position-center-center">
              <h1>Welcome to ASL</h1>
              <h5>Second Slide</h5>
              <a href="#." className="btn margin-top-30">
                Read More <i className="fa fa-caret-right"></i>
              </a>
            </div>
          </li>
        </ul>
      </section>
      </AnimatedOnScroll>
    );
  }
}

export default Slider;
