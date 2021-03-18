import React from "react";
import { CartSVG } from "./CartSVG.js";

export default function Card(props) {
  const ring = props.ring;

  return (
    <div className="overflow-hidden">
      <img
        src={ring.src}
        alt={ring.desc}
        className={"w-full object-cover" + props.height}
      />
      <p className="text-center p-4 font-mono">{ring.desc}</p>
      <p className="text-red-600 text-center pb-5">{ring.price}</p>
      <button
        className="p-3 bg-yellow-400 rounded float-right mb-4 text-white mr-3 hover:bg-yellow-500"
        onClick={() => props.onCartCountChange(ring)}
      >
        <CartSVG class="w-5 mr-3 text-white" />
        Add to Cart
      </button>
    </div>
  );
}
