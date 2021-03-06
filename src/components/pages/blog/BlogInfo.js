import React, { Component } from "react";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import { Link } from "react-router-dom";
import Blogsidebar from "./Blogsidebar";
import post1 from "./posts/img/post1.jpg";
import post2 from "./posts/img/post2.jpg";
import post3 from "./posts/img/post3.jpg";

class BlogInfo extends Component {
  render() {
    return (
      <div id="content">
        <section className="blog blog-pages padding-top-70 padding-bottom-70">
          <AnimatedOnScroll
            animationIn="fadeInLeft"
            animationOut="#."
            animationInDuration={1000}
            animationOutDuration={5000}
            isVisible={true}
          >
            <div className="container">
              <div className="row">
                <div className="col-md-8">
                  <article>
                    <img
                      className="img-responsive"
                      src={post1}
                      alt="facebook"
                    />
                    <div className="date">
                      11 <span>July</span>
                    </div>
                    <div className="post-detail">
                      <Link
                        to="/post/facebook-to-allow-all-users"
                        className="post-tittle"
                      >
                        Facebook to allow all users with option to opt out of
                        face recognition
                      </Link>
                      <span>By Admin</span>
                      <ul className="tags">
                        <li>
                          <a href="#.">Facebook</a>
                        </li>
                        <li>
                          <a href="#.">Face Recognition</a>
                        </li>
                        <li>
                          <a href="#.">Technology</a>
                        </li>
                      </ul>
                    </div>
                  </article>
                  <article>
                    <img
                      className="img-responsive"
                      src={post2}
                      alt="space"
                    />
                    <div className="date">
                      23 <span>August</span>
                    </div>
                    <div className="post-detail">
                      <Link
                        to="/post/second-space-innovation"
                        className="post-tittle"
                      >
                        second space innovation summit begins friday
                      </Link>
                      <span>By Admin</span>

                      <ul className="tags">
                        <li>
                          <a href="#.">Space News</a>
                        </li>
                        <li>
                          <a href="#.">Technology</a>
                        </li>
                        <li>
                          <a href="#.">Nasa</a>
                        </li>
                      </ul>
                    </div>
                  </article>
                  <article>
                    <img
                      className="img-responsive"
                      src={post3}
                      alt="oracle"
                    />
                    <div className="date">
                      13 <span>October</span>
                    </div>
                    <div className="post-detail">
                      <Link
                        to="/post/should-oracle-split"
                        className="post-tittle"
                      >
                        Should Oracle Split?
                      </Link>
                      <span>By Admin</span>

                      <ul className="tags">
                        <li>
                          <a href="#.">Database</a>
                        </li>
                        <li>
                          <a href="#.">Oracle</a>
                        </li>
                        <li>
                          <a href="#.">Technology</a>
                        </li>
                      </ul>
                    </div>
                  </article>
                </div>
                <div className="col-md-4">
                  <Blogsidebar></Blogsidebar>
                </div>
              </div>
            </div>
          </AnimatedOnScroll>
        </section>
      </div>
    );
  }
}
export default BlogInfo;
