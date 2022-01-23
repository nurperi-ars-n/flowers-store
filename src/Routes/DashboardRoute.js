import { ROUTES } from "../utills/constants/general";
import { Route, Routes } from "react-router-dom";
import React from "react";
import Users from "../Pages/Users";
import Flowers from "../Pages/Flowers";

export default function DashboardRoute() {
	return (
		<Routes>
			<Route path={ROUTES.ADMIN_FLOWERS} element={<Flowers />} />
			<Route path={ROUTES.ADMIN_USERS} element={<Users />} />
		</Routes>
	);
}
