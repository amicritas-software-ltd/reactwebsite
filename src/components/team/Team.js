import React, { Component } from "react";
import { Link } from "react-router-dom";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import CEO from "./img/CEO.png";
import Director from "./img/Director.png";
import Managing_Director from "./img/Managing Director.png";
import Admin from "./img/Admin.png";

class Team extends Component {
  render() {
    return (
      <section className="light-gray-bg padding-top-70 padding-bottom-70">
        <AnimatedOnScroll
          animationIn="bounceInLeft"
          animationOut=""
          animationInDuration={1000}
          animationOutDuration={5000}
          isVisible={true}
        >
          <div className="container">
            <div className="heading text-center">
              <h4>Our Team</h4>
            </div>

            <div className="team">
              <div className="row">
                <div className="col-md-3">
                  <article>
                    <img className="img-responsive" src={CEO} alt="CEO" />
                    <h5>Ashraful Alam Neerob</h5>
                    <span>Chairman</span>
                    <ul className="social">
                      <li>
                        <a href="#.">
                          <i className="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#.">
                          <i className="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#.">
                          <i className="fa fa-google"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#.">
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                  </article>
                </div>

                <div className="col-md-3">
                  <article>
                    <img
                      className="img-responsive"
                      src={Managing_Director}
                      alt="Managing Director"
                    />
                    <h5>Md.Sabbir Ahmed</h5>
                    <span>Managing Director</span>
                    <ul className="social">
                      <li>
                        <a href="https://www.facebook.com/Fun2uze">
                          <i className="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#.">
                          <i className="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#.">
                          <i className="fa fa-google"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#.">
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                  </article>
                </div>

                <div className="col-md-3">
                  <article>
                    <img
                      className="img-responsive"
                      src={Director}
                      alt="Director"
                    />
                    <h5>Shamima Akhter Riya</h5>
                    <span>Director</span>
                    <ul className="social">
                      <li>
                        <a href="#.">
                          <i className="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#.">
                          <i className="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#.">
                          <i className="fa fa-google"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#.">
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                  </article>
                </div>

                <div className="col-md-3">
                  <article>
                    <img className="img-responsive" src={Admin} alt="Admin" />
                    <h5>Sourav Hossain</h5>
                    <span>Admin and HR</span>
                    <ul className="social">
                      <li>
                        <a href="https://www.facebook.com/msouravju">
                          <i className="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#.">
                          <i className="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#.">
                          <i className="fa fa-google"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#.">
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </AnimatedOnScroll>
        <AnimatedOnScroll
          animationIn="jello"
          animationOut=""
          animationInDuration={1500}
          animationOutDuration={5000}
          isVisible={true}
        >
          <div className="text-center animate fadeInUp" data-wow-delay="0.4s">
            <Link to="/team" className="btn margin-top-30">
              View Full Team<i className="fa fa-caret-right"></i>
            </Link>
          </div>
        </AnimatedOnScroll>
      </section>
    );
  }
}

export default Team;
