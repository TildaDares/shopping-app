import React from "react";
import Shop from "./components/Shop";
import Home from "./components/Home";
import Nav from "./components/Nav";
import ShopItem from "./components/ShopItem";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/shopping-app" component={Home} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/shop/:id" component={ShopItem} />
      </Switch>
    </Router>
  );
}
