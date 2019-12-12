import React, { Component } from "react";
import {AnimatedOnScroll} from "react-animated-css-onscroll";
import HorizontalTimeline from "react-horizontal-timeline";

const EXAMPLE = [
  {
    data: "Sep 22 2015",
    imgsrc: "http://new.uouapps.com/iod-html/html/images/time-line-img.jpg",
    title: "title 1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit Ab quos minus iste eum distinctio illum aliquam perferendis delectus quo voluptatum accusamus velit sequi culpa, quibusdam, temporibus eligendi, doloremque itaque voluptates."
  },
  {
    data: "Aug 03 2016",
    imgsrc: "http://new.uouapps.com/iod-html/html/images/time-line-img.jpg",
    title: "title 2",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit Ab quos minus iste eum distinctio illum aliquam perferendis delectus quo voluptatum accusamus velit sequi culpa, quibusdam, temporibus eligendi, doloremque itaque voluptates."
  },
  {
    data: "Dec 25 2017",
    imgsrc: "http://new.uouapps.com/iod-html/html/images/time-line-img.jpg",
    title: "title 3",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit Ab quos minus iste eum distinctio illum aliquam perferendis delectus quo voluptatum accusamus velit sequi culpa, quibusdam, temporibus eligendi, doloremque itaque voluptates."
  },
  {
    data: "Feb 23 2018",
    imgsrc: "http://new.uouapps.com/iod-html/html/images/time-line-img.jpg",
    title: "title 4",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit Ab quos minus iste eum distinctio illum aliquam perferendis delectus quo voluptatum accusamus velit sequi culpa, quibusdam, temporibus eligendi, doloremque itaque voluptates."
  },
  {
    data: "Aug 25 2019",
    imgsrc: "http://new.uouapps.com/iod-html/html/images/time-line-img.jpg",
    title: "title 5",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit Ab quos minus iste eum distinctio illum aliquam perferendis delectus quo voluptatum accusamus velit sequi culpa, quibusdam, temporibus eligendi, doloremque itaque voluptates."
  }
];

class Companyhistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curIdx: 0,
      prevIdx: -1
    };
  }
  render() {
    const { curIdx, prevIdx } = this.state;
    const curStatus = EXAMPLE[curIdx];
    return (
      <section className="light-gray-bg padding-top-70 padding-bottom-70">
        <AnimatedOnScroll animationIn="bounceInRight" animationOut="" animationInDuration={1000} animationOutDuration={5000} isVisible={true}>
        <div className="container">
          <div className="heading text-left">
            <h4>company history</h4>
          </div>

          <div id="timeline" className="col-lg-10 col-md-12 col-sm-12">
            <div>
              <div style={{ width: "100%", height: "100px", margin: "0 auto" }}>
                <HorizontalTimeline
                  index={this.state.curIdx}
                  indexClick={index => {
                    const curIdx = this.state.curIdx;
                    this.setState({ curIdx: index, prevIdx: curIdx });
                  }}
                  values={EXAMPLE.map(x => x.data)}
                />
              </div>
              <br />
              <div className="text-center">
                <ul id="issues" className="custom-list">
                  <li id="date1">
                    <div className="row">
                      <div className="history-thumbnail col-lg-6 col-lg-offset-1 col-md-6 col-md-offset-1 col-sm-7 col-sm-offset-0">
                        <img src={curStatus.imgsrc} alt="history" />
                      </div>
                      <div className="history-content col-lg-5 col-md-5 col-sm-5">
                        <span className="date">{curStatus.data}</span>
                        <h5 className="title">{curStatus.title}</h5>
                        <p>{curStatus.content}</p>
                        <p style={{ display: "none" }}>{prevIdx}</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        </AnimatedOnScroll>
      </section>
    );
  }
}

export default Companyhistory;
