import { Button, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getFlowers } from "../api/api";
import FlowerTable from "../components/UI/Table";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import FlowersCreateUpdateDeleteModal from "../components/UI/FlowersModal";
import { FLOWER_MODAL_TYPE } from "../utills/constants/general";
import Spinner from "../components/UI/Spinner";

export default function Flowers() {
	const [flowers, setFlowers] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const usersData = useSelector((state) => state.users.users);
	const accesToken = useSelector((state) => state.auth.accesToken);
	const [modal, setModal] = useState({
		isOpen: false,
		item: null,
		modalType: FLOWER_MODAL_TYPE.CREATE,
		title: "",
	});

	const fetchUsers = async () => {
		setIsLoading(true);
		const { success, data } = await getFlowers();

		if (success) {
			setFlowers(data);
		}
		setIsLoading(false);
	};

	useEffect(() => {
		fetchUsers().then(null);
	}, []);
	console.log(flowers, "flowers");
	const flowerOptions = React.useMemo(
		() => [
			{
				Header: "Title",
				accessor: "name",
				// accessor: "title",
			},
			{
				Header: "Price",
				accessor: "price",
				// accessor: "userId",
			},
			{
				Header: "Rating",
				// accessor: "id",
				accessor: "rating",
			},
			{
				Header: "Available",
				filter: "available",
				Cell: (value) => (
					<Typography
						variant='h5'
						color={!value ? "success.light" : "error"}
					>
						{!value ? <CheckBoxIcon /> : <CancelIcon />}
					</Typography>
				),
			},
			{
				Header: "Edit",
				filter: "edit",
				Cell: (cell) => (
					<Button
						variant={"contained"}
						size={"large"}
						onClick={handleEditClick(cell.row.original)}
					>
						Edit
					</Button>
				),
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
		],
		[],
	);

	const handleCreateClick = () => {
		setModal({
			isOpen: true,
			item: null,
			modalType: FLOWER_MODAL_TYPE.CREATE,
			name: "Create flower",
		});
	};

	const handleEditClick = (item) => {
		return () => {
			setModal({
				isOpen: true,
				item: item,
				modalType: FLOWER_MODAL_TYPE.UPDATE,
				name: `Edit flower "${item.name}"?`,
			});
		};
	};

	const handleDeleteClick = (item) => {
		return () => {
			setModal({
				isOpen: true,
				item: item,
				modalType: FLOWER_MODAL_TYPE.DELETE,
				name: `Are you sure you want to delete the flower "${item.name}"?`,
			});
		};
	};
	if (isLoading) return <Spinner />;
	return (
		<>
			<FlowersCreateUpdateDeleteModal
				isOpen={modal.isOpen}
				item={modal.item}
				name={modal.name}
				modalType={modal.modalType}
				setModal={setModal}
				fetch={fetchUsers}
			/>
			<FlowerTable
				createName='Flower'
				columns={flowerOptions}
				data={flowers}
				handleCreateClick={handleCreateClick}
			/>
		</>
	);
}
