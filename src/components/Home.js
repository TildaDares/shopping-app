import React from "react";
import mainImage from "../images/gilmore-collection.jpg";

export default function Home() {
	const styles = {
		backgroundImage: "url(" + mainImage + ")",
		backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderLeft: "10px solid red",
	};

	return (
		<div
			style={{ backgroundImage: styles.backgroundImage }}
			className="h-screen w-full bg-no-repeat bg-cover"
		>
			<div
				className="flex justify-center items-center h-screen px-4 flex-col"
				style={{ backgroundColor: styles.backgroundColor }}
			>
				<p
					className="text-5xl sm:text-6xl lg:text-7xl text-white break-words text-center p-3 font-mono"
					style={{ borderLeft: styles.borderLeft }}
				>
					<span className="text-red-600 mr-3">Phoenix </span> Jewellery
				</p>
        <button className="text-center bg-white text-black p-3 font-serif rounded mt-6 hover:bg-gray-200 lg:text-lg">Shop Now</button>
			</div>
		</div>
	);
}
