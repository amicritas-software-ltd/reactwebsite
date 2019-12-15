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
            <article> <img className="img-responsive" src="https://www.thomsonreuters.com/content/dam/ewp-m/images/image-library/en/photography/201138-118072186.jpeg.transform/hero-s/q90/image.jpg" alt="" />
              <div className="date"> 19 <span>November</span> </div>
              <div className="post-detail"> <a href="blog-single.html" className="post-tittle">Title 1</a> <span>By Admin  /  6 Comments</span>
                <p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consei quat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit in hac habitasse platea dictumst phasellus sit amet massa sem. In mattis purus vitae turpis laoreet dignissim</p>
                <ul className="tags">
                  <li><a href="#.">User Experience</a></li>
                  <li><a href="#.">html 5</a></li>
                  <li><a href="#.">Css 3</a></li>
                </ul>
              </div>
            </article>
            <article> <img className="img-responsive" src="https://www.glassdoor.com/employers/app/uploads/sites/2/2018/08/Code-3.jpg" alt="" />
              <div className="date"> 15 <span>November</span> </div>
              <div className="post-detail"> <a href="blog-single.html" className="post-tittle">Title 2</a> <span>By Admin  /  8 Comments</span>
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
                <li><a href="/blog">1</a></li>
                <li><a className="#." href="#.">2</a></li>
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
                  <div className="media-left"> <a href="blog-single.html"> <img className="media-object" src="https://www.datocms-assets.com/9406/1549543117-code-2000x1125.jpg" alt="" /></a><span>11 October</span> </div>
                  <div className="media-body"> <a className="media-heading" href="blog-single.html">Post Title Goes Here </a>
                    <p>Donec venenatis, turpis vel hendrerit interdum, dui ligula. </p>
                  </div>
                </li>
                <li className="media">
                  <div className="media-left"> <a href="blog-single.html"> <img className="media-object" src="https://images.idgesg.net/images/article/2017/08/4_software-engineering-100733150-large.jpg" alt="" /></a><span>7 October</span> </div>
                  <div className="media-body"> <a className="media-heading" href="blog-single.html">Post Title Goes Here</a>
                    <p>Donec venenatis, turpis vel hendrerit interdum, dui ligula. </p>
                  </div>
                </li>
                <li className="media">
                  <div className="media-left"> <a href="blog-single.html"> <img className="media-object" src="https://www.technotification.com/wp-content/uploads/2018/04/software-developer-vs-software-engineer.jpg" alt="" /></a><span>5 October</span> </div>
                  <div className="media-body"> <a className="media-heading" href="blog-single.html">Post Title Goes Here </a>
                    <p>Donec venenatis, turpis vel hendrerit interdum, dui ligula. </p>
                  </div>
                </li>
              </ul>
              <h5 className="side-tittle margin-top-50">Categories </h5>
              <ul className="cate">
                <li><a href="#."> Creative</a></li>
                <li><a href="#."> Marketing</a></li>
                <li><a href="#."> Development</a></li>
                <li><a href="#."> Electronics</a></li>
                <li><a href="#."> Websites</a></li>
              </ul>
              <div className="add margin-top-50"> <img className="img-responsive" src="http://ssuet.edu.pk/wp-content/uploads/2019/08/Software.jpg" alt="" /> </div>
              <h5 className="side-tittle margin-top-50">Tags </h5>
              <ul className="tags">
                <li><a href="#.">Mobile App</a></li>
                <li><a href="#.">Technology </a></li>
                <li><a href="#.">Web Application</a></li>
                <li><a href="#.">Ecommerce</a></li>
                <li><a href="#.">Marketing</a></li>
                <li><a href="#.">Electronics</a></li>
                <li><a href="#.">Robotics</a></li>
                <li><a href="#.">Websites</a></li>
                <li><a href="#.">Clients</a></li>
              </ul>
            </div>
            <h5 className="side-tittle margin-top-50">Archives </h5>
            <ul className="cate">
              <li><a href="#."> May 2019</a></li>
              <li><a href="#."> April 2019</a></li>
              <li><a href="#."> March 2019</a></li>
              <li><a href="#."> February 2019</a></li>
              <li><a href="#."> January 2019</a></li>
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