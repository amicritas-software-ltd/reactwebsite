import React, { Component } from "react";
class Topbar extends Component {
  render() {
    return (
      <div class="top-bar">
        <div class="top-info">
          <div class="container">
            <ul class="personal-info">
              <li>
                <p>
                  <i class="fa fa-phone"></i> +8801643059745
                </p>
              </li>
              <li>
                <p>House:1E,Road:04,Sector:11,Uttara </p>
              </li>
              <li>
                <p>info@amicritas.com </p>
              </li>
            </ul>

            <div class="right-sec">
              <ul class="social">
                <li>
                  <a href="#.">
                    <i class="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#.">
                    <i class="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#.">
                    <i class="fa fa-google"></i>
                  </a>
                </li>
                <li>
                  <a href="#.">
                    <i class="fa fa-linkedin"></i>
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
