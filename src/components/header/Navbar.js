import React, { Component } from "react";
import Logo from "../../logo.png";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="sticky">
          <div className="container">
            <div className="logo">
              <a href="#.">
                <img className="img-responsive" src={Logo} alt="" />
              </a>
            </div>

            <ul className="nav ownmenu">
              <li className="active">
                <a href="#.">Home </a>
                <ul className="dropdown">
                  <li>
                    <a href="#.">Home Boxed</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#.">Pages </a>
                <ul className="dropdown">
                  <li>
                    <a href="#.">About</a>
                  </li>
                  <li>
                    <a href="#.">Shop</a>
                    <ul className="dropdown">
                      <li>
                        <a href="#.">Shop</a>
                      </li>
                      <li>
                        <a href="#.">Shop Single</a>
                      </li>
                      <li>
                        <a href="#.">Checkout Step1</a>
                      </li>
                      <li>
                        <a href="#.">Checkout Step2</a>
                      </li>
                      <li>
                        <a href="#.">Checkout Step3</a>
                      </li>
                      <li>
                        <a href="#.">Checkout Address(step2)</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#.">Services </a>
                    <ul className="dropdown">
                      <li>
                        <a href="#.">Services Version 1</a>
                      </li>
                      <li>
                        <a href="#.">Services Version 2</a>
                      </li>
                      <li>
                        <a href="#.">Services Version 3</a>
                      </li>
                      <li>
                        <a href="#.">Services Version 4</a>
                      </li>
                      <li>
                        <a href="#.">Services Version 5</a>
                      </li>
                      <li>
                        <a href="#.">Services Shrefries</a>
                      </li>
                      <li>
                        <a href="#.">Services Annual Reports</a>
                      </li>
                      <li>
                        <a href="#.">Services Media Relations</a>
                      </li>
                      <li>
                        <a href="#.">Annual Left Report Single</a>
                      </li>
                      <li>
                        <a href="#.">Annual Right Report Single</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#.">Team </a>
                    <ul className="dropdown">
                      <li>
                        <a href="#.">Team 2 Columns</a>
                      </li>
                      <li>
                        <a href="#.">Team 3 Columns</a>
                      </li>
                      <li>
                        <a href="#.">Team 4 Columns</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#.">Jobs </a>
                    <ul className="dropdown">
                      <li>
                        <a href="#.">Jobs Right Sidebar </a>
                      </li>
                      <li>
                        <a href="#.">Jobs Left Sidebar </a>
                      </li>
                      <li>
                        <a href="#.">Jobs (single) Left Sidebar </a>
                      </li>
                      <li>
                        <a href="#.">Jobs (single) Right Sidebar </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#.">Revenues </a>
                  </li>
                  <li>
                    <a href="#.">Company Presentation</a>
                  </li>
                  <li>
                    <a href="#.">Blog </a>
                  </li>
                  <li>
                    <a href="#.">Blog Single </a>
                  </li>
                  <li>
                    <a href="#.">Contact</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#.">About </a>
              </li>
              <li>
                <a href="#.">Services </a>
                <ul className="dropdown">
                  <li>
                    <a href="#.">Services Version 1</a>
                  </li>
                  <li>
                    <a href="#.">Services Version 2</a>
                  </li>
                  <li>
                    <a href="#.">Services Version 3</a>
                  </li>
                  <li>
                    <a href="#.">Services Version 4</a>
                  </li>
                  <li>
                    <a href="#.">Services Version 5</a>
                  </li>
                  <li>
                    <a href="#.">Services Shrefries</a>
                  </li>
                  <li>
                    <a href="#.">Services Shrefries</a>
                  </li>
                  <li>
                    <a href="#.">Services Annual Reports</a>
                  </li>
                  <li>
                    <a href="#.">Services Media Relations</a>
                  </li>
                  <li>
                    <a href="#.">Annual Left Report Single</a>
                  </li>
                  <li>
                    <a href="#.">Annual Right Report Single</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#.">Team </a>
                <ul className="dropdown">
                  <li>
                    <a href="#.">Team 2 Columns</a>
                  </li>
                  <li>
                    <a href="#.">Team 3 Columns</a>
                  </li>
                  <li>
                    <a href="#.">Team 4 Columns</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#.">Jobs </a>
                <ul className="dropdown">
                  <li>
                    <a href="#.">Jobs Right Sidebar </a>
                  </li>
                  <li>
                    <a href="#.">Jobs Left Sidebar </a>
                  </li>
                  <li>
                    <a href="#.">Jobs (single) Left Sidebar </a>
                  </li>
                  <li>
                    <a href="#.">Jobs (single) Right Sidebar </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#.">Blog </a>
              </li>
              <li>
                <a href="#.">Contact</a>
              </li>
            </ul>

            <div className="search-icon">
              <a href="#.">
                <i className="fa fa-search"></i>
              </a>
              <form>
                <input
                  className="form-control"
                  type="search"
                  placeholder="Type Here"
                />
                <button type="submit">
                  <i className="fa fa-search"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
