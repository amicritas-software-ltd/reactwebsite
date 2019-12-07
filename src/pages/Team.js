import React, { Component } from 'react';
import Header from "../components/header/Header";
import Pagetop from "../components/pages/Pagetop";
import TeamInfo from "../components/pages/team/TeamInfo";
import Footer from "../components/footer/Footer";
import Bottomfooter from "../components/footer/Bottomfooter";

class Team extends Component{
    state = {
        title: "Team",
        background:
          "http://new.uouapps.com/iod-html/html/images/bg/sub-bnr-bg-1.jpg",
        name: "Team"
      };
    render(){
        return(
            <header>
            <Header></Header>
            <Pagetop
          Title={this.state.title}
          Background={this.state.background}
          Name={this.state.name}
        />
            <TeamInfo></TeamInfo>
            <Footer></Footer>
            <Bottomfooter></Bottomfooter>
            </header>
        );
    }
}
export default Team;