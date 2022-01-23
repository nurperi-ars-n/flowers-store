import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import FlowerTable from "../components/UI/Table";
import { useSelector } from "react-redux";
import { getUsers } from "../api/api";

function Users() {
	const [users, setUsers] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const fetchUsers = async () => {
		setIsLoading(true);
		const { success, data } = await getUsers();
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

	const handleDeleteClick = (row) => {
		console.log("deleteUser", row);
	};

	const flowerOptions = [
		{
			Header: "ID",
			accessor: "id",
		},
		{
			Header: "FullName",
			accessor: "title",
		},

		{
			Header: "PhoneNumber",
			accessor: "userId",
		},
		{
			Header: "Role",
			filter: "role",
			accessor: "role",
		},
		{
			Header: "Email",
			filter: "email",
			accessor: "email",
		},
		{
			Header: "Delete",
			filter: "delete",
			Cell: (cell) => (
				<Button
					variant={"contained"}
					color={"error"}
					onClick={handleDeleteClick(cell.row.original)}
				>
					Delete
				</Button>
			),
		},
	];
	return (
		<>
			<FlowerTable columns={flowerOptions} data={users} />
		</>
	);
}

export default Users;
