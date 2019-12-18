import React, { Component } from 'react';
import {AnimatedOnScroll} from "react-animated-css-onscroll";
import {Link} from "react-router-dom";

class BlogInfo extends Component{
    render(){
        return(
        <div id="content">
           <section className="blog blog-pages padding-top-70 padding-bottom-70">
           <AnimatedOnScroll animationIn="fadeInLeft" animationOut="#." animationInDuration={1000} animationOutDuration={5000} isVisible={true}>
             <div className="container">
            <div className="row">
          <div className="col-md-8">
            <article> <img className="img-responsive" src="https://media-eng.dhakatribune.com/uploads/2019/04/untitled-1-1554447289881.jpg" alt="Wasa" />
              <div className="date"> 11 <span>July</span> </div>
              <div className="post-detail"> <Link to ="/title1" className="post-tittle">Facebook to allow all users with option to opt out of face recognition  (Read More)</Link> <span>By Admin</span>
                <p>Facebook Inc is opening up its face recognition technology to all users with an option to opt out, the social media company said on Tuesday, as it discontinued a related feature called “Tag Suggestions.”

The old feature enabled users to choose whether Facebook could suggest that their friends tag them in photos, without giving them control over other uses of the technology.

The face recognition setting, available to some Facebook users since December 2017, has additional functions such as notifying account holders if their profile photo is used by someone else.
</p>
                <ul className="tags">
                  <li><a href="#.">Facebook</a></li>
                  <li><a href="#.">Face Recognition</a></li>
                  <li><a href="#.">Technology</a></li>
                </ul>
              </div>
            </article>
            <article> <img className="img-responsive" src="https://media-eng.dhakatribune.com/uploads/2019/07/spaceinnovation-1563473509281.jpg " alt="iTracker" />
              <div className="date"> 15 <span>November</span> </div>
              <div className="post-detail"> <Link to = "/title2" className="post-tittle">Second ‘Space Innovation Summit begins Friday  (Read More)</Link> <span>By Admin</span>
                <p><strong>Bangladesh Innovation Forum and National Aeronautics and Space Administration (NASA) Scientific Problem Solver is organizing the event for the 2nd time.</strong><br/><br/>


                Space Innovation Summit 2019, a two day program, will begin at Independent University of Bangladesh (IUB) in Dhaka on Friday.

Bangladesh Innovation Forum and National Aeronautics and Space Administration (NASA) Scientific Problem Solver is organizing the event for the 2nd time.

It will be open from 10am to 6pm, on July 19 and 20.

State Minister for Information Technology, Junaid Ahmed Palak, will inaugurate the event. <br/><br/>

Bangladesh University Grants Commission Professor, Sajjad Hossain, and Head Air Commodore of the MIST Aeronautical Department, Prof M Abdus Salam, will be the special guests.

Former System Administrator at NASA, Azadul Haque, MIT Zero Lab Chief Mizanul Chowdhury, University of Robotics and MacTronics Engineering Chairperson Dr Lafifa Jamal, Dell's Solution Architect Director Mahdi Uz Zaman, Associate Dean of American International University, Bangladesh, Prof Dr Md Abdur Rahman, among others, will speak on the occasion.

The event will have 4 sessions with 16 technical seminars including workshops, space gaming competitions, project showcasing, and more, sources said.</p>
                <ul className="tags">
                  <li><a href="#.">Space News</a></li>
                  <li><a href="#.">Technology</a></li>
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
                  <div className="media-left"> <a href="blog-single.html"> <img className="media-object" src="https://media-eng.dhakatribune.com/uploads/2019/03/bigstock-edited-1552537715029.jpg" alt="title3" /></a><span>11 October</span> </div>
                  <div className="media-body"> <Link to ="/title3" className="media-heading" >Facebook suffers global outage (Read More)</Link>
                    <p>Instagram, and WhatsApp, both owned by Facebook, also fell prey to this outage</p>
                  </div>
                </li>
                <li className="media">
                  <div className="media-left"> <a href="blog-single.html"> <img className="media-object" src="https://images.idgesg.net/images/article/2017/08/4_software-engineering-100733150-large.jpg" alt="#." /></a><span>7 October</span> </div>
                  <div className="media-body"> <a className="media-heading" href="blog-single.html">Post Title Goes Here</a>
                    <p>Donec venenatis, turpis vel hendrerit interdum, dui ligula. </p>
                  </div>
                </li>
              </ul>
              <h5 className="side-tittle margin-top-50">Categories </h5>
              <ul className="cate">
                <li><a href="#."> Technology</a></li>
                <li><a href="#."> Mobile App Development</a></li>
                <li><a href="#."> Web Development</a></li>
                <li><a href="#."> Electronics</a></li>
                <li><a href="#."> IT</a></li>
              </ul>
              <h5 className="side-tittle margin-top-50">Tags </h5>
              <ul className="tags">
                <li>
                  <a href="#.">Mobile App</a>
                </li>
                <li>
                  <a href="#.">Website</a>
                </li>
                <li>
                  <a href="#.">Software</a>
                </li>
                <li>
                  <a href="#.">Ecommerce</a>
                </li>
                <li>
                  <a href="#.">Android</a>
                </li>
                <li>
                  <a href="#.">iOS</a>
                </li>
                <li>
                  <a href="#.">Electronics</a>
                </li>
                <li>
                  <a href="#.">Robotics</a>
                </li>
                <li>
                  <a href="#.">Domain</a>
                </li>
                <li>
                  <a href="#.">Hosting</a>
                </li>
                <li>
                  <a href="#.">Digital Marketing</a>
                </li>
                <li>
                  <a href="#.">IT</a>
                </li>
                <li>
                  <a href="#.">Amicritas</a>
                </li>
                <li>
                  <a href="#.">Web Application</a>
                </li>
                <li>
                  <a href="#.">Technology</a>
                </li>
              </ul>
            </div>
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