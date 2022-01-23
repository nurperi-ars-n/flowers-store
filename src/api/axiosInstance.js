import axios from "axios";
import { initialState } from "../store/logIn/loginSlice";

export const accessToken = initialState.accessToken;

const url = "http://iflowerv2.us-east-1.elasticbeanstalk.com/";
const fakeUrl = "https://jsonplaceholder.typicode.com/";

export const axiosInstance = axios.create({
	// baseURL: fakeUrl,
	baseURL: url,
	timeout: 10000,
	headers: {
		Authorization: `Bearer_${accessToken}`,
		"Content-Type": "application/json",
		accept: "application/json",
	},
});
