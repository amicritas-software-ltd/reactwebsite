import React, { Component } from "react";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
class Counter extends Component {
  render() {
    return (
      <AnimatedOnScroll
        animationIn="pulse"
        animationOut=""
        animationInDuration={1000}
        animationOutDuration={5000}
        isVisible={true}
      >
        <section className="counter padding-top-50 padding-bottom-50">
          <div className="container">
            <ul className="row">
              <li className="col-md-3">
                <div className="count">
                  <span className="number">
                    <span
                      className="timer"
                      data-speed="5000"
                      data-refresh-interval="5"
                      data-to="482"
                      data-from="0"
                    ></span>
                  </span>
                  <h5>Satisfied Clients</h5>
                </div>
              </li>

              <li className="col-md-3">
                <div className="count">
                  <span className="number">
                    <span
                      className="timer"
                      data-speed="5000"
                      data-refresh-interval="5"
                      data-to="9045"
                      data-from="0"
                    ></span>
                  </span>
                  <h5>Hours of Working</h5>
                </div>
              </li>

              <li className="col-md-3">
                <div className="count">
                  <span className="number">
                    <span
                      className="timer"
                      data-speed="5000"
                      data-refresh-interval="5"
                      data-to="553"
                      data-from="0"
                    ></span>
                  </span>
                  <h5>Total Projects</h5>
                </div>
              </li>

              <li className="col-md-3">
                <div className="count">
                  <span className="number">
                    <span
                      className="timer"
                      data-speed="5000"
                      data-refresh-interval="5"
                      data-to="17"
                      data-from="0"
                    ></span>
                  </span>
                  <h5>Professionals</h5>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </AnimatedOnScroll>
    );
  }
}

export default Counter;
