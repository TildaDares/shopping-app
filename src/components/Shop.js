import React from "react";
import rings from "./rings";
import Card from "./Card";
import { Link } from "react-router-dom";
export default function Shop(props) {
  const allRings = rings();
  return (
    <div className="max-w-screen-md mx-auto gap-7 grid p-8 grid-cols-1 sm:grid-cols-2 sm:gap-4 mt-24 md:gap-8 sm:p-5">
      {allRings.map((ring) => (
        <Link to={`${props.match.url}/${ring.id}`} key={ring.id}>
          <div className="transition duration-500 ease-in-out transform hover:-translate-y-4 rounded-lg shadow-lg h-full">
            <Card
              ring={ring}
              height=" h-48 md:h-64"
              onCartCountChange={props.onCartCountChange}
            />
          </div>
        </Link>
      ))}
    </div>
  );
}
