import React from "react";
import { Link } from "react-router-dom";
import { Cart } from "./Cart.js";

export default function Nav(props) {
  const styles = {
    top: "2%",
    borderBottom: props.textColor === "text-white" ? "" : "1px solid #cbd5e0",
  };

  return (
    <nav
      className={
        "list-none text-xl md:text-2xl pt-4 flex justify-around w-full absolute pb-3 " +
        props.textColor
      }
      style={styles}
    >
      <Link to="/shopping-app">
        <p className="text-red-600 font-mono text-lg sm:text-3xl font-bold">
          Phoenix
        </p>
      </Link>
      <ul>
        <Link to="/shopping-app">
          <li className="inline p-3 sm:mr-5 rounded text-lg sm:text-2xl active:text-red-600 cursor-pointer hover:bg-red-700 hover:text-white">
            Home
          </li>
        </Link>
        <Link to="/shop">
          <li className="inline p-3 sm:mr-5 rounded cursor-pointer text-lg sm:text-2xl hover:bg-red-700 hover:text-white">
            Shop
          </li>
        </Link>
        <Link to="/cart">
          <li className="inline p-3 pr-5 rounded cursor-pointer hover:bg-red-700">
            <Cart textColor={props.textColor} class="w-7 sm:w-9" />
          </li>
        </Link>
      </ul>
    </nav>
  );
}
