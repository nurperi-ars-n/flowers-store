import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ContentItem from "../components/Content/ContentItem";
import Content from "../components/Content/Content";
import CartWrapper from "../components/Cart/CartWrapper";
import AboutUs from "../Pages/AboutUs";

export default function RouteContent() {
	return (
		<Routes>
			<Route path='/' element={<Navigate to='/flowers' />} />
			<Route path='/flowers' element={<Content />} />
			<Route path='flowers/:flowerId' element={<ContentItem />} />
			<Route path='/about' element={<AboutUs />} />
			<Route path='/cart' element={<CartWrapper />} />
		</Routes>
	);
}
