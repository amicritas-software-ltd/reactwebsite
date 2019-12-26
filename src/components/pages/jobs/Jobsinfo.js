import React, { Component } from 'react';

class Jobsinfo extends Component {

    render() {
        return (
            <div id="content"> 
    
    <section class="job padding-top-70 padding-bottom-70">
      <div class="container"> 
        
        <div class="col-md-10">   
          <div id="accordion"> 
            <div class="job-content job-post-page margin-top-20"> 
              <div class="panel-group">
                <div class="panel panel-default">
                  <div class="panel-heading"> <a data-toggle="collapse" data-parent="" href="#job1">
                    <div class="job-tittle">
                      <div class="media-left">
                        <div class="date"> 1 <span>February</span> </div>
                      </div>
                      <div class="media-body">
                        <h5>Web Developer</h5>
                        <span>Uttara, Dhaka</span> </div>
                    </div>
                    </a>
                    <p><strong>We need a experienced Web Developer for our company.</strong></p>
                  </div>
                  
                  <div id="job1" class="panel-collapse collapse in">
                    <div class="panel-body">
                      <p> <br/>
                        Candidate who want to apply in this job must have to ensure that he/she have the advanced skills on the particular languages mentioned below:</p>
                      <ul class="margin-top-30 padding-left-50">
                        <li>
                          <p> •  CSS3</p>
                        </li>
                        <li>
                          <p> •  JS</p>
                        </li>
                        <li>
                          <p> •  BootStrap4</p>
                        </li>
                        <li>
                          <p> •  PHP</p>
                        </li>
                      </ul>
                      
                      <h5 class="margin-top-50">Required Skills</h5>
                      <div class="job-skills"> 
                        
                        <ul class="row">
                          <li class="col-sm-3">
                            <h6><i class="fa fa-plus"></i> Logo Design</h6>
                          </li>
                          <li class="col-sm-9">
                            <div class="progress">
                              <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" > </div>
                            </div>
                          </li>
                        </ul>
                        
                        <ul class="row">
                          <li class="col-sm-3">
                            <h6><i class="fa fa-plus"></i> Web Design</h6>
                          </li>
                          <li class="col-sm-9">
                            <div class="progress">
                              <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" > </div>
                            </div>
                          </li>
                        </ul>
                        
                        <ul class="row">
                          <li class="col-sm-3">
                            <h6><i class="fa fa-plus"></i> UI/UX</h6>
                          </li>
                          <li class="col-sm-9">
                            <div class="progress">
                              <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"> </div>
                            </div>
                            <p>Preferred languages are Arabic, French & Italian. Proin nibh augue, suscipit asce lerisque sed, lacinia in, mi.</p>
                          </li>
                        </ul>
                        
                        <h5 class="margin-top-50">Additional Requirements</h5>
                        <ul class="tags dall margin-bottom-40">
                          <li><a href="#.">WORK PERMIT</a></li>
                          <li><a href="#.">5 Years Experience</a></li>
                          <li><a href="#.">MBA</a></li>
                          <li><a href="#.">Magento Certified</a></li>
                          <li><a href="#.">english proficient</a></li>
                        </ul>
                        </div>
                        </div>
              </div>
            </div>
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

export default Jobsinfo;