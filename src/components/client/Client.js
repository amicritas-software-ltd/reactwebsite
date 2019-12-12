import React, { Component } from "react";
import {AnimatedOnScroll} from "react-animated-css-onscroll";
class Client extends Component {
  render() {
    return (
      <section className="clients padding-top-100 padding-bottom-100">
        <AnimatedOnScroll animationIn="fadeInLeft" animationOut="" animationInDuration={1000} animationOutDuration={5000} isVisible={true}>
        <div className="container">
          <div className="heading text-center">
            <h4>Our Amazing Clients</h4>
            <span>
              We trust in longlasting partnerships with the most important
              brands on the market
            </span>{" "}
          </div>

          <div className="single-slide">
            <div className="item">
              <ul className="row col-5">
                <li>
                  <a href="#.">
                    <img
                      className="img-responsive"
                      src="http://new.uouapps.com/iod-html/html/images/client-img-1.jpg"
                      alt="client 1"
                    />
                  </a>
                </li>
                <li>
                  <a href="#.">
                    <img
                      className="img-responsive"
                      src="http://new.uouapps.com/iod-html/html/images/client-img-2.jpg"
                      alt="client 2"
                    />
                  </a>
                </li>
                <li>
                  <a href="#.">
                    <img
                      className="img-responsive"
                      src="http://new.uouapps.com/iod-html/html/images/client-img-3.jpg"
                      alt="client 3"
                    />
                  </a>
                </li>
                <li>
                  <a href="#.">
                    <img
                      className="img-responsive"
                      src="http://new.uouapps.com/iod-html/html/images/client-img-4.jpg"
                      alt="client 4"
                    />
                  </a>
                </li>
                <li>
                  <a href="#.">
                    <img
                      className="img-responsive"
                      src="http://new.uouapps.com/iod-html/html/images/client-img-5.jpg"
                      alt="client 5"
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div className="item">
              <ul className="row col-5">
                <li>
                  <a href="#.">
                    <img
                      className="img-responsive"
                      src="http://new.uouapps.com/iod-html/html/images/client-img-4.jpg"
                      alt="client 6"
                    />
                  </a>
                </li>
                <li>
                  <a href="#.">
                    <img
                      className="img-responsive"
                      src="http://new.uouapps.com/iod-html/html/images/client-img-5.jpg"
                      alt="client 7"
                    />
                  </a>
                </li>
                <li>
                  <a href="#.">
                    <img
                      className="img-responsive"
                      src="http://new.uouapps.com/iod-html/html/images/client-img-3.jpg"
                      alt="client 8"
                    />
                  </a>
                </li>
                <li>
                  <a href="#.">
                    <img
                      className="img-responsive"
                      src="http://new.uouapps.com/iod-html/html/images/client-img-1.jpg"
                      alt="client 9"
                    />
                  </a>
                </li>
                <li>
                  <a href="#.">
                    <img
                      className="img-responsive"
                      src="http://new.uouapps.com/iod-html/html/images/client-img-2.jpg"
                      alt="client 10"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        </AnimatedOnScroll>
      </section>
    );
  }
}

export default Client;
