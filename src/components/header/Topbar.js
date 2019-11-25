import React, { Component } from "react";
class Topbar extends Component {
  componentDidMount() {}
  render() {
    return (
      <div className="top-bar">
        <div className="top-info">
          <div className="container">
            <ul className="personal-info">
              <li>
                <p>
                  <i className="fa fa-phone"></i> +8801643059745
                </p>
              </li>
              <li>
                <p>House:1E,Road:04,Sector:11,Uttara </p>
              </li>
              <li>
                <p>info@amicritas.com </p>
              </li>
            </ul>

            <div className="right-sec">
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Topbar;
