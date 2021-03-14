import React from "react";
import mainImage from "./images/gilmore-collection.jpg";
import Nav from "./components/Nav";

export default function App() {
  const styles = {
    background: "url(" + mainImage + ")",
    borderLeft: "10px solid red",
  };

  return (
    <div
      style={{ backgroundImage: styles.background }}
      className="h-screen w-full bg-no-repeat bg-cover flex justify-center flex-col items-center"
    >
      <Nav textColor="text-white" />
      <div className="px-4 text-center">
        <p
          className="text-5xl sm:text-6xl lg:text-7xl text-white text-center p-3 font-mono"
          style={{ borderLeft: styles.borderLeft }}
        >
          <span className="text-red-600 mr-3">Phoenix </span> Jewellery
        </p>
        <button className="text-center bg-white text-black p-3 font-serif rounded mt-6 hover:bg-gray-200 lg:text-lg">
          Shop Now
        </button>
      </div>
    </div>
  );
}
