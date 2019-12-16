import React, { Component } from "react";
import {AnimatedOnScroll} from "react-animated-css-onscroll";
import iphoneImage from "./img/iphone.png";

class Features extends Component {
  render() {
    return (
      <section className="features light-gray-bg padding-top-70 padding-bottom-70">
        <div className="container">
          <div className="heading text-center">
            <h4>Why Choose Us</h4>
          </div>
          <AnimatedOnScroll animationIn="fadeInUp" animationOut="" animationInDuration={1000} animationOutDuration={5000} isVisible={true}>
          <div className="list-style-featured">
            <div className="row no-margin">
              <div className="col-md-4 no-padding">
                <ul className="text-right">
                  <li className="rotateonhover">
                    <div className="media">
                      <div className="media-body">
                        <h6>All in one IT Services</h6>
                        <p>
                          Web, Mobile, Software solutions with SEO, Marketing & Business plan.
                        </p>
                      </div>
                      <div className="media-right">
                        <div className="icon">
                          <i className="fa fa-desktop"></i>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="rotateonhover">
                    <div className="media">
                      <div className="media-body">
                        <h6>Responsive Design</h6>
                        <p>
                          We make your product responsive to use it on any devices and any platform.
                        </p>
                      </div>
                      <div className="media-right">
                        <div className="icon">
                          <i className="fa fa-tablet"></i>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="rotateonhover">
                    <div className="media">
                      <div className="media-body">
                        <h6>Basic Training</h6>
                        <p>
                          We provide you training depend on your need after product development.
                        </p>
                      </div>
                      <div className="media-right">
                        <div className="icon">
                          <i className="fa fa-chrome"></i>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="rotateonhover">
                    <div className="media">
                      <div className="media-body">
                        <h6>24/7 technical Support</h6>
                        <p>
                          We give 24/7 premium support to our respected customers.
                        </p>
                      </div>
                      <div className="media-right">
                        <div className="icon">
                          <i className="fa fa-chrome"></i>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="col-md-4 text-center no-padding rotateImage">
                <img
                  className="img-responsive"
                  src={iphoneImage}
                  alt="iphone"
                />
              </div>

              <div className="col-md-4 no-padding">
                <ul>
                  <li className="rotateonhover">
                    <div className="media">
                      <div className="media-left">
                        <div className="icon">
                          <i className="fa fa-gear"></i>
                        </div>
                      </div>
                      <div className="media-body">
                        <h6>Innovative Ideas</h6>
                        <p>
                          We help our clients by giving ideas to grow their business more fast.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="rotateonhover">
                    <div className="media">
                      <div className="media-left">
                        <div className="icon">
                          <i className="fa fa-star-o"></i>
                        </div>
                      </div>
                      <div className="media-body">
                        <h6>Security & Stability</h6>
                        <p>
                          We focus on security and maintain it by our certified ethical hackers.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="rotateonhover">
                    <div className="media">
                      <div className="media-left">
                        <div className="icon">
                          <i className="fa fa-lightbulb-o"></i>
                        </div>
                      </div>
                      <div className="media-body">
                        <h6>We are experienced</h6>
                        <p>
                          We have 5+ years experienced developers ready to serve you.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="rotateonhover">
                    <div className="media">
                      <div className="media-left">
                        <div className="icon">
                          <i className="fa fa-lightbulb-o"></i>
                        </div>
                      </div>
                      <div className="media-body">
                        <h6>We focus on your Demand</h6>
                        <p>
                          We make what you exactly want. We care your think too.
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>              
            </div>
          </div>
          </AnimatedOnScroll>
        </div>
      </section>
    );
  }
}

export default Features;
