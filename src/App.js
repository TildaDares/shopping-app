import React, { useState } from "react";
import Shop from "./components/Shop";
import Home from "./components/Home";
import Nav from "./components/Nav";
import ShopItem from "./components/ShopItem";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  const [cartCount, setCartCount] = useState(0);
  const onCartCountChange = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <Router>
      <Nav cartCount={cartCount} />
      <Switch>
        <Route exact path="/shopping-app" component={Home} />
        <Route
          exact
          path="/shop"
          render={(props) => (
            <Shop {...props} onCartCountChange={onCartCountChange} />
          )}
        />
        <Route
          exact
          path="/shop/:id"
          render={(props) => (
            <ShopItem {...props} onCartCountChange={onCartCountChange} />
          )}
        />
      </Switch>
    </Router>
  );
}
