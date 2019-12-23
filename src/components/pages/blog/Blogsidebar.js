import React, { Component } from "react";
import { Link } from "react-router-dom";
import Tags from "../../tags/Tags";
import post1 from "./posts/img/post1.jpg";
import post2 from "./posts/img/post2.jpg";
import post3 from "./posts/img/post3.jpg";

class Blogsidebar extends Component {
  render() {
    return (
      <div className="side-bar">
        <h5 className="side-tittle">Latest Posts</h5>
        <ul className="papu-post">
          <li className="media">
            <div className="media-left">
              <Link href="/post/facebook-to-allow-all-users">
                <img
                  className="media-object"
                  src={post1}
                  alt="facebook"
                />
              </Link>
              <span>11 July</span>
            </div>
            <div className="media-body">
              <Link
                className="media-heading"
                to="/post/facebook-to-allow-all-users"
              >
                Facebook to allow all users with option to opt out of face
                recognition
              </Link>
            </div>
          </li>
          <li className="media">
            <div className="media-left">
              <Link to="/post/second-space-innovation">
                <img
                  className="media-object"
                  src={post2}
                  alt="space"
                />
              </Link>
              <span>23 August</span>
            </div>
            <div className="media-body">
              <Link
                className="media-heading"
                to="/post/second-space-innovation"
              >
                Second space innovation summit begins friday
              </Link>
            </div>
          </li>
          <li className="media">
            <div className="media-left">
              <Link to="/post/should-oracle-split">
                <img
                  className="media-object"
                  src={post3}
                  alt="oracle "
                />
              </Link>
              <span>13 October</span>
            </div>
            <div className="media-body">
              <Link className="media-heading" to="/post/should-oracle-split">
                Should Oracle Split?
              </Link>
            </div>
          </li>
        </ul>

        <h5 className="side-tittle margin-top-50">Tags </h5>
        <Tags></Tags>
      </div>
    );
  }
}

export default Blogsidebar;
