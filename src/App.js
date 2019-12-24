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
import Post1 from "./components/pages/blog/posts/Post1";
import Post2 from "./components/pages/blog/posts/Post2";
import Post3 from "./components/pages/blog/posts/Post3";

class App extends Component {
  render() {
    return (
      <Router forceRefresh={true}>
        <div id="wrap">
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/presentation" component={Presentation} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/team" component={Team} />
          <Route path="/products" component={Products} />
          <Route path="/blog" component={Blog} />
          <Route path="/jobs" component={Jobs} />
          <Route path="/contact" component={Contact} />
          
          <Route path="/post/facebook-to-allow-all-users" component={Post1} />
          <Route path="/post/second-space-innovation" component={Post2} />
          <Route path="/post/should-oracle-split" component={Post3} />
        </div>
      </Router>
    );
  }
}

export default App;
