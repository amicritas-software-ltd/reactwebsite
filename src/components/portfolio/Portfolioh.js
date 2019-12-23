import React, { Component } from "react";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import { Link } from "react-router-dom";
import img1 from "./img/img1.jpg";
import img2 from "./img/img2.jpg";
import img3 from "./img/img3.jpg";
import img4 from "./img/img4.jpg";
import img5 from "./img/img5.jpg";
import img6 from "./img/img6.jpg";

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
                <div data-filter=".web" className="cbp-filter-item">
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
                <div data-filter=".service" className="cbp-filter-item">
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
            <div className="cbp-item ana dial security">
              <article className="item">
                <img
                  className="img-responsive"
                  src={img1}
                  alt="portfolio1"
                />
                <div className="over-detail">
                  <div className="top-detail">
                    <a href="#.">
                      <i className="fa fa-link"></i>
                    </a>
                    <a
                      href="http://new.uouapps.com/iod-html/html/images/portfolio/img-1.jpg"
                      className="cbp-lightbox"
                      data-title=""
                    >
                      <i className="fa fa-search"></i>
                    </a>
                  </div>

                  <div className="bottom-detail">
                    <h3>Long Project Title can go Here</h3>
                    <span>Category Name</span>
                  </div>
                </div>
              </article>
            </div>

            <div className="cbp-item ana dial sec mobile app">
              <article className="item">
                <img
                  className="img-responsive"
                  src={img2}
                  alt=""
                />
                <div className="over-detail">
                  <div className="top-detail">
                    <a href="#.">
                      <i className="fa fa-link"></i>
                    </a>
                    <a
                      href="http://new.uouapps.com/iod-html/html/images/portfolio/img-2.jpg"
                      className="cbp-lightbox"
                      data-title=""
                    >
                      <i className="fa fa-search"></i>
                    </a>
                  </div>

                  <div className="bottom-detail">
                    <h3>Long Project Title can go Here</h3>
                    <span>Category Name</span>
                  </div>
                </div>
              </article>
            </div>
            <div className="cbp-item ana sec websites websites">
              <article className="item">
                <img
                  className="img-responsive"
                  src={img3}
                  alt=""
                />

                <div className="over-detail">
                  <div className="top-detail">
                    <a href="#.">
                      <i className="fa fa-link"></i>
                    </a>
                    <a
                      href="http://new.uouapps.com/iod-html/html/images/portfolio/img-3.jpg"
                      className="cbp-lightbox"
                      data-title=""
                    >
                      <i className="fa fa-search"></i>
                    </a>
                  </div>

                  <div className="bottom-detail">
                    <h3>Long Project Title can go Here</h3>
                    <span>Category Name</span>
                  </div>
                </div>
              </article>
            </div>

            <div className="cbp-item ana sec websites websites">
              <article className="item">
                <img
                  className="img-responsive"
                  src={img4}
                  alt=""
                />

                <div className="over-detail">
                  <div className="top-detail">
                    <a href="#.">
                      <i className="fa fa-link"></i>
                    </a>
                    <a
                      href="http://new.uouapps.com/iod-html/html/images/portfolio/img-4.jpg"
                      className="cbp-lightbox"
                      data-title=""
                    >
                      <i className="fa fa-search"></i>
                    </a>
                  </div>

                  <div className="bottom-detail">
                    <h3>Long Project Title can go Here</h3>
                    <span>Category Name</span>
                  </div>
                </div>
              </article>
            </div>

            <div className="cbp-item ana sec">
              <article className="item">
                <img
                  className="img-responsive"
                  src={img5}
                  alt=""
                />

                <div className="over-detail">
                  <div className="top-detail">
                    <a href="#.">
                      <i className="fa fa-link"></i>
                    </a>
                    <a
                      href="http://new.uouapps.com/iod-html/html/images/portfolio/img-5.jpg"
                      className="cbp-lightbox"
                      data-title=""
                    >
                      <i className="fa fa-search"></i>
                    </a>
                  </div>

                  <div className="bottom-detail">
                    <h3>Long Project Title can go Here</h3>
                    <span>Category Name</span>
                  </div>
                </div>
              </article>
            </div>

            <div className="cbp-item ana dial direc">
              <article className="item">
                <img
                  className="img-responsive"
                  src={img6}
                  alt=""
                />

                <div className="over-detail">
                  <div className="top-detail">
                    <a href="#.">
                      <i className="fa fa-link"></i>
                    </a>
                    <a
                      href="http://new.uouapps.com/iod-html/html/images/portfolio/img-6.jpg"
                      className="cbp-lightbox"
                      data-title=""
                    >
                      <i className="fa fa-search"></i>
                    </a>
                  </div>

                  <div className="bottom-detail">
                    <h3>Long Project Title can go Here</h3>
                    <span>Category Name</span>
                  </div>
                </div>
              </article>
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
