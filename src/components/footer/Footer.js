import React, { Component } from "react";
import FacebookPage from "../FacebookPage";
import Logo from "../../logo.png";
import Tags from "../tags/Tags";
import Image1 from "./img/img1.png";
import Image2 from "./img/img2.png";
import Image3 from "./img/img3.png";
import Image4 from "./img/img4.png";
import Image5 from "./img/img5.png";
import Image6 from "./img/img6.png";

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
                      src={Image1}
                      alt="img1"
                    />
                  </a>
                </li>
                <li>
                  <a href="#.">
                    <img
                      src={Image2}
                      alt="img2"
                    />
                  </a>
                </li>
                <li>
                  <a href="#.">
                    <img
                      src={Image3}
                      alt="img3"
                    />
                  </a>
                </li>
                <li>
                  <a href="#.">
                    <img
                      src={Image4}
                      alt="img4"
                    />
                  </a>
                </li>
                <li>
                  <a href="#.">
                    <img
                      src={Image5}
                      alt="img5"
                    />
                  </a>
                </li>
                <li>
                  <a href="#.">
                    <img
                      src={Image6}
                      alt="img6"
                    />
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-3">
              <h6>Usefull Tags</h6>
              <Tags></Tags>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
