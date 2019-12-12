import React, { Component } from 'react';
import {AnimatedOnScroll} from "react-animated-css-onscroll";
class BlogInfo extends Component{
    render(){
        return(
        <div id="content">
           <section className="blog blog-pages padding-top-70 padding-bottom-70">
           <AnimatedOnScroll animationIn="fadeInLeft" animationOut="" animationInDuration={1000} animationOutDuration={5000} isVisible={true}>
             <div className="container">
            <div className="row">
          <div className="col-md-8">
            <article> <img className="img-responsive" src="http://new.uouapps.com/iod-html/html/images/blog-1.jpg" alt="" />
              <div className="date"> 19 <span>MAY</span> </div>
              <div className="post-detail"> <a href="blog-single.html" className="post-tittle">14 Things Men Should Never Wear After 30</a> <span>By Admin  /  2 Comments</span>
                <p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consei quat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit in hac habitasse platea dictumst phasellus sit amet massa sem. In mattis purus vitae turpis laoreet dignissim</p>
                <ul className="tags">
                  <li><a href="#.">User Experience</a></li>
                  <li><a href="#.">html 5</a></li>
                  <li><a href="#.">Css 3</a></li>
                </ul>
              </div>
            </article>
            <article> <img className="img-responsive" src="http://new.uouapps.com/iod-html/html/images/blog-2.jpg" alt="" />
              <div className="date"> 19 <span>MAY</span> </div>
              <div className="post-detail"> <a href="blog-single.html" className="post-tittle">14 Things Men Should Never Wear After 30</a> <span>By Admin  /  2 Comments</span>
                <p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consei quat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit in hac habitasse platea dictumst phasellus sit amet massa sem. In mattis purus vitae turpis laoreet dignissim</p>
                <ul className="tags">
                  <li><a href="#.">User Experience</a></li>
                  <li><a href="#.">html 5</a></li>
                  <li><a href="#.">Css 3</a></li>
                </ul>
              </div>
            </article>
            <ul className="pagination">
                <li><a href="#."><i className="fa fa-angle-left"></i></a></li>
                <li><a href="#.">1</a></li>
                <li><a className="current" href="#.">2</a></li>
                <li><a href="#.">3</a></li>
                <li><a href="#.">4</a></li>
                <li><a href="#."><i className="fa fa-angle-right"></i></a></li>
              </ul>
          </div>
          <div className="col-md-4">
            <div className="side-bar">
              <h5 className="side-tittle">Latest Posts </h5>
              <ul className="papu-post">
                <li className="media">
                  <div className="media-left"> <a href="blog-single.html"> <img className="media-object" src="http://new.uouapps.com/iod-html/html/images/small-post-1.jpg" alt="" /></a><span>11 May</span> </div>
                  <div className="media-body"> <a className="media-heading" href="blog-single.html">Post Title Goes Here </a>
                    <p>Donec venenatis, turpis vel hendrerit interdum, dui ligula. </p>
                  </div>
                </li>
                <li className="media">
                  <div className="media-left"> <a href="blog-single.html"> <img className="media-object" src="http://new.uouapps.com/iod-html/html/images/small-post-2.jpg" alt="" /></a><span>11 May</span> </div>
                  <div className="media-body"> <a className="media-heading" href="blog-single.html">Post Title Goes Here</a>
                    <p>Donec venenatis, turpis vel hendrerit interdum, dui ligula. </p>
                  </div>
                </li>
                <li className="media">
                  <div className="media-left"> <a href="blog-single.html"> <img className="media-object" src="http://new.uouapps.com/iod-html/html/images/small-post-3.jpg" alt="" /></a><span>11 May</span> </div>
                  <div className="media-body"> <a className="media-heading" href="blog-single.html">Post Title Goes Here </a>
                    <p>Donec venenatis, turpis vel hendrerit interdum, dui ligula. </p>
                  </div>
                </li>
              </ul>
              <h5 className="side-tittle margin-top-50">Categories </h5>
              <ul className="cate">
                <li><a href="#.">Creative</a></li>
                <li><a href="#."> Design</a></li>
                <li><a href="#."> Development</a></li>
                <li><a href="#."> Search Engine Optimization</a></li>
                <li><a href="#."> Uncategorized</a></li>
              </ul>
              <div className="add margin-top-50"> <img className="img-responsive" src="http://new.uouapps.com/iod-html/html/images/add-img.jpg" alt="" /> </div>
              <h5 className="side-tittle margin-top-50">Tags </h5>
              <ul className="tags">
                <li><a href="#.">Amazing </a></li>
                <li><a href="#.">Envato </a></li>
                <li><a href="#.">Themes </a></li>
                <li><a href="#.">Responsiveness </a></li>
                <li><a href="#.">SEO </a></li>
                <li><a href="#.">Mobile </a></li>
                <li><a href="#.">IOS </a></li>
                <li><a href="#.">Design </a></li>
                <li><a href="#.">Flat </a></li>
              </ul>
            </div>
            <h5 className="side-tittle margin-top-50">Archives </h5>
            <ul className="cate">
              <li><a href="#."> May 2015</a></li>
              <li><a href="#."> April 2015</a></li>
              <li><a href="#."> March 2015</a></li>
              <li><a href="#."> February 2015</a></li>
              <li><a href="#."> January 2015</a></li>
            </ul>
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