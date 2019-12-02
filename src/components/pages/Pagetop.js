import React, { Component } from "react";

class Pagetop extends Component {
  render() {
    return (
      <section
        className="sub-bnr bnr-2"
        data-stellar-background-ratio="0.5"
        style={{
          backgroundImage: "url(" + this.props.Background + ")"
        }}
      >
        <div className="position-center-center">
          <div className="container">
            <h4>{this.props.Title}</h4>

            <ol className="breadcrumb">
              <li>
                <a href="#.">Home</a>
              </li>
              <li className="active">{this.props.Name}</li>
            </ol>
          </div>
        </div>
      </section>
    );
  }
}

export default Pagetop;
