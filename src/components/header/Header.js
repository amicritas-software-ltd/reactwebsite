import React, { Component } from "react";

import Topbar from "./Topbar";
import Navbar from "./Navbar";
class Header extends Component {
  render() {
    return (
      <header>
        <Topbar></Topbar>
        <Navbar></Navbar>
      </header>
    );
  }
}

export default Header;
