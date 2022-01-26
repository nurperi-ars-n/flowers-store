import { axiosInstance } from "./axiosInstance";

export const url = "http://iflowerv2.us-east-1.elasticbeanstalk.com/";

export const getUsers = async () => {
	try {
		const response = await axiosInstance.get("api/admin/users");
		// const response = await axiosInstance.get("todos/");
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
		const response = await axiosInstance.get(
			"/api/public/flowers?page=1&size=10",
		);
		// const response = await axiosInstance.get("todos/");
		const data = response.data;
		return { success: true, data };
	} catch (e) {
		return { success: false, data: e.response };
	}
};
export const editFlowers = async (flower, id) => {
	try {
		const response = await axiosInstance.put(
			`api/admin/flowers/${id}`,
			flower,
		);
		const data = response.data;
		console.log(response, "editFlower");
		return { success: true, data };
	} catch (e) {
		return { success: false, data: e.response };
	}
};
export const delFlowers = async (id) => {
	console.log(id, "deleteFlower");
	try {
		const response = await axiosInstance.delete(`api/admin/flowers/${id}`);
		const data = response.data;
		console.log(response, "deleteFlower");
		return { success: true, data };
	} catch (e) {
		return { success: false, data: e.response };
	}
};
export const createFlowers = async (flower) => {
	console.log(flower);
	try {
		const response = await axiosInstance.post("api/admin/flowers", flower);
		console.log(response, "responseFlower");
		const data = response.data;
		return { success: true, data };
	} catch (e) {
		return { success: false, data: e.response };
	}
};

export const getOrders = async () => {
	try {
		const response = await axiosInstance.get("api/orders");
		const data = response.data;
		console.log(response, "dataUsers");
		return { success: true, data };
	} catch (e) {
		console.log(e);
		return { success: false, data: e.response };
	}
};
