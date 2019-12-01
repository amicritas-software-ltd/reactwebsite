import React, { Component } from "react";
class Bottomfooter extends Component {
  render() {
    return (
      <div className="rights">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p>
                © All Rights Reserved{" "}
                <span className="primary-color">Amicritas </span>
              </p>
            </div>
            <div className="col-md-6 text-right">
              <a href="#.">Privacy Policy</a>
              <a href="#.">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Bottomfooter;
