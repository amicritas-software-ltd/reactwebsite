import React, { Component } from "react";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import { Link } from "react-router-dom";
import Blogsidebar from "./Blogsidebar";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";
import Bottomfooter from "../../footer/Bottomfooter";
import Pagetop from "../Pagetop";

class Post extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Pagetop
          Title={this.props.title}
          Background={this.props.background}
          Name={this.props.name}
        />

        <div id="content">
          <section className="blog blog-pages padding-top-70 padding-bottom-70">
            <AnimatedOnScroll
              animationIn="fadeInLeft"
              animationOut=""
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
                        src={this.props.image}
                        alt="Wasa"
                      />
                      <div className="date">
                        {this.props.day} <span>{this.props.month}</span>{" "}
                      </div>
                      <div className="post-detail">
                        <Link to={this.props.path} className="post-tittle">
                          {this.props.title}
                        </Link>
                        <span>By <b>{this.props.publisher}</b></span>
                        <p>{this.props.content}</p>
                        <ul className="tags">
                          <li>
                            <a href="#.">{this.props.tag1}</a>
                          </li>
                          <li>
                            <a href="#.">{this.props.tag2}</a>
                          </li>
                          <li>
                            <a href="#.">{this.props.tag3}</a>
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
        <Footer></Footer>
        <Bottomfooter></Bottomfooter>
      </div>
    );
  }
}
export default Post;
