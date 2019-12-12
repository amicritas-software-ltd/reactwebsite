import React, { Component } from "react";
import {AnimatedOnScroll} from "react-animated-css-onscroll";
class Portfolioc extends Component {
  render() {
    return (
      <section className="portfolio light-gray-bg padding-top-70 padding-bottom-20">
        <div className="container">
          <div className="heading text-center">
            <h4>Our Recent Work</h4>
          </div>
          <AnimatedOnScroll animationIn="bounceInLeft" animationOut="" animationInDuration={1000} animationOutDuration={5000} isVisible={true}>
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
              <div data-filter=".ana" className="cbp-filter-item">
                Websites
                <div className="cbp-filter-counter"></div>
              </div>
              <div data-filter=".dial" className="cbp-filter-item">
                Mobile App
                <div className="cbp-filter-counter"></div>
              </div>
              <div data-filter=".direc" className="cbp-filter-item">
                Software
                <div className="cbp-filter-counter"></div>
              </div>
              <div data-filter=".growth" className="cbp-filter-item">
                IT Services
                <div className="cbp-filter-counter"></div>
              </div>
              <div data-filter=".sec" className="cbp-filter-item">
                Security
                <div className="cbp-filter-counter"></div>
              </div>
            </div>
          </div>
          </AnimatedOnScroll>
        </div>
        <AnimatedOnScroll animationIn="bounceInRight" animationOut="" animationInDuration={1000} animationOutDuration={5000} isVisible={true}>
        <div className="ajax-work col-3">
          <div className="cbp-item ana dial security">
            <article className="item">
              <img
                className="img-responsive"
                src="http://new.uouapps.com/iod-html/html/images/portfolio/img-1.jpg"
                alt="portfolio1"
              />
              <div className="over-detail">
                <div className="top-detail">
                  <a href="ajax-work/project1.html" className="cbp-singlePage">
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
                src="http://new.uouapps.com/iod-html/html/images/portfolio/img-2.jpg"
                alt=""
              />
              <div className="over-detail">
                <div className="top-detail">
                  <a href="ajax-work/project2.html" className="cbp-singlePage">
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
          <div className="cbp-item ana sec websites">
            <article className="item">
              <img
                className="img-responsive"
                src="http://new.uouapps.com/iod-html/html/images/portfolio/img-3.jpg"
                alt=""
              />

              <div className="over-detail">
                <div className="top-detail">
                  <a href="ajax-work/project3.html" className="cbp-singlePage">
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
          
          <div className="cbp-item ana sec websites">
            <article className="item">
              <img
                className="img-responsive"
                src="http://new.uouapps.com/iod-html/html/images/portfolio/img-4.jpg"
                alt=""
              />

              <div className="over-detail">
                <div className="top-detail">
                  <a href="ajax-work/project3.html" className="cbp-singlePage">
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
          <div className="cbp-item ana sec websites">
            <article className="item">
              <img
                className="img-responsive"
                src="http://new.uouapps.com/iod-html/html/images/portfolio/img-5.jpg"
                alt=""
              />

              <div className="over-detail">
                <div className="top-detail">
                  <a href="ajax-work/project3.html" className="cbp-singlePage">
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
          <div className="cbp-item ana sec websites">
            <article className="item">
              <img
                className="img-responsive"
                src="http://new.uouapps.com/iod-html/html/images/portfolio/img-6.jpg"
                alt=""
              />

              <div className="over-detail">
                <div className="top-detail">
                  <a href="ajax-work/project3.html" className="cbp-singlePage">
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
          <div className="cbp-item ana sec websites">
            <article className="item">
              <img
                className="img-responsive"
                src="http://new.uouapps.com/iod-html/html/images/portfolio/img-2.jpg"
                alt=""
              />

              <div className="over-detail">
                <div className="top-detail">
                  <a href="ajax-work/project3.html" className="cbp-singlePage">
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
          <div className="cbp-item ana sec websites">
            <article className="item">
              <img
                className="img-responsive"
                src="http://new.uouapps.com/iod-html/html/images/portfolio/img-1.jpg"
                alt=""
              />

              <div className="over-detail">
                <div className="top-detail">
                  <a href="ajax-work/project3.html" className="cbp-singlePage">
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
          <div className="cbp-item ana sec websites">
            <article className="item">
              <img
                className="img-responsive"
                src="http://new.uouapps.com/iod-html/html/images/portfolio/img-4.jpg"
                alt=""
              />

              <div className="over-detail">
                <div className="top-detail">
                  <a href="ajax-work/project3.html" className="cbp-singlePage">
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
          <div className="cbp-item ana sec websites">
            <article className="item">
              <img
                className="img-responsive"
                src="http://new.uouapps.com/iod-html/html/images/portfolio/img-6.jpg"
                alt=""
              />

              <div className="over-detail">
                <div className="top-detail">
                  <a href="ajax-work/project3.html" className="cbp-singlePage">
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
          <div className="cbp-item ana sec websites">
            <article className="item">
              <img
                className="img-responsive"
                src="http://new.uouapps.com/iod-html/html/images/portfolio/img-4.jpg"
                alt=""
              />

              <div className="over-detail">
                <div className="top-detail">
                  <a href="ajax-work/project3.html" className="cbp-singlePage">
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
          <div className="cbp-item ana sec websites">
            <article className="item">
              <img
                className="img-responsive"
                src="http://new.uouapps.com/iod-html/html/images/portfolio/img-2.jpg"
                alt=""
              />

              <div className="over-detail">
                <div className="top-detail">
                  <a href="ajax-work/project3.html" className="cbp-singlePage">
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
          <div className="cbp-item ana sec websites">
            <article className="item">
              <img
                className="img-responsive"
                src="http://new.uouapps.com/iod-html/html/images/portfolio/img-1.jpg"
                alt=""
              />

              <div className="over-detail">
                <div className="top-detail">
                  <a href="ajax-work/project3.html" className="cbp-singlePage">
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
          <div className="cbp-item ana sec websites">
            <article className="item">
              <img
                className="img-responsive"
                src="http://new.uouapps.com/iod-html/html/images/portfolio/img-6.jpg"
                alt=""
              />

              <div className="over-detail">
                <div className="top-detail">
                  <a href="ajax-work/project3.html" className="cbp-singlePage">
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
          <div className="cbp-item ana sec websites">
            <article className="item">
              <img
                className="img-responsive"
                src="http://new.uouapps.com/iod-html/html/images/portfolio/img-1.jpg"
                alt=""
              />

              <div className="over-detail">
                <div className="top-detail">
                  <a href="ajax-work/project3.html" className="cbp-singlePage">
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

          <div className="cbp-item sec software">
            <article className="item">
              <img
                className="img-responsive"
                src="http://new.uouapps.com/iod-html/html/images/portfolio/img-4.jpg"
                alt=""
              />

              <div className="over-detail">
                <div className="top-detail">
                  <a href="ajax-work/project4.html" className="cbp-singlePage">
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
                src="http://new.uouapps.com/iod-html/html/images/portfolio/img-5.jpg"
                alt=""
              />

              <div className="over-detail">
                <div className="top-detail">
                  <a href="ajax-work/project5.html" className="cbp-singlePage">
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
                src="http://new.uouapps.com/iod-html/html/images/portfolio/img-6.jpg"
                alt=""
              />

              <div className="over-detail">
                <div className="top-detail">
                  <a href="ajax-work/project6.html" className="cbp-singlePage">
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
        <div
          className="text-center margin-top-50 margin-bottom-50 animate fadeInUp"
          data-wow-delay="0.4s"
        >
        </div>
      </section>
    );
  }
}

export default Portfolioc;
