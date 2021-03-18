import React from "react";

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
      <p className="text-red-600 text-center pb-5">${ring.price}</p>
    </div>
  );
}
