import React from "react";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "semantic-ui-react";

const App = () => {
  return (
    <Router>
      <Container fluid>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/aboutme" component={AboutMe}/>
        </Switch>
      </Container>
    </Router>
    );
  }

export default App;
