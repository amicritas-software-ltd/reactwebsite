import React, { Component } from "react";
import {AnimatedOnScroll} from "react-animated-css-onscroll";
class TeamInfo extends Component {
  render() {
    return (
      <div id="content">
        <section className="team team-list team-wrap padding-top-70 padding-bottom-70">
          <div className="container">
          <AnimatedOnScroll animationIn="fadeInLeft" animationOut="" animationInDuration={1000} animationOutDuration={5000} isVisible={true}>
            <ul className="filter team-filter">
              <li className="tab-title filter-item">
                <a className="active" href="#." data-filter="*">
                  All
                </a>
              </li>
              <li className="filter-item">
                <a href="#." data-filter=".boss" className="">
                  Boss
                </a>
              </li>
              <li className="filter-item">
                <a href="#." data-filter=".web" className="">
                  Web Developer
                </a>
              </li>
              <li className="filter-item">
                <a href="#." data-filter=".android" className="">
                  Mobile App Developer
                </a>
              </li>
              <li className="filter-item">
                <a href="#." data-filter=".market" className="">
                  Marketing
                </a>
              </li>
            </ul>
            </AnimatedOnScroll>
            <AnimatedOnScroll animationIn="fadeInRight" animationOut="" animationInDuration={1000} animationOutDuration={5000} isVisible={true}>
            <div className="">
              <ul className="row items styleul1">
              <li className="col-md-3 item  boss styleli5">
                  <article className="text-left">
                    <img
                      className="img-responsive"
                      src="http://new.uouapps.com/iod-html/html/images/team-img-2-5.jpg"
                      alt="team"
                    />
                    <h5>Jeff Walsh</h5>
                    <span>CEO</span>
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
                </li>
                <li className="col-md-3 item boss styleli1">
                  <article className="text-left">
                  <img
                    className="img-responsive"
                    src="http://new.uouapps.com/iod-html/html/images/team-img-1-1.jpg"
                    alt="member1"
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
                </li>

                <li className="col-md-3 item gd boss styleli2">
                  <article className="text-left">
                  <img
                    className="img-responsive"
                    src="http://solidman.org/wp-content/uploads/2015/11/ken_curry_bw_270px.jpg"
                    alt="member2"
                  />
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
                </li>

                <li className="col-md-3 item gd android styleli3">
                  <article className="text-left">
                  <img
                    className="img-responsive"
                    src="http://new.uouapps.com/iod-html/html/images/team-img-1-3.jpg"
                    alt="member3"
                  />
                  <h5>Sourav Istiak</h5>
                  <span>Mobile App Developer</span>
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
                </li>

                <li className="col-md-3 item gd market styleli4">
                  <article className="text-left">
                  <img
                    className="img-responsive"
                    src="http://new.uouapps.com/iod-html/html/images/team-img-1-4.jpg"
                    alt="member4"
                  />
                  <h5>Priyanka Sharma</h5>
                  <span>Marketting Executive</span>
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
                </li>
                <li className="col-md-3 item gd market styleli7">
                  <article className="text-left">
                    <img
                      className="img-responsive"
                      src="http://new.uouapps.com/iod-html/html/images/team-img-2-7.jpg"
                      alt="team"
                    />
                    <h5>Colin Weiland</h5>
                    <span>Business Advisor</span>
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
                </li>
                <li className="col-md-3 item  web styleli5">
                  <article className="text-left">
                    <img
                      className="img-responsive"
                      src="http://new.uouapps.com/iod-html/html/images/team-img-2-1.jpg"
                      alt="team"
                    />
                    <h5>Anonymous</h5>
                    <span>Web Developer</span>
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
                </li>
              </ul>
            </div>
            </AnimatedOnScroll>
          </div>
        </section>
      </div>
    );
  }
}
export default TeamInfo;
