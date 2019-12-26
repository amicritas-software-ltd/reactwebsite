import React, { Component } from "react";
import Job1 from "./alljobs/Job1";
class Jobsinfo extends Component {
  render() {
    return (
      <div id="content">
        <div className="heading text-center">
          <h4>
            "We hire smart people so they can tell us what to do" - Steve Jobs
          </h4>
        </div>
        <Job1></Job1>
      </div>
    );
  }
}

export default Jobsinfo;
