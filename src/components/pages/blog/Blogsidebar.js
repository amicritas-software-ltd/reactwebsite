import React, { Component } from "react";
import { Link } from "react-router-dom";
import Tags from "../../tags/Tags";
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
                  src="https://www.datocms-assets.com/9406/1549543117-code-2000x1125.jpg"
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
                  src="https://images.idgesg.net/images/article/2017/08/4_software-engineering-100733150-large.jpg"
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
                  src="https://www.technotification.com/wp-content/uploads/2018/04/software-developer-vs-software-engineer.jpg"
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
