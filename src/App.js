import React, { Component } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Team from "./pages/Team";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Portfolio from "./pages/portfolio";
import Jobs from "./pages/Jobs";
import Presentation from "./pages/Presentation";
import Products from "./pages/Products";
import Title1 from "./components/pages/blog/Title1";
import Title2 from "./components/pages/blog/Title2";
import Title3 from "./components/pages/blog/Title3"

class App extends Component {
  render() {
    return (
      <Router forceRefresh={true}>
        <div id="wrap">
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/team" component={Team} />
          <Route path="/services" component={Services} />
          <Route path="/products" component={Products} />
          <Route path="/blog" component={Blog} />
          <Route path="/contact" component={Contact} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/jobs" component={Jobs} />
          <Route path="/presentation" component={Presentation} />
          <Route exact path="/title1" component={Title1} />
          <Route exact path="/title2" component={Title2} />
          <Route exact path="/title3" component={Title3} />
        </div>
      </Router>
    );
  }
}

export default App;
