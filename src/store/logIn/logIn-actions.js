import { url } from "../../api/api";
import { setLocal } from "../../helpers/localStorage";
import { signUp } from "../logIn/loginSlice";
import { logIn } from "./loginSlice";

export const loginForm = (userData, navigateToAdmin) => {
	return async (dispatch) => {
		const fetchData = async () => {
			const OPTIONS = {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(userData),
			};
			const res = await fetch(url + "api/auth/login", OPTIONS);
			if (!res.ok) throw new Error("Could not fetch cart data!");

			const data = await res.json();
			console.log(data, "data");
			setLocal("JWT_Token", data.token);
			setLocal("ROLE", data.role);
			setLocal("username", data.username);
			setLocal("isAuth", true);

			return data;
		};

		try {
			const user = await fetchData();
			dispatch(logIn(user));
			navigateToAdmin();
		} catch (e) {
			console.log(e);
		}
	};
};

export const signUpForm = (userData, navigateToHomePage) => {
	return async (dispatch) => {
		const fetchData = async () => {
			const OPTIONS = {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(userData),
			};
			const res = await fetch(url + "api/users", OPTIONS);
			if (!res.ok) throw new Error("Could not fetch cart data!");

			const data = await res.json();
			console.log(data);
			setLocal("isAuth", true);

			return data;
		};

		try {
			const user = await fetchData();
			dispatch(signUp(user) && logIn(user));
			navigateToHomePage();
		} catch (e) {
			alert(e);
		}
	};
};
