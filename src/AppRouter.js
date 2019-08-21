import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Landing from "./views/Landing";
import Portfolio from "./views/Portfolio";

export default class AppRouter extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={Landing}></Route>
            <Route path="/portfolio" component={Portfolio}></Route>
          </Switch>
        </Router>
      </>
    );
  }
}
