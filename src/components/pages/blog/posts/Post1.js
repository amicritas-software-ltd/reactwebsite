import React, { Component } from "react";
import Post from "../Post";
class Post1 extends Component {
  state = {
    title:
      "Facebook to allow all users with option to opt out of face recognition",
    image:
      "https://media-eng.dhakatribune.com/uploads/2019/04/untitled-1-1554447289881.jpg",
    day: "11",
    month: "July",
    path: "/post/facebook-to-allow-all-users",
    publisher: "Admin",
    content:
      "Facebook Inc is opening up its face recognition technology to all users with an option to opt out, the social media company said on Tuesday, as it discontinued a related feature called “Tag Suggestions.” The old feature enabled users to choose whether Facebook could suggest that their friends tag them in photos, without giving them control over other uses of the technology. The face recognition setting, available to some Facebook users since December 2017, has additional functions such as notifying account holders if their profile photo is used by someone else.",
    tag1: "Facebook",
    tag2: "Face-Recognition",
    tag3: "technology",
    background:
      "http://new.uouapps.com/iod-html/html/images/bg/sub-bnr-bg-1.jpg",
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

export default Post1;
