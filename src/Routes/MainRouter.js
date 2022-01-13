import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import AdminPage from "../Pages/AdminPage";
import Login from "../Pages/LogIn/Login";

export default function MainRouter() {
	return (
		<Routes>
			<Route path='*' element={<Layout />} />
			<Route path='/login' element={<Login />} />
			<Route path='/login' element={<AdminPage />} />
		</Routes>
	);
}
