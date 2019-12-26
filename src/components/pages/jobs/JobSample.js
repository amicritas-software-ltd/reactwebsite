import React, { Component } from "react";
class JobSample extends Component {
  render() {
    return (
      <div id="accordion">
        <div className="job-content job-post-page margin-top-20">
          <div className="panel panel-default">
            <div className="star-save">
              <a data-toggle="collapse" href={this.props.jobIDWithHash}>
                <i className="fa fa-plus"></i>
              </a>
              <a href={this.props.jobLink}>
                <i className="fa fa-link"></i>
              </a>
            </div>

            <div className="panel-heading">
              <div className="job-tittle">
                <div className="media-left">
                  <div className="date">
                    {this.props.jobDate} <span>{this.props.jobMonth}</span>
                  </div>
                </div>
                <div className="media-body">
                  <h5>{this.props.jobTitle}</h5>
                  <span>{this.props.jobLocation}</span>
                </div>
              </div>

              <p>
                <strong>{this.props.jobShortDescription}</strong>
              </p>
            </div>

            <div id={this.props.jobId} className="panel-collapse collapse">
              <div className="panel-body">
                <p>
                  <br />
                  <p>
                    <strong>Job Description/Responsibility:</strong>
                  </p>
                  <br />
                  <div className="padding-left-50">
                    {this.props.jobDescription.map(function(JD) {
                      return <p>{JD}</p>;
                    })}
                  </div>
                </p>
                <br />
                <p>
                  <strong>What are the skills we want:</strong>
                </p>
                <ul className="margin-top-30 padding-left-50">
                  <li>
                    {this.props.jobWork.map(function(n) {
                      return <p>{n}</p>;
                    })}
                  </li>
                </ul>
                <p>
                  <br />
                  <strong>
                    Salary: {this.props.jobSalary} (Depends on skills)
                  </strong>
                </p>
                <p>
                  <br />
                  <strong>Last date for apply: {this.props.jobExpired}</strong>
                </p>

                <h5 className="margin-top-50">Mandatory Skills</h5>
                <div className="job-skills">
                  {this.props.jobRequiredSkill.map(function(item) {
                    return (
                      <ul className="row">
                        <li className="col-sm-3">
                          <h6>
                            <i className="fa fa-plus"></i> {item.name}
                          </h6>
                        </li>
                        <li className="col-sm-9">
                          <div className="progress">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              aria-valuenow="60"
                              aria-valuemin="0"
                              aria-valuemax="100"
                              style={{ width: item.width }}
                            ></div>
                          </div>
                        </li>
                      </ul>
                    );
                  })}

                  <h5 className="margin-top-50">Additional Benefits</h5>
                  <ul className="tags dall margin-bottom-40">
                    <li>
                      {this.props.jobBenefit.map(function(AR) {
                        return <a href="#.">{AR}</a>;
                      })}
                    </li>
                  </ul>

                  <div className="row share-info">
                    <div className="col-md-4">
                      <a href="#." className="sm-tags">
                        Apply for this Job
                      </a>
                    </div>
                    <div className="col-md-5">
                      <h6 className="margin-top-5">Share:</h6>
                      <ul className="social">
                        <li>
                          <a href="#.">
                            <i className="fa fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#.">
                            <i className="fa fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#.">
                            <i className="fa fa-google"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#.">
                            <i className="fa fa-linkedin"></i>
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="col-md-3 text-right">
                      <a
                        className="sm-tags"
                        data-toggle="collapse"
                        href={this.props.jobIDWithHash}
                      >
                        <i className="fa fa-angle-up margin-right-5"></i>Less
                        Info
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default JobSample;
