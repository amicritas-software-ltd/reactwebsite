import React, { Component } from "react";

import Header from "../components/header/Header";
import Slider from "../components/slider/Slider";
import Service from "../components/service/Service";
import Features from "../components/features/Features";
import Portfolioh from "../components/portfolio/Portfolioh";
import Testimonial from "../components/testimonial/Testimonial";
import Team from "../components/team/Team";
import Counter from "../components/counter/Counter";
import Client from "../components/client/Client";
import Footer from "../components/footer/Footer";
import Bottomfooter from "../components/footer/Bottomfooter";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header></Header>
        <Slider></Slider>
        <Service></Service>
        <Features></Features>
        <Portfolioh></Portfolioh>
        <Testimonial></Testimonial>
        <Team></Team>
        <Counter></Counter>
        <Client></Client>
        <Footer></Footer>
        <Bottomfooter></Bottomfooter>
      </div>
    );
  }
}

export default Home;
