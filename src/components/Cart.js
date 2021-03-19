import React from "react";
import { Link } from "react-router-dom";

export default function Cart(props) {
  const handleChange = (e, ring) => {
    props.handleQuantityChange(ring, Number(e.target.value));
  };

  return (
    <div>
      <div className="max-w-screen-md mx-auto mt-24 p-5">
        {props.cartItems.map((ring) => (
          <div className="w-full" key={ring.id}>
            <div className="h-24 flex flex-row items-center cursor-pointer rounded-lg shadow h-full max-w-md mx-auto mb-5">
              <Link to={`/shop/${ring.id}`} className="p-4">
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
                <div className="flex justify-center my-3">
                  <button
                    className="focus:outline-none bg-gray-200 p-2 h-auto py-0 hover:bg-gray-300 focus:ring-2 focus:ring-gray-300"
                    onClick={() =>
                      props.handleQuantityChange(ring, ring.quantity - 1)
                    }
                  >
                    -
                  </button>
                  <input
                    type="text"
                    className="mx-2 p-2 py-0 border-2 border-gray-100 w-10 text-center focus:outline-none focus:border-gray-400"
                    onChange={(e) => handleChange(e, ring)}
                    value={ring.quantity}
                  />
                  <button
                    className="focus:outline-none bg-gray-200 p-2 h-auto py-0 hover:bg-gray-300 focus:ring-2 focus:ring-gray-300"
                    onClick={() =>
                      props.handleQuantityChange(ring, ring.quantity + 1)
                    }
                  >
                    +
                  </button>
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
