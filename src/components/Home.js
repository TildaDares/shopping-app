import React from "react";
import mainImage from "../images/gilmore-collection.jpg";

export default function Home() {
	const styles = {
		backgroundImage: 'url(' + mainImage + ')',
	};

	return <div style={styles} className="h-screen w-full bg-no-repeat bg-cover"></div>;
}
