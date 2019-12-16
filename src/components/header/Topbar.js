import React, { Component } from "react";
class Topbar extends Component {
  componentDidMount() {}
  render() {
    return (
      <div className="top-bar">
        <div className="top-info">
          <div className="container-fluid">
            <ul className="personal-info">
              <li>
                <p>
                  <i className="fa fa-phone"></i> +8801643059745
                </p>
              </li>
              <li>
                <p>
                  <i
                    className="fa fa-mobile-phone"
                    style={{ fontSize: 20 }}
                  ></i>
                  +8801315559139
                </p>
              </li>
              <li>
                <p>
                  <i className="fa fa-envelope"></i>info@amicritas.com
                </p>
              </li>
            </ul>

            <div className="right-sec">
              <ul className="social">
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://facebook.com/Amicritas"
                  >
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/amicritas"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>

                  <a href="https://pinterest.com/amicritas" target="_blank"
                    rel="noopener noreferrer">
                    <i className="fa fa-pinterest"></i>

                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/amicritas-software-ltd-005b1b199/" target="_blank" rel="noopener noreferrer">
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
