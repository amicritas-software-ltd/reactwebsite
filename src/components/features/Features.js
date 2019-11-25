import React, { Component } from "react";
class Features extends Component {
  render() {
    return (
      <section class="features light-gray-bg padding-top-70 padding-bottom-70">
        <div class="container">
          <div class="heading text-center">
            <h4>outstanding features</h4>
          </div>

          <div class="list-style-featured">
            <div class="row no-margin">
              <div class="col-md-4 no-padding">
                <ul class="text-right">
                  <li>
                    <div class="media">
                      <div class="media-body">
                        <h6>Gorgeous Design</h6>
                        <p>
                          Donec venenatis, turpis vel hendrerit interdum, dui
                          ligula ultricies purus, ultricies id orci.
                        </p>
                      </div>
                      <div class="media-right">
                        <div class="icon">
                          <i class="fa fa-paint-brush"></i>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="media">
                      <div class="media-body">
                        <h6>Responsive Design</h6>
                        <p>
                          Donec venenatis, turpis vel hendrerit interdum, dui
                          ligula ultricies purus, ultricies id orci.
                        </p>
                      </div>
                      <div class="media-right">
                        <div class="icon">
                          <i class="fa fa-tablet"></i>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="media">
                      <div class="media-body">
                        <h6>Cross Browser Support</h6>
                        <p>
                          Donec venenatis, turpis vel hendrerit interdum, dui
                          ligula ultricies purus, ultricies id orci.
                        </p>
                      </div>
                      <div class="media-right">
                        <div class="icon">
                          <i class="fa fa-chrome"></i>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div class="col-md-4 text-center no-padding">
                <img
                  class="img-responsive"
                  src="http://new.uouapps.com/iod-html/html/images/iphone.png"
                  alt="iphone"
                />
              </div>

              <div class="col-md-4 no-padding">
                <ul>
                  <li>
                    <div class="media">
                      <div class="media-left">
                        <div class="icon">
                          <i class="fa fa-gear"></i>
                        </div>
                      </div>
                      <div class="media-body">
                        <h6>Easy to Customize</h6>
                        <p>
                          Donec venenatis, turpis vel hendrerit interdum, dui
                          ligula ultricies purus, ultricies id orci.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="media">
                      <div class="media-left">
                        <div class="icon">
                          <i class="fa fa-book"></i>
                        </div>
                      </div>
                      <div class="media-body">
                        <h6>Exlusive Features</h6>
                        <p>
                          Donec venenatis, turpis vel hendrerit interdum, dui
                          ligula ultricies purus, ultricies id orci.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="media">
                      <div class="media-left">
                        <div class="icon">
                          <i class="fa fa-lightbulb-o"></i>
                        </div>
                      </div>
                      <div class="media-body">
                        <h6>Innovative Ideas</h6>
                        <p>
                          Donec venenatis, turpis vel hendrerit interdum, dui
                          ligula ultricies purus, ultricies id orci.
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
