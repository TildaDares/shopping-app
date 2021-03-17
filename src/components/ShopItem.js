import React from "react";
import rings from "./rings";
import Card from "./Card";

export default function ShopItem({ match }) {
  const allRings = rings();
  const ring = allRings.find((ring) => ring.id === match.params.id);

  return (
    <div className="max-w-screen-md mx-auto mt-24 rounded-lg shadow-lg h-full">
      <Card ring={ring} height=" h-60vh" />
    </div>
  );
}
