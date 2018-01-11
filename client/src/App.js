import React from "react";
import Landing from "./pages/Landing";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing}/>
        <Route exact path="/home" component={Landing}/>
        <Route exact path="/aboutme" component={AboutMe}/>
        <Route exact path="/contact" component={Contact}/>
      </Switch>
    </Router>
    );
  }

export default App;
