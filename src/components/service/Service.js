import React, { Component } from 'react';
import {AnimatedOnScroll} from "react-animated-css-onscroll";

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
        <ul className="row list">
        <AnimatedOnScroll animationIn="bounceInLeft" animationOut="" animationInDuration={1000} animationOutDuration={5000} isVisible={true}>

          <li className="col-md-3" data-content="#colio_c1">
            <article className="thumb"> <a className="button colio-link" href="#."> <i className="fa fa-cogs"></i>
              <h5>Web Development</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Proin nibh augue.</p>
              </a> </article>
          </li>
          </AnimatedOnScroll>
          <AnimatedOnScroll animationIn="bounceInLeft" animationOut="" animationInDuration={1000} animationOutDuration={5000} isVisible={true}>
          <li className="col-md-3" data-content="#colio_c2">
            <article className="thumb"><a className="button colio-link" href="#."> <i className="fa fa-android"></i>
              <h5>Mobile App</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Proin nibh augue.</p>
              </a> </article>
          </li>
          </AnimatedOnScroll>
          <AnimatedOnScroll animationIn="bounceInRight" animationOut="" animationInDuration={1000} animationOutDuration={5000} isVisible={true}>
          <li className="col-md-3" data-content="#colio_c3">
            <article className="thumb"><a className="button colio-link" href="#."> <i className="fa fa-desktop"></i>
              <h5>Software Solutions</h5>
              <p> Proin nibh augue.</p>
              </a> </article>
          </li></AnimatedOnScroll>
          <AnimatedOnScroll animationIn="bounceInRight" animationOut="" animationInDuration={1000} animationOutDuration={5000} isVisible={true}>
          <li className="col-md-3" data-content="#colio_c4">
            <article className="thumb"><a className="button colio-link" href="#."> <i className="fa fa-chrome"></i>
              <h5>Hosting & Domain</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Proin nibh augue.</p>
              </a> </article>
          </li></AnimatedOnScroll>
          <AnimatedOnScroll animationIn="bounceInLeft" animationOut="" animationInDuration={1000} animationOutDuration={5000} isVisible={true}>
          <li className="col-md-3" data-content="#colio_c5">
            <article className="thumb"><a className="button colio-link" href="#."> <i className="fa fa-wrench"></i>
              <h5>Advanced Electronics</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Proin nibh augue.</p>
              </a> </article>
          </li>
          </AnimatedOnScroll>
          <AnimatedOnScroll animationIn="bounceInLeft" animationOut="" animationInDuration={1000} animationOutDuration={5000} isVisible={true}>
          <li className="col-md-3" data-content="#colio_c6">
            <article className="thumb"><a className="button colio-link" href="#."> <i className="fa fa-bar-chart"></i>
              <h5>Digital Marketing</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Proin nibh augue.</p>
              </a> </article>
          </li>
          </AnimatedOnScroll>
          <AnimatedOnScroll animationIn="bounceInRight" animationOut="" animationInDuration={1000} animationOutDuration={5000} isVisible={true}>
          <li className="col-md-3" data-content="#colio_c7">
            <article className="thumb"><a className="button colio-link" href="#."> <i className="fa fa-laptop"></i>
              <h5>IT Supports</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Proin nibh augue.</p>
              </a> </article>
          </li>
          </AnimatedOnScroll>
          <AnimatedOnScroll animationIn="bounceInRight" animationOut="" animationInDuration={1000} animationOutDuration={5000} isVisible={true}>
          <li className="col-md-3" data-content="#colio_c8">
            <article className="thumb"><a className="button colio-link" href="#."> <i className="fa fa-rocket"></i>
              <h5>Robotics Solutions</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Proin nibh augue.</p>
              </a> </article>
          </li>
          </AnimatedOnScroll>
        </ul>
      </div>
    </div>
    
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
                    <p><strong>Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam. Quisque semper justo at risus.</strong><br />
                      <br />
                      Donec venenatis, turpis vel hendrerit interdum, dui ligula ultricies purus, sed posuere libero dui id orci. Nam congue, pede vitae dapibus aliquet, elit magna vulputate arcu, vel tempus metus leo non est. <br />
                      <br />
                      Etiam sit amet lectus quis est congue mollis. Phasellus congue lacus eget neque. Phasellus ornare, ante vitae consectetuer consequat, purus sapien ultricies dolor, et mollis pede metus eget nisi. Praesent sodales velit quis augue. Cras suscipit, urna at aliquam.</p>
                    <a href="#." className="btn btn-1">Read More <i className="fa fa-caret-right"></i></a></article>
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
                    <p><strong>Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam. Quisque semper justo at risus.</strong><br />
                      <br />
                      Donec venenatis, turpis vel hendrerit interdum, dui ligula ultricies purus, sed posuere libero dui id orci. Nam congue, pede vitae dapibus aliquet, elit magna vulputate arcu, vel tempus metus leo non est. <br />
                      <br />
                      Etiam sit amet lectus quis est congue mollis. Phasellus congue lacus eget neque. Phasellus ornare, ante vitae consectetuer consequat, purus sapien ultricies dolor, et mollis pede metus eget nisi. Praesent sodales velit quis augue. Cras suscipit, urna at aliquam.</p>
                    <a href="#." className="btn btn-1">Read More <i className="fa fa-caret-right"></i></a></article>
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
                    <p><strong>Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam. Quisque semper justo at risus.</strong><br />
                      <br />
                      Donec venenatis, turpis vel hendrerit interdum, dui ligula ultricies purus, sed posuere libero dui id orci. Nam congue, pede vitae dapibus aliquet, elit magna vulputate arcu, vel tempus metus leo non est. <br />
                      <br />
                      Etiam sit amet lectus quis est congue mollis. Phasellus congue lacus eget neque. Phasellus ornare, ante vitae consectetuer consequat, purus sapien ultricies dolor, et mollis pede metus eget nisi. Praesent sodales velit quis augue. Cras suscipit, urna at aliquam.</p>
                    <a href="#." className="btn btn-1">Read More <i className="fa fa-caret-right"></i></a></article>
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
                    <p><strong>Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam. Quisque semper justo at risus.</strong><br />
                      <br />
                      Donec venenatis, turpis vel hendrerit interdum, dui ligula ultricies purus, sed posuere libero dui id orci. Nam congue, pede vitae dapibus aliquet, elit magna vulputate arcu, vel tempus metus leo non est. <br />
                      <br />
                      Etiam sit amet lectus quis est congue mollis. Phasellus congue lacus eget neque. Phasellus ornare, ante vitae consectetuer consequat, purus sapien ultricies dolor, et mollis pede metus eget nisi. Praesent sodales velit quis augue. Cras suscipit, urna at aliquam.</p>
                    <a href="#." className="btn btn-1">Read More <i className="fa fa-caret-right"></i></a></article>
                </li>
                <li className="col-sm-7"> <img  src="http://new.uouapps.com/iod-html/html/images/img-responsive.png" alt="ipad" /> </li>
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
                    <p><strong>Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam. Quisque semper justo at risus.</strong><br />
                      <br />
                      Donec venenatis, turpis vel hendrerit interdum, dui ligula ultricies purus, sed posuere libero dui id orci. Nam congue, pede vitae dapibus aliquet, elit magna vulputate arcu, vel tempus metus leo non est. <br />
                      <br />
                      Etiam sit amet lectus quis est congue mollis. Phasellus congue lacus eget neque. Phasellus ornare, ante vitae consectetuer consequat, purus sapien ultricies dolor, et mollis pede metus eget nisi. Praesent sodales velit quis augue. Cras suscipit, urna at aliquam.</p>
                    <a href="#." className="btn btn-1">Read More <i className="fa fa-caret-right"></i></a></article>
                </li>
                <li className="col-sm-7"> <img  src="http://new.uouapps.com/iod-html/html/images/img-responsive.png" alt="ipad" /> </li>
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
                    <p><strong>Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam. Quisque semper justo at risus.</strong><br />
                      <br />
                      Donec venenatis, turpis vel hendrerit interdum, dui ligula ultricies purus, sed posuere libero dui id orci. Nam congue, pede vitae dapibus aliquet, elit magna vulputate arcu, vel tempus metus leo non est. <br />
                      <br />
                      Etiam sit amet lectus quis est congue mollis. Phasellus congue lacus eget neque. Phasellus ornare, ante vitae consectetuer consequat, purus sapien ultricies dolor, et mollis pede metus eget nisi. Praesent sodales velit quis augue. Cras suscipit, urna at aliquam.</p>
                    <a href="#." className="btn btn-1">Read More <i className="fa fa-caret-right"></i></a></article>
                </li>
                <li className="col-sm-7"> <img  src="http://new.uouapps.com/iod-html/html/images/img-responsive.png" alt="ipad" /> </li>
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
                    <p><strong>Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam. Quisque semper justo at risus.</strong><br />
                      <br />
                      Donec venenatis, turpis vel hendrerit interdum, dui ligula ultricies purus, sed posuere libero dui id orci. Nam congue, pede vitae dapibus aliquet, elit magna vulputate arcu, vel tempus metus leo non est. <br />
                      <br />
                      Etiam sit amet lectus quis est congue mollis. Phasellus congue lacus eget neque. Phasellus ornare, ante vitae consectetuer consequat, purus sapien ultricies dolor, et mollis pede metus eget nisi. Praesent sodales velit quis augue. Cras suscipit, urna at aliquam.</p>
                    <a href="#." className="btn btn-1">Read More <i className="fa fa-caret-right"></i></a></article>
                </li>
                <li className="col-sm-7"> <img  src="http://new.uouapps.com/iod-html/html/images/img-responsive.png" alt="ipad" /> </li>
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
                    <p><strong>Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam. Quisque semper justo at risus.</strong><br />
                      <br />
                      Donec venenatis, turpis vel hendrerit interdum, dui ligula ultricies purus, sed posuere libero dui id orci. Nam congue, pede vitae dapibus aliquet, elit magna vulputate arcu, vel tempus metus leo non est. <br />
                      <br />
                      Etiam sit amet lectus quis est congue mollis. Phasellus congue lacus eget neque. Phasellus ornare, ante vitae consectetuer consequat, purus sapien ultricies dolor, et mollis pede metus eget nisi. Praesent sodales velit quis augue. Cras suscipit, urna at aliquam.</p>
                    <a href="#." className="btn btn-1">Read More <i className="fa fa-caret-right"></i></a></article>
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