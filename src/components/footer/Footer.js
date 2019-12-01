import React, { Component } from "react";
import Logo from "../../logo.png";
class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <img src={Logo} alt="logo" />
              <div className="about-foot">
                <ul>
                  <li>
                    <p>
                      <i className="fa fa-map-marker"></i> 795 Folsom Ave, Suite
                      600, San Francisco, CA 94107
                    </p>
                  </li>
                  <li>
                    <p>
                      <i className="fa fa-phone"></i> (123) 456-7890
                    </p>
                  </li>
                  <li>
                    <p>
                      <i className="fa fa-envelope"></i> example@example.com
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-3">
              <h6>Twitter Feed</h6>
              <ul className="tweet">
                <li>
                  <p>
                    A Guide to Better Brainstorming
                    <a href="#." className="primary-color">
                      http://enva.to/nfNrz
                    </a>
                    by @jeff_haden
                  </p>
                  <span>May 22, 2014</span>
                </li>
                <li>
                  <p>
                    Are you a student? You only have 48 hours left to grab a
                    full year on Tuts+ for just $45! Don't miss out.
                    <a href="#." className="primary-color">
                      abc
                    </a>
                  </p>
                  <span>May 22, 2014</span>
                </li>
              </ul>
            </div>

            <div className="col-md-3">
              <h6>Photostream</h6>
              <ul className="photo-steam">
                <li>
                  <a href="#.">
                    <img
                      src="http://new.uouapps.com/iod-html/html/images/photo-img-1.jpg"
                      alt="img1"
                    />
                  </a>
                </li>
                <li>
                  <a href="#.">
                    <img
                      src="http://new.uouapps.com/iod-html/html/images/photo-img-2.jpg"
                      alt="img2"
                    />
                  </a>
                </li>
                <li>
                  <a href="#.">
                    <img
                      src="http://new.uouapps.com/iod-html/html/images/photo-img-3.jpg"
                      alt="img3"
                    />
                  </a>
                </li>
                <li>
                  <a href="#.">
                    <img
                      src="http://new.uouapps.com/iod-html/html/images/photo-img-4.jpg"
                      alt="img4"
                    />
                  </a>
                </li>
                <li>
                  <a href="#.">
                    <img
                      src="http://new.uouapps.com/iod-html/html/images/photo-img-5.jpg"
                      alt="img5"
                    />
                  </a>
                </li>
                <li>
                  <a href="#.">
                    <img
                      src="http://new.uouapps.com/iod-html/html/images/photo-img-6.jpg"
                      alt="img6"
                    />
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-3">
              <h6>Categories</h6>
              <ul className="tags">
                <li>
                  <a href="#.">User Experience</a>
                </li>
                <li>
                  <a href="#.">html 5</a>
                </li>
                <li>
                  <a href="#.">Css 3</a>
                </li>
                <li>
                  <a href="#.">Web Design</a>
                </li>
                <li>
                  <a href="#.">Social Media</a>
                </li>
                <li>
                  <a href="#.">Web Development</a>
                </li>
                <li>
                  <a href="#.">Print Design</a>
                </li>
                <li>
                  <a href="#.">e-commerce</a>
                </li>
                <li>
                  <a href="#.">Java script</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
