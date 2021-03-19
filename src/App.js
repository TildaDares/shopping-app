import React, { useState } from "react";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Nav from "./components/Nav";
import ShopItem from "./components/ShopItem";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const findItem = (cartItem) =>
    cartItems.find((item) => item.id === cartItem.id);

  const onCartCountChange = (cartItem) => {
    const item = findItem(cartItem);
    if (!item) {
      const copiedCartItem = cartItem;
      copiedCartItem.quantity = 0;
      setCartItems(cartItems.concat(copiedCartItem));
    }
  };

  const addToItemQuantity = (cartItem) => {
    const item = findItem(cartItem);
    item.quantity++;
  };

  const removeFromItemQuantity = (cartItem) => {
    const item = findItem(cartItem);
    item.quantity--;
  };

  const removeFromCart = (cartItem) => {
    setCartItems(cartItems.filter((item) => item.id !== cartItem.id));
  };

  return (
    <Router>
      <Nav cartCount={cartItems.length} />
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
