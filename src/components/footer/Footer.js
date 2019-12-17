import React, { Component } from "react";
import FacebookPage from "../FacebookPage";
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
                      <i className="fa fa-map-marker"></i>{" "}
                      House:1E,Road:04,Sector:11,Uttara
                    </p>
                  </li>
                  <li>
                    <p>
                      <i className="fa fa-phone"></i> +(880)164-305-9745
                    </p>
                  </li>
                  <li>
                    <p>
                      <i className="fa fa-envelope"></i>info@amicritas.com
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-3">
              <h6>Like Us on Facebook</h6>
              <FacebookPage></FacebookPage>
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
              <h6>Usefull Tags</h6>
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
