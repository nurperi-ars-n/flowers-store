import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ContentItem from "../components/Content/ContentItem";
import Content from "../components/Content/Content";
import CartWrapper from "../components/Cart/CartWrapper";
import AboutUs from "../Pages/AboutUs";
import { ROUTES } from "../utills/constants/general";

export default function RouteContent() {
	return (
		<Routes>
			<Route path='/' element={<Navigate to={ROUTES.FLOWERS} />} />
			<Route path={ROUTES.FLOWERS} element={<Content />} />
			<Route path='flowers/:flowerId' element={<ContentItem />} />
			<Route path={ROUTES.ABOUT_US} element={<AboutUs />} />
			<Route path={ROUTES.CART} element={<CartWrapper />} />
		</Routes>
	);
}
