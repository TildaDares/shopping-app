import React from "react";
import cart from "../images/cart.svg";
import mainImage from "../images/gilmore-collection.jpg";
import { Link } from "react-router-dom";

export default function Home() {
	const styles = {
		backgroundColor: "rgba(0, 0, 0, 0.5)",
		borderLeft: "10px solid red",
		filter: "rgba(0, 0, 0, 0.5)",
	};

	return (
		<div
			style={{ backgroundImage: "url(" + mainImage + ")" }}
			className="h-screen w-full bg-no-repeat bg-cover"
		>
			<nav
				className="list-none text-white text-xl md:text-3xl flex justify-end pt-4"
				style={{ backgroundColor: styles.filter }}
			>
				<li className="inline p-3 hover:bg-gray-700 md:mr-5 rounded active:text-red-600 cursor-pointer">
					<Link to="/">Home</Link>
				</li>
				<li className="inline p-3 md:mr-5 rounded hover:bg-gray-700 cursor-pointer">
					<Link to="/shop">Shop</Link>
				</li>
				<li className="inline p-3 pr-5 md:mr-64 rounded hover:bg-gray-700 cursor-pointer">
					<Link to="/cart">
						<img src={cart} alt="cart" className="w-9 inline md:w-12" />
					</Link>
				</li>
			</nav>

			<div
				className="flex justify-center items-center h-screen w-screen px-4 flex-col"
				style={{ backgroundColor: styles.backgroundColor }}
			>
				<p
					className="text-5xl sm:text-6xl lg:text-7xl text-white break-words text-center p-3 font-mono"
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
