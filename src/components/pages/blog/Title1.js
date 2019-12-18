import React, { Component } from 'react';
import {AnimatedOnScroll} from "react-animated-css-onscroll";
import {Link} from "react-router-dom";


class Title1 extends Component {
    render() {
        return (
            <div id="content">
           <section className="blog blog-pages padding-top-70 padding-bottom-70">
           <AnimatedOnScroll animationIn="fadeInLeft" animationOut="" animationInDuration={1000} animationOutDuration={5000} isVisible={true}>
             <div className="container">
            <div className="row">
          <div className="col-md-8">
          <article> <img className="img-responsive" src="https://media-eng.dhakatribune.com/uploads/2019/04/untitled-1-1554447289881.jpg" alt="Wasa" />
              <div className="date"> 11 <span>July</span> </div>
              <div className="post-detail"> <Link to ="/title1" className="post-tittle">Facebook to allow all users with option to opt out of face recognition  (Read More)</Link> <span>By Admin</span>
                <p>Facebook Inc is opening up its face recognition technology to all users with an option to opt out, the social media company said on Tuesday, as it discontinued a related feature called “Tag Suggestions.”

The old feature enabled users to choose whether Facebook could suggest that their friends tag them in photos, without giving them control over other uses of the technology.

The face recognition setting, available to some Facebook users since December 2017, has additional functions such as notifying account holders if their profile photo is used by someone else.

People who opt in to the new setting will still have tag suggestions automatically generated about them.

Facebook’s face recognition technology has been at the center of a privacy related lawsuit since 2015.

The lawsuit by Illinois users accused the company of violating the state’s Biometric Information Privacy Act, claiming it illegally collected and stored biometric data of millions of users without their consent.

Last month, a federal appeals court rejected Facebook’s effort to undo the class action status of the lawsuit.

“We have always disclosed our use of face recognition technology and that people can turn it on or off at any time,” Facebook said last month.

The company said it continues to engage with privacy experts, academics, regulators and its users on face recognition and its control options.
</p>
                <ul className="tags">
                  <li><a href="#.">User Experience</a></li>
                  <li><a href="#.">html 5</a></li>
                  <li><a href="#.">Css 3</a></li>
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
export default Title1;