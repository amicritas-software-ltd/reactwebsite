import React, { Component } from "react";
import Post from "../Post";
import post2 from "./img/post2.jpg";
import banner from "./img/banner.jpg";

class Post2 extends Component {
  state = {
    title: "second space innovation summit begins friday",
    image: post2,
    day: "23",
    month: "August",
    path: "/post/second-space-innovation",
    publisher: "Admin",
    content:
      "Bangladesh Innovation Forum and National Aeronautics and Space Administration (NASA) Scientific Problem Solver is organizing the event for the 2nd time. Space Innovation Summit 2019, a two day program, will begin at Independent University of Bangladesh (IUB) in Dhaka on Friday. Bangladesh Innovation Forum and National Aeronautics and Space Administration (NASA) Scientific Problem Solver is organizing the event for the 2nd time. It will be open from 10am to 6pm, on July 19 and 20. State Minister for Information Technology, Junaid Ahmed Palak, will inaugurate the event. Bangladesh University Grants Commission Professor, Sajjad Hossain, and Head Air Commodore of the MIST Aeronautical Department, Prof M Abdus Salam, will be the special guests. Former System Administrator at NASA, Azadul Haque, MIT Zero Lab Chief Mizanul Chowdhury, University of Robotics and MacTronics Engineering Chairperson Dr Lafifa Jamal, Dell's Solution Architect Director Mahdi Uz Zaman, Associate Dean of American International University, Bangladesh, Prof Dr Md Abdur Rahman, among others, will speak on the occasion. The event will have 4 sessions with 16 technical seminars including workshops, space gaming competitions, project showcasing, and more, sources said.",
    tag1: "Space News",
    tag2: "Technology",
    tag3: "Nasa",
    background: banner,
    name: "Post"
  };
  render() {
    return (
      <Post
        title={this.state.title}
        image={this.state.image}
        day={this.state.day}
        month={this.state.month}
        path={this.state.path}
        publisher={this.state.publisher}
        content={this.state.content}
        tag1={this.state.tag1}
        tag2={this.state.tag2}
        tag3={this.state.tag3}
        name={this.state.name}
        background={this.state.background}
      />
    );
  }
}

export default Post2;
