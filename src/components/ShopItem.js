import React from "react";
import rings from "./rings";
import Card from "./Card";
import { CartSVG } from "./CartSVG.js";

export default function ShopItem(props) {
  const allRings = rings();
  const ring = allRings.find((ring) => ring.id === props.match.params.id);

  return (
    <div className="max-w-screen-md mx-auto mt-24 rounded-lg shadow-lg h-full">
      <Card
        ring={ring}
        height=" h-60vh"
        onCartCountChange={props.onCartCountChange}
      />
      <button
        className="p-3 bg-yellow-400 rounded-b text-white mr-3 hover:bg-yellow-500 w-full"
        onClick={() => props.onCartCountChange(ring)}
      >
        <CartSVG class="w-5 mr-3 text-white" />
        Add to Cart
      </button>
    </div>
  );
}
