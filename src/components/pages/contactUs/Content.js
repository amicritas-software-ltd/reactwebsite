import React, { Component } from 'react';

class Content extends Component{
    render(){
        return(
            <div id="content">
    <section className="padding-bottom-70">
      <div className="contact-info padding-top-100 padding-bottom-100" data-stellar-background-ratio="0.5">
        <div className="container">
          <div className="heading white text-center">
            <h4>Our Office</h4>
            <span>We trust in longlasting partnerships with the most important brands on the market</span> </div>
          <ul className="row">
            <li className="col-sm-4">
              <article>
                <h5>Dhaka</h5>
                <p>House:1E,Road:04,Sector:11,Uttara
                </p>
                <span className="margin-top-30"><i className="fa fa-phone-square"></i> +8801643059745</span> <span className="primary-color"><i className="fa fa-envelope"></i> info@amicritas.com</span> </article>
            </li>
          </ul>
        </div>
      </div>
      <div className="container">
        <div className="heading text-left margin-top-70 margin-bottom-30">
          <h4>Send us your queries</h4>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="contact-form">
              <div id="contact_message" className="success-msg"> <i className="fa fa-paper-plane-o"></i>Thank You. Your Message has been Submitted</div>
              <form id="contact_form" className="contact-form" method="post" onSubmit="return false">
                <ul className="row">
                  <li className="col-sm-12">
                    <label>
                      <input type="text" className="form-control" name="name" id="name" placeholder="Name" />
                    </label>
                  </li>
                  <li className="col-sm-12">
                    <label>
                      <input type="text" className="form-control" name="email" id="email" placeholder="Email" />
                    </label>
                  </li>
                  <li className="col-sm-12">
                    <label>
                      <input type="text" className="form-control" name="company" id="company" placeholder="Subject" />
                    </label>
                  </li>
                  <li className="col-sm-12">
                    <label>
                      <textarea className="form-control" name="message" id="message" rows="5" placeholder="Message"></textarea >
                    </label>
                  </li>
                  <li className="col-sm-12">
                    <button type="submit" value="submit" className="btn btn-1" id="btn_submit" onClick="proceed();">Send Message <i className="fa fa-caret-right"></i></button>
                  </li>
                </ul>
              </form>
            </div>
          </div>
            </div>
               </div>
                 </section>
                </div>
        );
    }
}

export default Content;