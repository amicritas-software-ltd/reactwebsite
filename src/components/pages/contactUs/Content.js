import React, { Component } from "react";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import MyMap from "./Map";
import ContactForm from "./ContactForm";

class Content extends Component {
  render() {
    return (
      <div id="content">
        <section className="padding-bottom-70">
          <div
            className="contact-info padding-top-100 padding-bottom-100"
            data-stellar-background-ratio="1"
          >
            <AnimatedOnScroll
              animationIn="bounceInLeft"
              animationOut=""
              animationInDuration={1000}
              animationOutDuration={5000}
              isVisible={true}
            >
              <div className="container">
                <div className="heading white text-center rabbani">
                  <h4>Our Office</h4>
                  <span>We are always available to respond you</span>
                </div>
                <ul className="row">
                  <li className="col-sm-4"></li>
                  <li className="col-sm-4">
                    <article>
                      <h5>Dhaka</h5>
                      <p>House:1E, Road:04, Sector:11, Uttara</p>
                      <p>Dhaka 1230, Bangladesh</p>
                      <span className="margin-top-30">
                        <i className="fa fa-phone-square"></i> +8801643059745
                      </span>
                      <span>
                        <i className="fa fa-envelope"></i> info@amicritas.com
                      </span>
                    </article>
                  </li>
                  <li className="col-sm-4"></li>
                </ul>
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
            <div className="container">
              <div className="heading text-left margin-top-70 margin-bottom-30">
                <h4>Send us your queries</h4>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="contact-form">
                    <div id="contact_message" className="success-msg">
                      <i className="fa fa-paper-plane-o"></i>
                    </div>
                    <ContactForm></ContactForm>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div style={{ height: "70vh", width: "100%" }}>
                    <MyMap></MyMap>
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

export default Content;
