import React, { Component } from "react";
import {AnimatedOnScroll} from "react-animated-css-onscroll";

class Features extends Component {
  render() {
    return (
      <section className="features light-gray-bg padding-top-70 padding-bottom-70">
        <div className="container">
          <div className="heading text-center">
            <h4>outstanding features</h4>
          </div>
          <AnimatedOnScroll animationIn="fadeInUp" animationOut="" animationInDuration={1000} animationOutDuration={5000} isVisible={true}>
          <div className="list-style-featured">
            <div className="row no-margin">
              <div className="col-md-4 no-padding">
                <ul className="text-right">
                  <li>
                    <div className="media">
                      <div className="media-body">
                        <h6>IT & Software Solutions</h6>
                        <p>
                          Networking issues, Software reverse engineering and Software Optimization.
                        </p>
                      </div>
                      <div className="media-right">
                        <div className="icon">
                          <i className="fa fa-desktop"></i>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="media">
                      <div className="media-body">
                        <h6>Responsive Designs</h6>
                        <p>
                          Providing responsive designs for websites and mobile apps.
                        </p>
                      </div>
                      <div className="media-right">
                        <div className="icon">
                          <i className="fa fa-tablet"></i>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="media">
                      <div className="media-body">
                        <h6>IT Courses</h6>
                        <p>
                          Providing websites that support all browsers.
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

              <div className="col-md-4 text-center no-padding">
                <img
                  className="img-responsive"
                  src="http://new.uouapps.com/iod-html/html/images/iphone.png"
                  alt="iphone"
                />
              </div>

              <div className="col-md-4 no-padding">
                <ul>
                  <li>
                    <div className="media">
                      <div className="media-left">
                        <div className="icon">
                          <i className="fa fa-gear"></i>
                        </div>
                      </div>
                      <div className="media-body">
                        <h6>Easy to Customize</h6>
                        <p>
                          Easy customizable projects for websites and mobile apps.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="media">
                      <div className="media-left">
                        <div className="icon">
                          <i className="fa fa-star-o"></i>
                        </div>
                      </div>
                      <div className="media-body">
                        <h6>Exlusive Features</h6>
                        <p>
                          Robotics Solutions, Advanced Electronics Solutions and Technical Supports.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="media">
                      <div className="media-left">
                        <div className="icon">
                          <i className="fa fa-lightbulb-o"></i>
                        </div>
                      </div>
                      <div className="media-body">
                        <h6>Innovative Ideas</h6>
                        <p>
                          Pharmacy Management System
                          More than 200+ websites and App Demos.
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
