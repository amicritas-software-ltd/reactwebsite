import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Team from "./pages/Team";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Portfolio from "./pages/portfolio";
import Jobs from "./pages/Jobs";

function App() {
  return (
    <Router forceRefresh={true}>
      <div id="wrap">
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/team" component={Team} />
        <Route path="/services" component={Services} />
        <Route path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/jobs" component={Jobs} />
      </div>
    </Router>
  );
}

export default App;
