import React from "react";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/aboutme" component={AboutMe}/>
        <Route exact path="/contact" component={Contact}/>
      </Switch>
    </Router>
    );
  }

export default App;
