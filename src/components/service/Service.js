import React, { Component } from 'react';
import {AnimatedOnScroll} from "react-animated-css-onscroll";
import { Link } from "react-router-dom";

class Service extends Component {
    render() { 
        return ( 
          
            <div id="content"> 
  <section className="services padding-top-70 padding-bottom-70">
    <div className="container"> 
      <div className="heading text-center">
        <h4>Our Services</h4>
      </div>
    </div>
    <div className="best-services"> 
      <div className="container">
      <AnimatedOnScroll animationIn="bounceInLeft" animationOut="" animationInDuration={1000} animationOutDuration={5000} isVisible={true}>
        <ul className="row list">
        
          <li className="col-md-3" data-content="#colio_c1">
            <article className="thumb"> <a className="button colio-link" href="#."> <i className="fa fa-cogs"></i>
              <h5>Web Development</h5>
              </a> </article>
          </li>
         
          <li className="col-md-3" data-content="#colio_c2">
            <article className="thumb"><a className="button colio-link" href="#."> <i className="fa fa-android"></i>
              <h5>Mobile App</h5>
              </a> </article>
          </li>
         
          <li className="col-md-3" data-content="#colio_c3">
            <article className="thumb"><a className="button colio-link" href="#."> <i className="fa fa-desktop"></i>
              <h5>Software Solutions</h5>
              </a> </article>
          </li>
          <li className="col-md-3" data-content="#colio_c4">
            <article className="thumb"><a className="button colio-link" href="#."> <i className="fa fa-chrome"></i>
              <h5>Hosting & Domain</h5>
              </a> </article>
          </li>
          </ul>
          </AnimatedOnScroll>
      </div>
    </div>
    <AnimatedOnScroll
          animationIn="jello"
          animationOut=""
          animationInDuration={1500}
          animationOutDuration={5000}
          isVisible={true}
        >
          <div
            className="text-center margin-top-50 margin-bottom-50 animate fadeInUp"
            data-wow-delay="0.4s"
          >
            <Link to="/services" className="btn margin-top-30">
              View All Services<i className="fa fa-caret-right"></i>
            </Link>
          </div>
        </AnimatedOnScroll>
    
    <div id="colio_c1" className="colio-content">
      <div className="main">
        <div className="container">
          <div className="inside-colio no-padding-bottom"> 
            
            <div className="heading text-left margin-bottom-20">
              <h4>Web Development</h4>
            </div>
            
            <div className="services-in">
              <ul className="row">
                
                <li className="col-sm-5">
                  <article className="text-left">
                    <p><strong>Here we provide Web App development, Static Website Development, Ecommerce Web Development and Web Maintenance </strong>
                      <br />
                      We are expert in Custom Social Networking Web App Development.
                      <br />
                      Web 3.0 is the next generation transformation of the World Wide Web.
                      <br />
                      Our web team is able to handle any programming task regardless of the size.
                      <br />
                      We have mastered the script and worked on dozens of websites.</p>
                    </article>
                </li>
                <li className="col-sm-7"> <img  src="http://new.uouapps.com/iod-html/html/images/img-responsive.png" alt="ipad" /> </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div id="colio_c2" className="colio-content">
      <div className="main">
        <div className="container">
          <div className="inside-colio no-padding-bottom"> 
            
            <div className="heading text-left margin-bottom-20">
              <h4>Mobile App</h4>
            </div>
            
            <div className="services-in">
              <ul className="row">
                
                <li className="col-sm-5">
                  <article className="text-left">
                    <p><strong>The foundation of Android development is built on Java – both a blessing and a curse for companies looking to create an Android app.</strong><br />
                      <br />
                      Java is one of the most popular languages, and is often one of the first taught to developers in school. What this translates to is a sea of developers that all claim to understand and be proficient in Java. This volume makes it difficult to differentiate between merely competent and highly talented Android developers. Many of the times Android App development projects fail for the incompetence of developers. Dream71 Bangladesh Ltd is one of the leading Android App Development companies in Bangladesh which comes with the promise of understanding the requirement and delivering in the most finest possible manner.<br />
                      <br />
                      </p>
                    </article>
                </li>
                <li className="col-sm-7"> <img  src="http://new.uouapps.com/iod-html/html/images/img-responsive.png" alt="ipad" /> </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div id="colio_c3" className="colio-content">
      <div className="main">
        <div className="container">
          <div className="inside-colio no-padding-bottom"> 
            
            <div className="heading text-left margin-bottom-20">
              <h4>Software Solutions</h4>
            </div>
            
            <div className="services-in">
              <ul className="row">
                
                <li className="col-sm-5">
                  <article className="text-left">
                    <p><strong>Our software teams help our customers build  customized software - everything from web to desktop to enterprise to mobile and beyond. </strong><br />
                      <br />
                      We hire only the best. Our culture helps us retain our talents and our skill development programs ensure that we are always on the top of recent developments. Whether they are in, mobile application development or building web apps or custom desktop tools, our clients get top professionals working for them,

We have been building software for various industries since 2004. We have worked with many technology platforms and have collaborated with many teams over these years.   

Our clients get a team of their own – it is as simple as that. There is no red tape – the team adapts to the working process of the client and are there as one of their own.

Our dev center is based in Bangladesh and our costs are typically less than 30% of similar service costs in the West.<br />
                      <br />
                      </p>
                    </article>
                </li>
                <li className="col-sm-7"> <img  src="http://new.uouapps.com/iod-html/html/images/img-responsive.png" alt="ipad" /> </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div id="colio_c4" className="colio-content">
      <div className="main">
        <div className="container">
          <div className="inside-colio no-padding-bottom"> 
            
            <div className="heading text-left margin-bottom-20">
              <h4>Hosting & Domain</h4>
            </div>
            
            <div className="services-in">
              <ul className="row">
                
                <li className="col-sm-5">
                  <article className="text-left">
                    <p><strong>We Provide Linux Hosting, Corporate Shared Hosting & Virtual Private Server</strong><br />
                      </p>
                      </article>
                </li>
                <li className="col-sm-7"> <img  src="http://new.uouapps.com/iod-html/html/images/img-responsive.png" alt="ipad" /> </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div> 


         );
    }
}
 
export default Service;