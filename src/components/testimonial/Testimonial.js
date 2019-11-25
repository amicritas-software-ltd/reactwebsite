import React, { Component } from "react";
class Testimonial extends Component {
  render() {
    return (
      <section class="testi-bg padding-top-100 padding-bottom-100">
        <div class="container">
          <div class="heading text-center">
            <h4 class="custom-color">What Client Say...</h4>
          </div>
        </div>
        <div class="container">
          <div class="testi">
            <p>
              There are design companies, and then there are user experience,
              design, consulting, interface design, brilliant, and professional.
              UOU Apps, is by far one of the worlds best known brands.
            </p>
            <h6>
              Jane Doe / <span class="primary-color">Company Inc.</span>
            </h6>
          </div>
        </div>
      </section>
    );
  }
}

export default Testimonial;
