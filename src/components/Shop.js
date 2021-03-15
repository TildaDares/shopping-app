import React from "react";
import Nav from "./Nav";
import elizabethSet from "../images/elizabeth-set.jpg";
import foreverMore from "../images/forever-more-collection.jpg";
import goldWoven from "../images/gold-woven.jpg";
import hazel from "../images/hazel-green-collection.jpg";
import jasmine from "../images/jasmine-set.jpg";
import minimalist from "../images/minimalist.jpg";
import pesia from "../images/pesia-crest.jpg";
import ribCage from "../images/rib-cage.jpg";
import silver from "../images/silver-geometric.jpg";
import sun from "../images/sun-collection.jpg";

export default function Shop() {
  const images = [
    {
      src: elizabethSet,
      desc: "Gold Wheels Elizabeth Set",
      price: "$19.99",
    },
    {
      src: foreverMore,
      desc: "Forever Gold Wedding Rings",
      price: "$100.00",
    },
    {
      src: goldWoven,
      desc: "Gold Woven Ring",
      price: "$15.00",
    },
    {
      src: hazel,
      desc: "Icy Hazel Ring Collection",
      price: "$90.00",
    },
    {
      src: jasmine,
      desc: "Jasmine Collection",
      price: "$115.00",
    },
    {
      src: minimalist,
      desc: "Gold Minimalist Set",
      price: "$49.99",
    },
    {
      src: pesia,
      desc: "Gold Pesia Crest Ring",
      price: "$20.00",
    },
    {
      src: ribCage,
      desc: "Rib Cage Wedding Rings",
      price: "$150.00",
    },
    {
      src: silver,
      desc: "Silver Geometric Ring",
      price: "$30.00",
    },
    {
      src: sun,
      desc: "Bohemian Sun Collection",
      price: "$29.99",
    },
  ];

  return (
    <div>
      <Nav textColor="text-black" />
      <div className="max-w-screen-md mx-auto grid grid-cols-2 gap-4 mt-24 md:gap-8 p-5">
        {images.map((img) => (
          <div className="transition duration-500 ease-in-out transform hover:-translate-y-4 rounded-lg shadow-lg">
            <img
              src={img.src}
              alt={img.desc}
              className="h-48 w-full object-cover md:h-64"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
