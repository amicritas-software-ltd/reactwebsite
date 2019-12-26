import React, { Component } from "react";
import JobSample from "../JobSample";

class Job1 extends Component {
  state = {
    jobIDWithHash: "#job1",
    jobLink: "#.",
    jobDate: "26",
    jobMonth: "December",
    jobTitle: "Android App Developer",
    jobLocation: "Uttara, Dhaka",
    jobShortDescription:
      "We are hiring Android Developer now! If you are a good fit and skilled developer, simply read the job description carefully.",
    jobId: "job1",
    jobDescription: [
      "*Follow Current task assigned by project manager/CEO.",
      "*Report to project manager/CEO daily basis.",
      "*Maintain all code to github.",
      "*Gather specific requirements and suggest solutions.",
      "*Write unit and UI tests to identify malfunctions.",
      "*Troubleshoot and debug to optimize performance.",
      "*Liaise with Product development team to plan new features.",
      "*Ensure new and legacy applications meet quality standards."
    ],

    jobWork: [
      "* Bsc (CSE, ECE, EEE) from any reputed university.",
      "* Minimum of 2 years of App development experience.",
      "* Java/Kotlin, Javascript language writing skill.",
      "* Skill to work with API, different kind of Database like Firebase, Sql etc.",
      "* Third party Intregration like Google map.",
      "* Excellent UI designing knowledge."
    ],
    jobRequiredSkill: [
      {
        name: "UI/UX Design",
        width: "70%"
      },
      {
        name: "Android Studio",
        width: "90%"
      },
      {
        name: "Java/Kotlin",
        width: "80%"
      },
      {
        name: "Firebase API",
        width: "85%"
      },
      {
        name: "Google Map",
        width: "75%"
      }
    ],
    jobBenefit: [
      "Free Food",
      "Transportation Cost",
      "Salary Review: Semi- Annually",
      "Festival Bonus: 2"
    ],
    jobSalary: "15k-30k",
    jobExpired: "20 January 2020"
  };

  render() {
    return (
      <JobSample
        jobIDWithHash={this.state.jobIDWithHash}
        jobLink={this.state.jobLink}
        jobDate={this.state.jobDate}
        jobMonth={this.state.jobMonth}
        jobTitle={this.state.jobTitle}
        jobLocation={this.state.jobLocation}
        jobShortDescription={this.state.jobShortDescription}
        jobId={this.state.jobId}
        jobDescription={this.state.jobDescription}
        jobWork={this.state.jobWork}
        jobRequiredSkill={this.state.jobRequiredSkill}
        jobBenefit={this.state.jobBenefit}
        jobSalary={this.state.jobSalary}
        jobExpired={this.state.jobExpired}
      />
    );
  }
}

export default Job1;
