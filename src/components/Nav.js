import React from "react";

export default function Nav(props) {
  const styles = {
    top: "2%",
    borderBottom: props.textColor === "text-white" ? "" : "1px solid #718096",
  };

  return (
    <nav
      className={
        "list-none text-xl md:text-2xl pt-4 flex justify-around w-full absolute " +
        props.textColor
      }
      style={styles}
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="w-9 inline md:w-9"
              stroke={props.textColor === "text-white" ? "white" : "black"}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
}
