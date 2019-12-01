import React, { Component } from "react";
class Counter extends Component {
  render() {
    return (
      <section className="counter padding-top-50 padding-bottom-50">
        <div className="container">
          <ul className="row">
            <li className="col-md-3">
              <div className="count">
                <span className="number">
                  <span
                    className="timer"
                    data-speed="2000"
                    data-refresh-interval="10"
                    data-to="16812"
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
                    data-speed="2000"
                    data-refresh-interval="10"
                    data-to="482"
                    data-from="0"
                  ></span>
                </span>
                <h5>Millions $ Equity</h5>
              </div>
            </li>

            <li className="col-md-3">
              <div className="count">
                <span className="number">
                  <span
                    className="timer"
                    data-speed="2000"
                    data-refresh-interval="10"
                    data-to="92"
                    data-from="0"
                  ></span>
                </span>
                <h5>Partners in Holding</h5>
              </div>
            </li>

            <li className="col-md-3">
              <div className="count">
                <span className="number">
                  <span
                    className="timer"
                    data-speed="2000"
                    data-refresh-interval="10"
                    data-to="2980"
                    data-from="0"
                  ></span>
                </span>
                <h5>Professionals</h5>
              </div>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Counter;
