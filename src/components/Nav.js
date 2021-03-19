import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartSVG } from "./CartSVG.js";

export default function Nav(props) {
  const [textColor, setTextColor] = useState("text-white");
  const [activeLink, setActiveLink] = useState(window.location.pathname);
  const styles = {
    top: "2%",
    borderBottom: textColor === "text-white" ? "" : "1px solid #cbd5e0",
  };

  useEffect(() => {
    let color = localStorage.getItem("textColor");
    let link = localStorage.getItem("activeLink");
    if (link && color && window.location.pathname !== "/shopping-app") {
      setTextColor(color);
      setActiveLink(link);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("textColor", textColor);
    localStorage.setItem("activeLink", activeLink);
  }, [textColor, activeLink]);

  const handleColorChange = (id, color) => {
    setTextColor(color);
    setActiveLink(id);
  };

  const isActive = (link) =>
    link === activeLink ? "text-yellow-400" : textColor;

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
        <p className="text-yellow-400 font-mono text-lg sm:text-3xl font-bold">
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
              "inline p-3 sm:mr-5 rounded text-lg sm:text-2xl cursor-pointer hover:bg-yellow-400 hover:text-white " +
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
              "inline p-3 sm:mr-5 rounded cursor-pointer text-lg sm:text-2xl hover:bg-yellow-400 hover:text-white " +
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
          <li className="inline p-3 pr-5 rounded cursor-pointer hover:bg-yellow-400 hover:text-white">
            <CartSVG class={"w-7 sm:w-9 " + isActive("/cart")} />
            <sup className={"hover:text-white " + isActive("/cart")}>
              {props.cartCount}
            </sup>
          </li>
        </Link>
      </ul>
    </nav>
  );
}
