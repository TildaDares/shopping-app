import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Cart } from "./Cart.js";

export default function Nav() {
  const [textColor, setTextColor] = useState("text-white");
  const [activeLink, setActiveLink] = useState("/shopping-app");
  const styles = {
    top: "2%",
    borderBottom: textColor === "text-white" ? "" : "1px solid #cbd5e0",
  };

  const handleColorChange = (id, color) => {
    setTextColor(color);
    setActiveLink(id);
  };

  const isActive = (link) => (link === activeLink ? "text-red-700" : textColor);

  return (
    <nav
      className={
        "list-none text-xl md:text-2xl pt-4 flex justify-around w-full absolute pb-3 " +
        textColor
      }
      style={styles}
    >
      <Link
        to="/shopping-app"
        onClick={() => handleColorChange("/shopping-app", "text-white")}
      >
        <p className="text-red-600 font-mono text-lg sm:text-3xl font-bold">
          Phoenix
        </p>
      </Link>
      <ul>
        <Link
          to="/shopping-app"
          onClick={() => handleColorChange("/shopping-app", "text-white")}
        >
          <li
            className={
              "inline p-3 sm:mr-5 rounded text-lg sm:text-2xl active:text-red-600 cursor-pointer hover:bg-red-700 hover:text-white " +
              isActive("/shopping-app")
            }
          >
            Home
          </li>
        </Link>
        <Link
          to="/shop"
          onClick={() => handleColorChange("/shop", "text-black")}
        >
          <li
            className={
              "inline p-3 sm:mr-5 rounded cursor-pointer text-lg sm:text-2xl hover:bg-red-700 hover:text-white " +
              isActive("/shop")
            }
          >
            Shop
          </li>
        </Link>
        <Link
          to="/cart"
          onClick={() => handleColorChange("/cart", "text-black")}
        >
          <li className="inline p-3 pr-5 rounded cursor-pointer hover:bg-red-700 hover:text-white">
            <Cart class={"w-7 sm:w-9 " + isActive("/cart")} />
            <sup>3</sup>
          </li>
        </Link>
      </ul>
    </nav>
  );
}
