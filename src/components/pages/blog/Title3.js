import React, { Component } from 'react';
import {AnimatedOnScroll} from "react-animated-css-onscroll";
import {Link} from "react-router-dom";


class SidePost1 extends Component {
    render() {
        return (
            <div id="content">
           <section className="blog blog-pages padding-top-70 padding-bottom-70">
           <AnimatedOnScroll animationIn="fadeInLeft" animationOut="" animationInDuration={1000} animationOutDuration={5000} isVisible={true}>
             <div className="container">
            <div className="row">
          <div className="col-md-8">
          <article> <img className="img-responsive" src="https://media-eng.dhakatribune.com/uploads/2019/03/bigstock-edited-1552537715029.jpg" alt="sidepost" />
              <div className="date"> 11 <span>October</span> </div>
              <div className="post-detail"> <Link to ="/title1" className="post-tittle">Facebook suffers global outage (Read More)</Link> <span>By Admin</span>
                <p>Instagram, and WhatsApp, both owned by Facebook, also fell prey to this outage.<br/><br/>

Users across the world reported problems with Instagram, WhatsApp and parent company Facebook on Wednesday evening.<br/><br/>

Facebook began experiencing disruptions around 10pm, according to tracking website downdetector.com, with Instagram and WhatsApp experiencing disruptions around the same time, reported The Straits Times.<br/><br/>

The site's outage map reflected that several parts of North America and South-east Asia were affected.<br/><br/>

Besides Singapore, Malaysia and Bangladesh also seemed to be affected.<br/><br/>

Facebook has took to Twitter to address the proceedings and said: "We are aware that some people are having trouble uploading or sending images, videos and other files on our apps. <br/><br/>

"We are sorry for the trouble and are working to get things back to normal as quickly as possible."
</p>
                <ul className="tags">
                  <li><a href="#.">Facebook</a></li>
                  <li><a href="#.">Technology</a></li>
                </ul>
              </div>
            </article>
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
        )
    }
}
export default SidePost1;