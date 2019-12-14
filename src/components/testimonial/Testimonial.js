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
              UOU Apps, is by far one of the worlds best known brands.
            </p>
            <h6>
            Rashad Kabir / <span className="primary-color">Dream 71</span>
            </h6>
          </div>
        </div>
      </section>
    );
  }
}

export default Testimonial;
