import React, { Component } from "react";
import Logo from "../../logo.png";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default" id="mNavbar">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#.">
              <img alt="Brand" src={Logo} />
            </a>
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#.">Home</a>
              </li>
              <li className="dropdown">
                <a
                  href="#."
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  About <span className="caret"></span>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="#.">Company</a>
                  </li>
                  <li>
                    <a href="#.">Team</a>
                  </li>
                  <li>
                    <a href="#.">Presentation</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#.">Services</a>
              </li>
              <li>
                <a href="#.">Portfolio</a>
              </li>
              <li>
                <a href="#.">Blog</a>
              </li>
              <li>
                <a href="#.">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
