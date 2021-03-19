import React from "react";
import { Link } from "react-router-dom";

export default function Cart(props) {
  return (
    <div>
      <div className="max-w-screen-md mx-auto mt-24 p-5">
        {props.cartItems.map((ring) => (
          <div className="w-full">
            <div className="h-24 flex flex-row items-center cursor-pointer rounded-lg shadow h-full max-w-md mx-auto mb-5">
              <Link to={`/shop/${ring.id}`} key={ring.id} className="p-4">
                <div
                  style={{ backgroundImage: `url(${ring.src})` }}
                  className="w-24 h-24 bg-cover bg-center rounded-lg"
                  title={ring.desc}
                ></div>
              </Link>
              <div className="w-full self-center">
                <Link to={`/shop/${ring.id}`} key={ring.id}>
                  <p className="text-center p-4 pb-2 font-mono">{ring.desc}</p>
                  <p className="text-red-600 text-center">${ring.price}</p>
                </Link>
                <div className="flex justify-center w-full my-3">
                  <button className="bg-gray-200 p-2 h-auto py-0">-</button>
                  <p className="mx-3">1</p>
                  <button className="bg-gray-200 p-2 h-auto py-0">+</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button></button>
    </div>
  );
}
