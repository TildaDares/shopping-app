import React from "react";
import { Link } from "react-router-dom";

export default function Cart(props) {
  return (
    <div className="max-w-screen-sm mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 mt-24 md:gap-8 p-5">
      {props.cartItems.map((ring) => (
        <Link to={`/shop/${ring.id}`} key={ring.id}>
          <div className="transition duration-500 ease-in-out transform hover:-translate-y-4 rounded-lg shadow-lg h-full max-w-sm mx-auto">
            <img
              src={ring.src}
              alt={ring.desc}
              className={"w-full object-cover h-64 mx-auto"}
            />
            <p className="text-center p-4 font-mono">{ring.desc}</p>
            <p className="text-red-600 text-center pb-5">{ring.price}</p>
            <button className="p-3 bg-red-600 rounded float-right mb-4 text-white mr-3 hover:bg-red-700">
              Remove from Cart
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
}
