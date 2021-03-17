import elizabethSet from "../images/elizabeth-set.jpeg";
import foreverMore from "../images/forever-more-collection.jpg";
import goldWoven from "../images/gold-woven.jpg";
import hazel from "../images/hazel-green-collection.jpg";
import jasmine from "../images/jasmine-set.jpg";
import minimalist from "../images/minimalist.jpg";
import pesia from "../images/pesia-crest.jpeg";
import ribCage from "../images/rib-cage.jpg";
import silver from "../images/silver-geometric.jpg";
import sun from "../images/sun-collection.jpg";

export default function rings() {
  const images = [
    {
      src: elizabethSet,
      desc: "Gold Wheels Elizabeth Set",
      price: "$19.99",
      id: "elizabeth-set",
    },
    {
      src: foreverMore,
      desc: "Forever Gold Wedding Rings",
      price: "$100.00",
      id: "forever-more",
    },
    {
      src: goldWoven,
      desc: "Gold Woven Ring",
      price: "$15.00",
      id: "gold-woven-ring",
    },
    {
      src: hazel,
      desc: "Icy Hazel Ring Collection",
      price: "$90.00",
      id: "hazel-collection",
    },
    {
      src: jasmine,
      desc: "Jasmine Collection",
      price: "$115.00",
      id: "jasmine-collection",
    },
    {
      src: minimalist,
      desc: "Gold Minimalist Set",
      price: "$49.99",
      id: "minimalist-list",
    },
    {
      src: pesia,
      desc: "Gold Pesia Crest Ring",
      price: "$20.00",
      id: "pesia-crest",
    },
    {
      src: ribCage,
      desc: "Rib Cage Wedding Rings",
      price: "$150.00",
      id: "rib-cage",
    },
    {
      src: silver,
      desc: "Silver Geometric Ring",
      price: "$30.00",
      id: "silver-geometric",
    },
    {
      src: sun,
      desc: "Bohemian Sun Collection",
      price: "$29.99",
      id: "bohemian-sun-collection",
    },
  ];

  return images;
}
