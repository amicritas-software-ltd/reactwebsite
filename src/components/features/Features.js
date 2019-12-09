import React, { Component } from "react";
class Features extends Component {
  render() {
    return (
      <section className="features light-gray-bg padding-top-70 padding-bottom-70">
        <div className="container">
          <div className="heading text-center">
            <h4>outstanding features</h4>
          </div>

          <div className="list-style-featured">
            <div className="row no-margin">
              <div className="col-md-4 no-padding">
                <ul className="text-right">
                  <li>
                    <div className="media">
                      <div className="media-body">
                        <h6>Gorgeous Design</h6>
                        <p>
                          Providing best quality design for your desired projects
                        </p>
                      </div>
                      <div className="media-right">
                        <div className="icon">
                          <i className="fa fa-paint-brush"></i>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="media">
                      <div className="media-body">
                        <h6>Responsive Design</h6>
                        <p>
                          Providing responsive designs
                        </p>
                      </div>
                      <div className="media-right">
                        <div className="icon">
                          <i className="fa fa-tablet"></i>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="media">
                      <div className="media-body">
                        <h6>Cross Browser Support</h6>
                        <p>
                          Providing websites that support all browsers.
                        </p>
                      </div>
                      <div className="media-right">
                        <div className="icon">
                          <i className="fa fa-chrome"></i>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="col-md-4 text-center no-padding">
                <img
                  className="img-responsive"
                  src="http://new.uouapps.com/iod-html/html/images/iphone.png"
                  alt="iphone"
                />
              </div>

              <div className="col-md-4 no-padding">
                <ul>
                  <li>
                    <div className="media">
                      <div className="media-left">
                        <div className="icon">
                          <i className="fa fa-gear"></i>
                        </div>
                      </div>
                      <div className="media-body">
                        <h6>Easy to Customize</h6>
                        <p>
                          Easy customizable projects.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="media">
                      <div className="media-left">
                        <div className="icon">
                          <i className="fa fa-book"></i>
                        </div>
                      </div>
                      <div className="media-body">
                        <h6>Exlusive Features</h6>
                        <p>
                          Responsive ecommerce websites, Flutter apps for Android/iOS,etc
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="media">
                      <div className="media-left">
                        <div className="icon">
                          <i className="fa fa-lightbulb-o"></i>
                        </div>
                      </div>
                      <div className="media-body">
                        <h6>Innovative Ideas</h6>
                        <p>
                          Vai mathay dhuktesena ektu bujhaia den content gula
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Features;
