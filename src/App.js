import React, { useState } from "react";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Nav from "./components/Nav";
import ShopItem from "./components/ShopItem";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const onCartCountChange = (cartItem) => {
    const findItem = cartItems.find((item) => item.id === cartItem.id);
    if (!findItem) {
      setCartCount(cartCount + 1);
      setCartItems(cartItems.concat(cartItem));
    }
  };

  const removeFromCart = (cartItem) => {
    setCartCount(cartCount - 1);
    setCartItems(cartItems.filter((item) => item.id !== cartItem.id));
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
          path="/cart"
          render={(props) => (
            <Cart
              {...props}
              cartItems={cartItems}
              removeFromCart={removeFromCart}
            />
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
