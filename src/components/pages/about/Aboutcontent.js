import React, { Component } from "react";
import {AnimatedOnScroll} from "react-animated-css-onscroll";
class Aboutcontent extends Component {
  state = {};
  render() {
    return (
      <div id="content">
        <section className="padding-top-70 padding-bottom-70">
        <AnimatedOnScroll animationIn="fadeInLeftBig" animationOut="" animationInDuration={1000} animationOutDuration={5000} isVisible={true}>
          <div className="container">
            <div className="who-we">
              <div className="row">
                <div className="col-md-6">
                  <h3 className="font-normal">who we are</h3>
                  <h6>
                  Welcome to  Amicritas Software Ltd., one of the best software companies in Bangladesh.
                  </h6>
                  <p>
                  Welcome to a company where your ideas count, where your determination creates a new world, where your talent and hard-works are rewarded. At Amicritas we always endeavor to lead towards development and creating a flexible, dynamic and cooperative organizational cultural.<br />
                    <br />
                    Amicritas Software Ltd. is one of the promising software, web application & mobile application development companies of Bangladesh which aims at creating a new standard in the era of software technology.
                    <br />
                    <br />
                    Today we're proud to boast a strong team of Developers, who thrive on rolling up their sleeves and convert your imaginations into code and meeting your business needs.
                  </p>
                </div>
                <div className="col-md-6">
                  <ul className="row">
                    <li className="col-sm-6">
                      <i className="fa fa-eye"></i>
                      <h5>our vision</h5>
                      <p>
                        Amicritas will be the first choice solution partner in the technology sector providing IT and Communication services to businesses throughout the region.
                      </p>
                    </li>

                    <li className="col-sm-6">
                      <i className="fa fa-rocket"></i>
                      <h5>our mission</h5>
                      <p>
                      To be the global leader in IT Services. Building on our technologies, competencies and customer interests, and creating value for our stakeholders and customers.
                      </p>
                    </li>

                    <li className="col-sm-6">
                      <i className="fa fa-diamond"></i>
                      <h5>our vision</h5>
                      <p>
                        We will become and integral part of our clients's success, collaborating with them to achieve their strategic objectives whilst creating long lasting business value through the delivery and management of their technology.
                      </p>
                    </li>

                    <li className="col-sm-6">
                      <i className="fa fa-flag"></i>
                      <h5>our vision</h5>
                      <p>
                        Our team of talented,experienced and motivated industry specialists will be recognised as the best in their field. Our continued success will be driven by our people who will share in it.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          </AnimatedOnScroll>
        </section>
      </div>
    );
  }
}

export default Aboutcontent;
