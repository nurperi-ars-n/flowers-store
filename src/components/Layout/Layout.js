import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import RouteContent from "../../Routes/RouteContent";

export default function Layout() {
	return (
		<div>
			<Header />
			<div className='wrapper'>
				<RouteContent />
			</div>
			<Footer />
		</div>
	);
}
