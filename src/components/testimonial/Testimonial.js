import React, { Component } from "react";
class Testimonial extends Component {
  render() {
    return (
      <section className="testi-bg padding-top-100 padding-bottom-100">
        <div className="container">
          <div className="heading text-center">
            <h4 className="custom-color">What Client Say...</h4>
          </div>
        </div>
        <div className="container">
          <div className="testi">
            <p>
              There are design companies, and then there are user experience,
              design, consulting, interface design, brilliant, and professional.
              Amicritas Software LTD., is one of the best software company of Bangladesh which provide us all of this.
            </p>
            <h6>
            Rabbani Prottoy / <span className="primary-color">B.R.A.I.N Corporation</span>
            </h6>
          </div>
        </div>
      </section>
    );
  }
}

export default Testimonial;
