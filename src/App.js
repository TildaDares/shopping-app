import React, { useState } from "react";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Nav from "./components/Nav";
import ShopItem from "./components/ShopItem";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const findItemIndex = (cartItem) => {
    return cartItems.findIndex((item) => item.id === cartItem.id);
  };

  const onCartCountChange = (cartItem) => {
    const index = findItemIndex(cartItem);
    if (index < 0) {
      const copiedCartItem = cartItem;
      copiedCartItem.quantity = 1;
      setCartItems(cartItems.concat(copiedCartItem));
    }
  };

  const handleQuantityChange = (cartItem, itemQuantity) => {
    if (!itemQuantity && !isNaN(itemQuantity)) {
      removeFromCart(cartItem);
      return;
    }
    const foundIndex = findItemIndex(cartItem);
    const copiedCartItems = cartItems.map((item, index) => {
      if (index === foundIndex) {
        item.quantity = itemQuantity || 1;
      }
      return item;
    });
    setCartItems(copiedCartItems);
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
              handleQuantityChange={handleQuantityChange}
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
