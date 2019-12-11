import React, { Component } from "react";
import { Link } from "react-router-dom";
class Portfolioh extends Component {
  render() {
    return (
      <section className="portfolio light-gray-bg padding-top-70 padding-bottom-20">
        <div className="container">
          <div className="heading text-center">
            <h4>Our Recent Work</h4>
          </div>

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
                Analytics
                <div className="cbp-filter-counter"></div>
              </div>
              <div data-filter=".dial" className="cbp-filter-item">
                Ecommerce
                <div className="cbp-filter-counter"></div>
              </div>
              <div data-filter=".direc" className="cbp-filter-item">
                Android App
                <div className="cbp-filter-counter"></div>
              </div>
              <div data-filter=".growth" className="cbp-filter-item">
                Growth
                <div className="cbp-filter-counter"></div>
              </div>
              <div data-filter=".sec" className="cbp-filter-item">
                Security
                <div className="cbp-filter-counter"></div>
              </div>
              <div data-filter=".storage" className="cbp-filter-item">
                Storage
                <div className="cbp-filter-counter"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="ajax-work col-3">
          <div className="cbp-item ana dial growth">
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

          <div className="cbp-item ana dial sec storage">
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
          <div className="cbp-item ana sec storage">
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

          <div className="cbp-item sec storage">
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

        <div
          className="text-center margin-top-50 margin-bottom-50 animate fadeInUp"
          data-wow-delay="0.4s"
        >
          <Link to="/portfolio" class="btn margin-top-30">
            View all <i class="fa fa-caret-right"></i>
          </Link>
        </div>
      </section>
    );
  }
}

export default Portfolioh;
