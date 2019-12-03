import React, { Component } from "react";
class Aboutcontent extends Component {
  state = {};
  render() {
    return (
      <div id="content">
        <section className="padding-top-70 padding-bottom-70">
          <div className="container">
            <div className="who-we">
              <div className="row">
                <div className="col-md-6">
                  <h3 className="font-normal">who we are</h3>
                  <h6>
                    Pushing out limits to provide the highest quality services
                  </h6>
                  <p>
                    Donec venenatis, turpis vel hendrerit interdum, dui ligula
                    ultricies purus, sed posuere libero dui id orci. Nam congue,
                    pede vitae dapibus aliquet, elit magna vulputate arcu, vel
                    tempus metus leo non est. <br />
                    <br />
                    Etiam sit amet lectus quis est congue mollis. Phasellus
                    congue lacus eget neque. Phasellus ornare, ante vitae
                    consectetuer consequat, purus sapien ultricies dolor, et
                    mollis pede metus eget nisi.
                    <br />
                    <br />
                    Phasellus ornare, ante vitae consectetuer consequat, purus
                    sapien ultricies dolor,
                  </p>
                </div>
                <div className="col-md-6">
                  <ul className="row">
                    <li className="col-sm-6">
                      <i className="fa fa-eye"></i>
                      <h5>our vision</h5>
                      <p>
                        Phasellus congue lacus eget neque. Phasellus ornare,
                        vitae consectetuer consequat, purus sapien ultricies
                        dolor,
                      </p>
                    </li>

                    <li className="col-sm-6">
                      <i className="fa fa-rocket"></i>
                      <h5>our mission</h5>
                      <p>
                        Phasellus congue lacus eget neque. Phasellus ornare,
                        vitae consectetuer consequat, purus sapien ultricies
                        dolor,
                      </p>
                    </li>

                    <li className="col-sm-6">
                      <i className="fa fa-diamond"></i>
                      <h5>our vision</h5>
                      <p>
                        Phasellus congue lacus eget neque. Phasellus ornare,
                        vitae consectetuer consequat, purus sapien ultricies
                        dolor,
                      </p>
                    </li>

                    <li className="col-sm-6">
                      <i className="fa fa-flag"></i>
                      <h5>our vision</h5>
                      <p>
                        Phasellus congue lacus eget neque. Phasellus ornare,
                        vitae consectetuer consequat, purus sapien ultricies
                        dolor,
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Aboutcontent;
