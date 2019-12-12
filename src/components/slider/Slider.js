import React, { Component } from "react";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import { Link } from "react-router-dom";
class Slider extends Component {
  render() {
    return (
      <AnimatedOnScroll
        animationIn="bounce"
        animationOut=""
        animationInDuration={1000}
        animationOutDuration={5000}
        isVisible={true}
      >
        <section className="home-slide">
          <ul className="slides">
            <li className="slide-img-1" data-stellar-background-ratio="0.6">
              <div className="position-center-center">
                <h1>Welcome to Amicritas</h1>
                <h5>We Code Your Dream</h5>
                <Link to="/about" className="btn margin-top-30">
                  Know More<i className="fa fa-caret-right"></i>
                </Link>
              </div>
            </li>

            <li className="slide-img-2" data-stellar-background-ratio="0.6">
              <div className="position-center-center">
                <h1>Trusted IT Service Provider in Town</h1>
                <h5>Contact Us to get quote</h5>
                <Link to="/contact" className="btn margin-top-30">
                  Contact Us <i className="fa fa-caret-right"></i>
                </Link>
              </div>
            </li>
          </ul>
        </section>
      </AnimatedOnScroll>
    );
  }
}

export default Slider;
