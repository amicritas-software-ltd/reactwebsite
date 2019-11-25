import React, { Component } from "react";
class Portfolio extends Component {
  render() {
    return (
      <section class="portfolio light-gray-bg padding-top-70 padding-bottom-20">
        <div class="container">
          <div class="heading text-center">
            <h4>Our Recent Work</h4>
          </div>

          <div class="text-center">
            <div
              id="ajax-work-filter"
              class="cbp-l-filters-buttonCenter filter-style-2"
            >
              <div
                data-filter="*"
                class="cbp-filter-item-active cbp-filter-item"
              >
                All
                <div class="cbp-filter-counter"></div>
              </div>
              <div data-filter=".ana" class="cbp-filter-item">
                Analytics
                <div class="cbp-filter-counter"></div>
              </div>
              <div data-filter=".dial" class="cbp-filter-item">
                Dialogue
                <div class="cbp-filter-counter"></div>
              </div>
              <div data-filter=".direc" class="cbp-filter-item">
                Direction
                <div class="cbp-filter-counter"></div>
              </div>
              <div data-filter=".growth" class="cbp-filter-item">
                Growth
                <div class="cbp-filter-counter"></div>
              </div>
              <div data-filter=".sec" class="cbp-filter-item">
                Security
                <div class="cbp-filter-counter"></div>
              </div>
              <div data-filter=".storage" class="cbp-filter-item">
                Storage
                <div class="cbp-filter-counter"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="ajax-work col-3">
          <div class="cbp-item ana dial growth">
            <article class="item">
              <img
                class="img-responsive"
                src="http://new.uouapps.com/iod-html/html/images/portfolio/img-1.jpg"
                alt="portfolio1"
              />
              <div class="over-detail">
                <div class="top-detail">
                  <a href="ajax-work/project1.html" class="cbp-singlePage">
                    <i class="fa fa-link"></i>
                  </a>
                  <a
                    href="http://new.uouapps.com/iod-html/html/images/portfolio/img-1.jpg"
                    class="cbp-lightbox"
                    data-title=""
                  >
                    <i class="icon-magnifier"></i>
                  </a>
                </div>

                <div class="bottom-detail">
                  <h3>Long Project Title can go Here</h3>
                  <span>Category Name</span>
                </div>
              </div>
            </article>
          </div>

          <div class="cbp-item ana dial sec storage">
            <article class="item">
              <img
                class="img-responsive"
                src="http://new.uouapps.com/iod-html/html/images/portfolio/img-2.jpg"
                alt=""
              />
              <div class="over-detail">
                <div class="top-detail">
                  <a href="ajax-work/project2.html" class="cbp-singlePage">
                    <i class="fa fa-link"></i>
                  </a>
                  <a
                    href="http://new.uouapps.com/iod-html/html/images/portfolio/img-2.jpg"
                    class="cbp-lightbox"
                    data-title=""
                  >
                    <i class="icon-magnifier"></i>
                  </a>
                </div>

                <div class="bottom-detail">
                  <h3>Long Project Title can go Here</h3>
                  <span>Category Name</span>
                </div>
              </div>
            </article>
          </div>
          <div class="cbp-item ana sec storage">
            <article class="item">
              <img
                class="img-responsive"
                src="http://new.uouapps.com/iod-html/html/images/portfolio/img-3.jpg"
                alt=""
              />

              <div class="over-detail">
                <div class="top-detail">
                  <a href="ajax-work/project3.html" class="cbp-singlePage">
                    <i class="fa fa-link"></i>
                  </a>
                  <a
                    href="http://new.uouapps.com/iod-html/html/images/portfolio/img-3.jpg"
                    class="cbp-lightbox"
                    data-title=""
                  >
                    <i class="icon-magnifier"></i>
                  </a>
                </div>

                <div class="bottom-detail">
                  <h3>Long Project Title can go Here</h3>
                  <span>Category Name</span>
                </div>
              </div>
            </article>
          </div>

          <div class="cbp-item sec storage">
            <article class="item">
              <img
                class="img-responsive"
                src="http://new.uouapps.com/iod-html/html/images/portfolio/img-4.jpg"
                alt=""
              />

              <div class="over-detail">
                <div class="top-detail">
                  <a href="ajax-work/project4.html" class="cbp-singlePage">
                    <i class="fa fa-link"></i>
                  </a>
                  <a
                    href="http://new.uouapps.com/iod-html/html/images/portfolio/img-4.jpg"
                    class="cbp-lightbox"
                    data-title=""
                  >
                    <i class="icon-magnifier"></i>
                  </a>
                </div>

                <div class="bottom-detail">
                  <h3>Long Project Title can go Here</h3>
                  <span>Category Name</span>
                </div>
              </div>
            </article>
          </div>

          <div class="cbp-item ana sec">
            <article class="item">
              <img
                class="img-responsive"
                src="http://new.uouapps.com/iod-html/html/images/portfolio/img-5.jpg"
                alt=""
              />

              <div class="over-detail">
                <div class="top-detail">
                  <a href="ajax-work/project5.html" class="cbp-singlePage">
                    <i class="fa fa-link"></i>
                  </a>
                  <a
                    href="http://new.uouapps.com/iod-html/html/images/portfolio/img-5.jpg"
                    class="cbp-lightbox"
                    data-title=""
                  >
                    <i class="icon-magnifier"></i>
                  </a>
                </div>

                <div class="bottom-detail">
                  <h3>Long Project Title can go Here</h3>
                  <span>Category Name</span>
                </div>
              </div>
            </article>
          </div>

          <div class="cbp-item ana dial direc">
            <article class="item">
              <img
                class="img-responsive"
                src="http://new.uouapps.com/iod-html/html/images/portfolio/img-6.jpg"
                alt=""
              />

              <div class="over-detail">
                <div class="top-detail">
                  <a href="ajax-work/project6.html" class="cbp-singlePage">
                    <i class="fa fa-link"></i>
                  </a>
                  <a
                    href="http://new.uouapps.com/iod-html/html/images/portfolio/img-6.jpg"
                    class="cbp-lightbox"
                    data-title=""
                  >
                    <i class="icon-magnifier"></i>
                  </a>
                </div>

                <div class="bottom-detail">
                  <h3>Long Project Title can go Here</h3>
                  <span>Category Name</span>
                </div>
              </div>
            </article>
          </div>
        </div>

        <div
          class="text-center margin-top-50 margin-bottom-50 animate fadeInUp"
          data-wow-delay="0.4s"
        >
          <div id="ajax-loadMore">
            <a
              href="ajax-work/loadMore1.html"
              class="cbp-l-loadMore-link btn btn-1"
              rel="nofollow"
            >
              <span class="cbp-l-loadMore-defaultText">
                View Full Portfolio <i class="fa fa-caret-right"></i>
              </span>
              <span class="cbp-l-loadMore-loadingText">
                LOADING... <i class="fa fa-caret-down"></i>
              </span>
              <span class="cbp-l-loadMore-noMoreLoading">
                NO MORE WORKS <i class="fa fa-caret-up"></i>
              </span>
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
