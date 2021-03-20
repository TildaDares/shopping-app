import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Cart(props) {
  const [checkoutMessage, setCheckoutMessage] = useState(false);
  const handleChange = (e, ring) => {
    props.handleQuantityChange(ring, Number(e.target.value));
  };

  const getTotalPrice = () => {
    let totalPrice = 0;
    props.cartItems.forEach((item) => {
      totalPrice += item.price * item.quantity;
    });
    return totalPrice;
  };

  const handleCheckout = () => {
    props.clearCart();
    setCheckoutMessage(true);
  };

  const getTotalQuantity = () => {
    let totalQuantity = 0;
    props.cartItems.forEach((item) => {
      totalQuantity += item.quantity;
    });
    return totalQuantity;
  };

  if (props.cartItems.length) {
    return (
      <div className="max-w-screen-md mx-auto mt-24 p-5">
        {props.cartItems.map((ring) => (
          <div
            className="w-full h-24 flex flex-row items-center cursor-pointer rounded-lg shadow h-full max-w-md mx-auto mb-8"
            key={ring.id}
          >
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
        ))}
        <h3 className="pb-3 font-mono mt-16">Order Summary</h3>
        <hr />
        <table
          className="leading-normal text-sm font-mono"
          style={{ borderCollapse: "inherit", borderSpacing: "10px" }}
        >
          <tr>
            <td>Quantity:</td>
            <td>{getTotalQuantity()}</td>
          </tr>
          <tr>
            <td>Price:</td>
            <td>${getTotalPrice()}</td>
          </tr>
          <tr>
            <td>Shipping:</td>
            <td>$0.00</td>
          </tr>
          <tr className="font-bold">
            <td>Total Cost:</td>
            <td>${getTotalPrice()}</td>
          </tr>
        </table>
        <button
          className="bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-yellow-300 p-3 text-white rounded float-right mb-5"
          onClick={handleCheckout}
        >
          Checkout
        </button>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col justify-center items-center w-full h-screen">
        {!checkoutMessage || (
          <div className="shadow-md font-mono p-4 px-10 rounded text-center">
            <p className="text-2xl">Your purchase was successful!</p>
            <button
              className="text-white bg-red-600 rounded p-2 px-3 float-right mt-3  hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-yellow-300"
              onClick={() => setCheckoutMessage(false)}
            >
              Close
            </button>
          </div>
        )}
        {checkoutMessage || (
          <div className="text-center h-screen flex justify-center items-center w-full font-mono">
            <p className="text-lg font-mono">There are no items in the cart.</p>
          </div>
        )}
      </div>
    );
  }
}
