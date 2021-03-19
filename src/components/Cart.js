import React from "react";
import { Link } from "react-router-dom";

export default function Cart(props) {
  return (
    <div>
      <div className="max-w-screen-md mx-auto mt-24 p-5">
        {props.cartItems.map((ring) => (
          <div className="w-full">
            <Link to={`/shop/${ring.id}`} key={ring.id}>
              <div className="h-24 flex flex-row items-center cursor-pointer rounded-lg shadow h-full max-w-md mx-auto mb-5">
                <div
                  style={{ backgroundImage: `url(${ring.src})` }}
                  className="w-24 h-24 bg-cover bg-center rounded-l-lg"
                  title={ring.desc}
                ></div>
                <div className="w-full self-center">
                  <p className="text-center p-4 pb-2 font-mono">{ring.desc}</p>
                  <p className="text-red-600 text-center">${ring.price}</p>
                </div>
              </div>
            </Link>
            <button>x</button>
          </div>
        ))}
      </div>
      <button></button>
    </div>
  );
}
