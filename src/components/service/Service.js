import React, { Component } from 'react';
import {AnimatedOnScroll} from "react-animated-css-onscroll";
import { Link } from "react-router-dom";
import image1 from "./img/1.png";
import image2 from "./img/2.png";
import image3 from "./img/3.png";
import image4 from "./img/4.png";

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
            <Link to="/services" className="btn">
              View All Services<i className="fa fa-caret-right"></i>
            </Link>
          </div>
        </AnimatedOnScroll>
    
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
                    <p><strong>We have a team of Talented, Certified and strongly skilled developers to serve you the best design and development services.</strong>
                      <br /><br />
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
              <h4>Software Solutions</h4>
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
              <h4>Hosting & Domain Solutions</h4>
            </div>
            
            <div className="services-in">
              <ul className="row">
                
                <li className="col-sm-5">
                  <article className="text-left">
                    <p><strong>You can buy a domain and hosting packages from us in a minute! get a cheap and fast hosting server now!</strong><br />
                    <br />
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
  </section>
</div> 


         );
    }
}
 
export default Service;