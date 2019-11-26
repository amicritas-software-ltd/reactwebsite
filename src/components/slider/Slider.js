import React, { Component } from "react";
class Slider extends Component {
  render() {
    return (
      <section class="home-slide">
        <ul class="slides">
          <li class="slide-img-1" data-stellar-background-ratio="0.6">
            <div class="position-center-center">
              <h1>Welcome to Amicritas</h1>
              <h5>Vision of great future</h5>
              <a href="#." class="btn margin-top-30">
                Read More <i class="fa fa-caret-right"></i>
              </a>{" "}
            </div>
          </li>

          <li class="slide-img-2" data-stellar-background-ratio="0.6">
            <div class="position-center-center">
            <h1>Welcome to ASL</h1>
              <h5>Second Slide</h5>
              <a href="#." class="btn margin-top-30">
                Read More <i class="fa fa-caret-right"></i>
              </a>{" "}
            </div>
          </li>
        </ul>
      </section>
    );
  }
}

export default Slider;
