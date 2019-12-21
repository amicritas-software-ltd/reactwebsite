import React, { Component } from 'react';
import {AnimatedOnScroll} from "react-animated-css-onscroll";
import image1 from "./img/1.png";
import image2 from "./img/2.png";
import image3 from "./img/3.png";
import image4 from "./img/4.png";
import image5 from "./img/automation.png";
import image6 from "./img/digital marketing.png";
import image7 from "./img/IT.png";
import image8 from "./img/Robotics.jpg";

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
              <p>We are using the greatest technologies to make your website secured ans fast</p>
              </a> </article>
          </li>
         
          <li className="col-md-3" data-content="#colio_c2">
            <article className="thumb"><a className="button colio-link" href="#."> <i className="fa fa-android"></i>
              <h5>Mobile App</h5>
              <p>Make your android, IOS and windows mobile app from our certifies mobile app developers</p>
              </a> </article>
          </li>
         
          <li className="col-md-3" data-content="#colio_c3">
            <article className="thumb"><a className="button colio-link" href="#."> <i className="fa fa-desktop"></i>
              <h5>Softwares</h5>
              <p>We are ready to make your desktop or web softwares with latest technologies</p>
              </a> </article>
          </li>
          <li className="col-md-3" data-content="#colio_c4">
            <article className="thumb"><a className="button colio-link" href="#."> <i className="fa fa-chrome"></i>
              <h5>Domain & Hosting</h5>
              <p>Giving the best and reliable domain and hosting solution in real time</p>
              </a> </article>
          </li>
          </ul>
          </AnimatedOnScroll>
          <AnimatedOnScroll animationIn="bounceInRight" animationOut="" animationInDuration={1000} animationOutDuration={5000} isVisible={true}>
          <ul className="row list">
          <li className="col-md-3" data-content="#colio_c5">
            <article className="thumb"><a className="button colio-link" href="#."> <i className="fa fa-wrench"></i>
              <h5>Advanced Electronics</h5>
              <p>We are using the greatest technologies to make advanced electronics items for you.</p>
              </a> </article>
          </li>
          
          <li className="col-md-3" data-content="#colio_c6">
            <article className="thumb"><a className="button colio-link" href="#."> <i className="fa fa-bar-chart"></i>
              <h5>Digital Marketing</h5>
              <p>We are providing good marketing solutions for your business</p>
              </a> </article>
          </li>
          
          <li className="col-md-3" data-content="#colio_c7">
            <article className="thumb"><a className="button colio-link" href="#."> <i className="fa fa-laptop"></i>
              <h5>IT Supports</h5>
              <p>We are providing the best IT solutions for your business</p>
              </a> </article>
          </li>
          
          <li className="col-md-3" data-content="#colio_c8">
            <article className="thumb"><a className="button colio-link" href="#."> <i className="fa fa-rocket"></i>
              <h5>Robotics Solutions</h5>
              <p>We are confident enough to provide you good robotics solutions</p>
              </a> </article>
          </li>
          
        </ul>
        </AnimatedOnScroll>
      </div>
    </div>
    
    <div id="colio_c1" className="colio-content">
      <div className="main">
        <div className="container">
          <div className="inside-colio no-padding-bottom"> 
            
            <div className="heading text-left margin-bottom-20">
              <h4>Web Design & Development</h4>
            </div>
            
            <div className="services-in">
              <ul className="row">
                
                <li className="col-sm-5">
                <article className="text-left">
                    <p><strong>We have a team of Talented, Certified and strongly skilled developers to serve you the best design and development services.</strong><br/>
                      <br />
                      <strong>What services we are offering:</strong>
                      <br />
                      <i className="fa fa-check"></i> E-commerce & Online shop
                      <br />
                      <i className="fa fa-check"></i> Company or Brand websites
                      <br />
                      <i className="fa fa-check"></i> Educational institution Website
                      <br />
                      <i className="fa fa-check"></i> Personal & Portfolio websites
                      <br />
                      <i className="fa fa-check"></i> Blog websites
                      <br />
                      <i className="fa fa-check"></i> Newspaper Websites
                      <br />
                      <i className="fa fa-check"></i> Tours/Travels/Hotels/Flights or booking websites
                      <br />
                      <i className="fa fa-check"></i> Event Management websites
                      <br />
                      <i className="fa fa-check"></i> Real estate websites
                      <br />
                      <i className="fa fa-check"></i> Engineering/Interior/Construction websites
                      <br />
                      <i className="fa fa-check"></i> Marketng/Law farm/Garments/Financial websites
                      <br />
                      <i className="fa fa-check"></i> Online TV/Online Radio and many more websites
                      </p>
                    </article>
                </li>
                <li className="col-sm-7"> <img  src={image1} alt="ipad" /> </li>
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
              <h4>Mobile App Development</h4>
            </div>
            
            <div className="services-in">
              <ul className="row">
                
                <li className="col-sm-5">
                <article className="text-left">
                    <p><strong>We build your android IOS or windows mobile app to work exactly like you want! We focus on your demand and give you a best output.</strong><br />
                    <br />
                      <strong>We are offering android, IOS or windows app for:</strong>
                      <br />
                      <i className="fa fa-check"></i> E-commerce & Online shop apps
                      <br />
                      <i className="fa fa-check"></i> Community & Social apps
                      <br />
                      <i className="fa fa-check"></i> Online Business apps
                      <br />
                      <i className="fa fa-check"></i> Online Newspaper apps
                      <br />
                      <i className="fa fa-check"></i> Online TV/Radio apps
                      <br />
                      <i className="fa fa-check"></i> School/Collage/University apps
                      <br />
                      <i className="fa fa-check"></i> Any kind of management apps
                      <br />
                      <i className="fa fa-check"></i> Communications & Client support apps
                      <br />
                      <i className="fa fa-check"></i> E-learning apps
                      <br />
                      <i className="fa fa-check"></i> Event/Tours/Flight/Hotel booking apps
                      <br />
                      <i className="fa fa-check"></i> Organizational Apps
                      <br />
                      <i className="fa fa-check"></i> And any kind of apps based on your demand
                      </p>
                    </article>
                </li>
                <li className="col-sm-7"> <img  src={image2} alt="ipad" /> </li>
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
              <h4>Softwares</h4>
            </div>
            
            <div className="services-in">
              <ul className="row">
                
                <li className="col-sm-5">
                <article className="text-left">
                    <p><strong>Our software engineers help you to build customized software - everything from web to desktop to enterprise to mobile and beyond. </strong><br />
                    <br />
                      <strong>The software solutions we are giving:</strong>
                      <br />
                      <i className="fa fa-check"></i> Accounting software for businesses
                      <br />
                      <i className="fa fa-check"></i> School management software
                      <br />
                      <i className="fa fa-check"></i> Online learning management software
                      <br />
                      <i className="fa fa-check"></i> Payroll & Office management software
                      <br />
                      <i className="fa fa-check"></i> Business/Multimedia software
                      <br />
                      <i className="fa fa-check"></i> Hospital management software
                      <br />
                      <i className="fa fa-check"></i> Shop management software
                      <br />
                      <i className="fa fa-check"></i> Hotel & resort/Travel agency management software
                      <br />
                      <i className="fa fa-check"></i> Any kind of appointment management software
                      <br />
                      <i className="fa fa-check"></i> HRM/CRM/ERP software
                      <br />
                      <i className="fa fa-check"></i> Ticket/Event management software
                      <br />
                      <i className="fa fa-check"></i> Builders & Construction management software
                      </p>
                    </article>
                </li>
                <li className="col-sm-7"> <img  src={image3} alt="ipad" /> </li>
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
                    <p><strong>You can buy a domain and hosting packages from us in a minute! get a cheap and fast hosting server now!</strong>
                    <br /><br />
                      <strong>Our domain & hosting features are:</strong>
                      <br />
                      <i className="fa fa-check"></i> Any kind of domain TLD's
                      <br />
                      <i className="fa fa-check"></i> Get your domain only in a minute
                      <br />
                      <i className="fa fa-check"></i> Cloud Linux based hosting server
                      <br />
                      <i className="fa fa-check"></i> Unlimited database and hosting spaces
                      <br />
                      <i className="fa fa-check"></i> 1 Click app install features/Website builder
                      <br />
                      <i className="fa fa-check"></i> 99.99% uptime guarantee
                      <br />
                      <i className="fa fa-check"></i> Easy to use Cpanel
                      <br />
                      <i className="fa fa-check"></i> SSL Certificates for security
                      <br />
                      <i className="fa fa-check"></i> Transfer domain & hosting
                      <br />
                      <i className="fa fa-check"></i> 24/7 Premium support
                      </p>
                      </article>
                </li>
                <li className="col-sm-7"> <img  src={image4} alt="ipad" /> </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div id="colio_c5" className="colio-content">
      <div className="main">
        <div className="container">
          <div className="inside-colio no-padding-bottom"> 
            
            <div className="heading text-left margin-bottom-20">
              <h4>Advanced Electronics</h4>
            </div>
            
            <div className="services-in">
              <ul className="row">
                
                <li className="col-sm-5">
                <article className="text-left">
                    <p><strong>You can get Advanced Electronics services from us.</strong><br />
                    <br />
                      <strong>Our Electronics Services are:</strong>
                      <br />
                      <i className="fa fa-check"></i> Any kind of AI Mechanisms.
                      <br />
                      <i className="fa fa-check"></i> Automation Systems.
                      <br />
                      <i className="fa fa-check"></i> Automatic Trackers.
                      <br />
                      <i className="fa fa-check"></i> RFID Based Access Controls.
                      <br />
                      <i className="fa fa-check"></i> PC Based Wireless Appliance Control.
                      <br />
                      <i className="fa fa-check"></i> Automatic Room Light Controller with Bidirectional Visitor Counter.
                      <br />
                      <i className="fa fa-check"></i> Finger Print Based Security System
                      <br />
                      <i className="fa fa-check"></i> Electronic Notepad
                      <br />
                      <i className="fa fa-check"></i> Wireless Control Of Robotic Arm
                      </p>
                      </article>
                </li>
                <li className="col-sm-7"> <img  src={image5} alt="ipad" /> </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div id="colio_c6" className="colio-content">
      <div className="main">
        <div className="container">
          <div className="inside-colio no-padding-bottom"> 
            
            <div className="heading text-left margin-bottom-20">
              <h4>Digital Marketing</h4>
            </div>
            
            <div className="services-in">
              <ul className="row">
                
              <li className="col-sm-5">
                <article className="text-left">
                    <p><strong>You can get Digital Marketing services from us.</strong><br />
                    <br />
                      <strong>Our Services are:</strong>
                      <br />
                      <i className="fa fa-check"></i> Chatbots.
                      <br />
                      <i className="fa fa-check"></i> Artificial Intelligence.
                      <br />
                      <i className="fa fa-check"></i> Programmatic Advertising.
                      <br />
                      <i className="fa fa-check"></i> SEO Optimization.
                      <br />
                      <i className="fa fa-check"></i> Social Media Marketing.
                      <br />
                      <i className="fa fa-check"></i> Video Marketing.
                      <br />
                      <i className="fa fa-check"></i> Mobile Advertising.
                      </p>
                      </article>
                </li>
                <li className="col-sm-7"> <img  src={image6} alt="ipad" /> </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div id="colio_c7" className="colio-content">
      <div className="main">
        <div className="container">
          <div className="inside-colio no-padding-bottom"> 
            
            <div className="heading text-left margin-bottom-20">
              <h4>IT Supports</h4>
            </div>
            
            <div className="services-in">
              <ul className="row">
                
              <li className="col-sm-5">
                <article className="text-left">
                    <p><strong>You can get IT Solutions from us.</strong><br />
                    <br />
                      <strong>Our IT Services are:</strong>
                      <br />
                      <i className="fa fa-check"></i> Configuration Management Software.
                      <br />
                      <i className="fa fa-check"></i> IT Helpdesk Software.
                      <br />
                      <i className="fa fa-check"></i> Mobile Device Management Software.
                      <br />
                      <i className="fa fa-check"></i> IT Software Case Study.
                      <br />
                      <i className="fa fa-check"></i> BLOCKCHAIN IT SOLUTIONS.
                      </p>
                      </article>
                </li>
                <li className="col-sm-7"> <img  src={image7} alt="ipad" /> </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div id="colio_c8" className="colio-content">
      <div className="main">
        <div className="container">
          <div className="inside-colio no-padding-bottom"> 
            
            <div className="heading text-left margin-bottom-20">
              <h4>Robotics Solutions</h4>
            </div>
            
            <div className="services-in">
              <ul className="row">
                
              <li className="col-sm-5">
                <article className="text-left">
                    <p><strong>Robotics is an interdisciplinary branch of engineering and science that includes mechanical engineering, electronic engineering, information engineering, computer science, and others. Robotics deals with the design, construction, operation, and use of robots, as well as computer systems for their control, sensory feedback, and information processing.</strong><br />
                    <br />
                      <strong>Our Robotics Solutions:</strong>
                      <br />
                      <i className="fa fa-check"></i> Better power sources.
                      <br />
                      <i className="fa fa-check"></i> Creating bio-inspired robots.
                      <br />
                      <i className="fa fa-check"></i> Communication in robot swarms.
                      </p>
                      </article>
                </li>
                <li className="col-sm-7"> <img  src={image8} alt="ipad" /> </li>
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