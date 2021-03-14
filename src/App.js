import React from "react";
import cart from "./images/cart.svg";
import mainImage from "./images/gilmore-collection.jpg";

export default function App() {
  const styles = {
    background: "url(" + mainImage + ")",
    borderLeft: "10px solid red",
    position: {
      top: "2%",
    },
  };

  return (
    <div
      style={{ backgroundImage: styles.background }}
      className="h-screen w-full bg-no-repeat bg-cover flex justify-center flex-col items-center"
    >
      <nav
        className="list-none text-white text-xl md:text-2xl pt-4 flex justify-around w-full absolute"
        style={styles.position}
      >
        <a
          href="/shopping-app"
          className="text-red-600 font-mono text-3xl font-bold"
        >
          Phoenix
        </a>
        <ul>
          <li className="inline p-3 hover:bg-gray-700 md:mr-5 rounded active:text-red-600 cursor-pointer">
            <a href="/shopping-app">Home</a>
          </li>
          <li className="inline p-3 md:mr-5 rounded hover:bg-gray-700 cursor-pointer">
            <a href="/shop">Shop</a>
          </li>
          <li className="inline p-3 pr-5 rounded hover:bg-gray-700 cursor-pointer">
            <a href="/cart">
              <img src={cart} alt="cart" className="w-9 inline md:w-9" />
            </a>
          </li>
        </ul>
      </nav>

      <div className="px-4 text-center">
        <p
          className="text-5xl sm:text-6xl lg:text-7xl text-white text-center p-3 font-mono"
          style={{ borderLeft: styles.borderLeft }}
        >
          <span className="text-red-600 mr-3">Phoenix </span> Jewellery
        </p>
        <button className="text-center bg-white text-black p-3 font-serif rounded mt-6 hover:bg-gray-200 lg:text-lg">
          Shop Now
        </button>
      </div>
    </div>
  );
}
