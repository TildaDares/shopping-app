import React from "react";
import Shop from "./components/Shop";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/shopping-app" component={Home} />
        <Route exact path="/shop" component={Shop} />
      </Switch>
    </Router>
  );
}
