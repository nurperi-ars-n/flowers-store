import { axiosInstance } from "./axiosInstance";

export const url = "http://iflowerv2.us-east-1.elasticbeanstalk.com/";

export const getUsers = async () => {
	try {
		// const response = await axiosInstance.get("api/admin/users");
		const response = await axiosInstance.get("todos/");
		const data = response.data;
		console.log(response, "dataUsers");
		return { success: true, data };
	} catch (e) {
		console.log(e);
		return { success: false, data: e.response };
	}
};

export const getFlowers = async () => {
	try {
		const response = await axiosInstance.get("api/flowers?page=1&size=20");
		// const response = await axiosInstance.get("todos/");
		const data = response.data;
		return { success: true, data };
	} catch (e) {
		return { success: false, data: e.response };
	}
};
export const editFlowers = async () => {
	try {
		const response = await axiosInstance.get("api/flowers?page=1&size=20");
		const data = response.data;
		return { success: true, data };
	} catch (e) {
		return { success: false, data: e.response };
	}
};
export const delFlowers = async () => {
	try {
		const response = await axiosInstance.get("api/flowers?page=1&size=20");
		const data = response.data;
		return { success: true, data };
	} catch (e) {
		return { success: false, data: e.response };
	}
};
export const createFlowers = async (flower) => {
	try {
		const response = await axiosInstance.post("api/flowers", flower);
		const data = response.data;
		console.log(response, "responseFlower");
		return { success: true, data };
	} catch (e) {
		return { success: false, data: e.response };
	}
};
