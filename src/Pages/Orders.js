import React, { useState, useEffect } from "react";
import FlowerTable from "../components/UI/Table";
import { useSelector } from "react-redux";
import { getOrders } from "../api/api";

function Orders() {
	const [users, setUsers] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const fetchUsers = async () => {
		setIsLoading(true);
		const { success, data } = await getOrders();
		console.log(data, "data");
		if (success) {
			setUsers(data);
		}
		setIsLoading(false);
	};
	useEffect(() => {
		console.log(users, "users");
	}, [users]);
	useEffect(() => {
		fetchUsers().then(null);
	}, []);
	return (
		<>
			<FlowerTable columns={flowerOptions} data={users} />
		</>
	);
}

export default Orders;

const flowerOptions = [
	{
		Header: "sendersName",
		accessor: "id",
	},
	{
		Header: "sendersPhone",
		accessor: "title",
	},

	{
		Header: "address",
		accessor: "userId",
	},
	{
		Header: "recipientName",
		filter: "role",
		accessor: "role",
	},
	{
		Header: "recipientPhone",
		accessor: "recipientPhoneNumber",
	},
	{
		Header: "timeOfDelivery",
		accessor: "timeOfDelivery",
	},
	{
		Header: "comment",
		accessor: "comment",
	},
	{
		Header: "distance",
		accessor: "distance",
	},
	{
		Header: "time",
		accessor: "time",
	},
];
