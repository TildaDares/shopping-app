import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { CartSVG } from "./CartSVG";

export default function Nav(props) {
  const location = useLocation();
  const [textColor, setTextColor] = useState("text-white");
  const [activeLink, setActiveLink] = useState(location.pathname);

  const styles = {
    top: "2%",
    borderBottom: activeLink === "/shopping-app/" ? "" : "1px solid #cbd5e0",
  };

  useEffect(() => {
    if (location.pathname !== "/shopping-app/") {
      setTextColor("text-black");
    } else {
      setTextColor("text-white");
    }
    setActiveLink(location.pathname);
  }, [location]);

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
      <Link to="/shopping-app/">
        <p className="text-yellow-400 font-mono text-lg sm:text-3xl font-bold">
          Phoenix
        </p>
      </Link>
      <ul>
        <li
          className={
            "inline p-3 sm:mr-5 rounded text-lg sm:text-2xl cursor-pointer hover:bg-yellow-400 hover:text-white " +
            isActive("/shopping-app/")
          }
        >
          <Link to="/shopping-app/">Home</Link>
        </li>
        <li
          className={
            "inline p-3 sm:mr-5 rounded cursor-pointer text-lg sm:text-2xl hover:bg-yellow-400 hover:text-white " +
            isActive("/shopping-app/shop")
          }
        >
          <Link to="/shopping-app/shop">Shop</Link>
        </li>
        <li className="inline p-3 pr-5 rounded cursor-pointer hover:bg-yellow-400 hover:text-white">
          <Link to="/shopping-app/cart">
            <CartSVG class={"w-7 sm:w-9 " + isActive("/shopping-app/cart")} />
            <sup
              className={"hover:text-white " + isActive("/shopping-app/cart")}
            >
              {props.cartCount}
            </sup>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
