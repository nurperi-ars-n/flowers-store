import React, { useEffect, useState } from "react";

import { toast } from "react-toastify";
import { Box, Button, MenuItem, TextField, Typography } from "@mui/material";
import { FLOWER_MODAL_TYPE } from "../../utills/constants/general";
import { editFlowers, createFlowers, delFlowers } from "../../api/api";
import Modal from "@mui/material/Modal";
import BasicSelect from "./Select";

const FlowersCreateUpdateDeleteModal = ({
	isOpen,
	setModal,
	item,
	modalType,
	fetch,
	title,
}) => {
	const [form, setForm] = useState({
		title: item?.title | "",
		price: item?.id | null,
		raiting: item?.userId | null,
		availaible: item?.completed | true,
	});
	const [error, setError] = useState(null);

	useEffect(() => {
		console.log(item, "itemF");
		console.log(form, "form");
		console.log(modalType, "modalType");
	}, [form, item, modalType]);

	useEffect(() => {
		if (modalType === FLOWER_MODAL_TYPE.UPDATE) {
			setForm(item.name);
		} else {
			setForm("");
		}
	}, [item, modalType]);

	const onSubmit = async () => {
		// if (modalType !== FLOWER_MODAL_TYPE.DELETE && !form.length) {
		// 	setError("Обязательное поле");
		// 	return;
		// }
		let result = null;

		if (modalType === FLOWER_MODAL_TYPE.CREATE) {
			console.log("created");
			result = await createFlowers({
				...form,
				price: parseInt(form.price),
				raiting: parseInt(form.raiting),
			});
			toast.success("Creation was successfully!");
		} else if (modalType === FLOWER_MODAL_TYPE.UPDATE) {
			result = await editFlowers(form, item.id);
		} else if (modalType) {
			result = await delFlowers(item.id);
		}

		if (result && result.success) {
			fetch();
			onModalClose();
		} else {
			toast.error("Что-то пошло не так при загрузке данных...");
		}
	};

	const onModalClose = () => {
		setModal(false);
		setForm("");
	};

	const handleformChange = (e) => {
		const { name, value } = e.target;
		setForm((prev) => ({
			...prev,
			[name]: value,
		}));
		setError("");
	};

	return (
		<Modal open={isOpen} onClose={onModalClose}>
			<Box
				sx={{
					position: "absolute",
					top: "20%",
					left: "30%",
					right: "30%",
					transform: "translate(-50% -50%)",
					background: "white",
					border: "2px solid black",
					borderRadius: "20px",
					p: 4,
				}}
			>
				<Box closeButton>
					<Typography variant='h4' mb={4}>
						{title}
					</Typography>
				</Box>

				{modalType === FLOWER_MODAL_TYPE.DELETE ? null : (
					<Box
						sx={{
							display: "flex",
							flexFlow: "column",
							gap: "1.5rem",
						}}
						mb={2}
					>
						<TextField
							type='text'
							autoFocus
							value={form?.title}
							label='Title'
							name='title'
							onChange={handleformChange}
						/>
						<TextField
							type='number'
							value={form?.price}
							label='Price'
							name='price'
							onChange={handleformChange}
						/>
						<TextField
							type='number'
							value={form?.raiting}
							name='raiting'
							label='Raiting'
							onChange={handleformChange}
						/>
						<TextField
							type='text'
							value={form?.description}
							label='Description'
							name='description'
							onChange={handleformChange}
						/>
						<BasicSelect
							type='text'
							value={form?.available}
							label='Available'
							name='available'
							onChange={handleformChange}
						>
							<MenuItem value={true}>Yes</MenuItem>
							<MenuItem value={false}>No</MenuItem>
						</BasicSelect>
					</Box>
				)}

				<Box
					sx={{
						display: "flex",
						justifyContent: "flex-end",
						marginTop: "1.5rem",
					}}
				>
					<Box
						sx={{
							display: "flex",
							width: "13rem",
							justifyContent: "space-between",
						}}
					>
						<Button
							variant='contained'
							color={modalType === FLOWER_MODAL_TYPE.DELETE ? "info" : "error"}
							onClick={onModalClose}
						>
							Отмена{" "}
						</Button>
						{modalType === FLOWER_MODAL_TYPE.CREATE && (
							<Button variant='contained' color='info' onClick={onSubmit}>
								Создать
							</Button>
						)}
						{modalType === FLOWER_MODAL_TYPE.UPDATE && (
							<Button variant='contained' color='info' onClick={onSubmit}>
								Сохранить
							</Button>
						)}
						{modalType === FLOWER_MODAL_TYPE.DELETE && (
							<Button variant='contained' color='error' onClick={onSubmit}>
								Удалить
							</Button>
						)}
					</Box>
				</Box>
			</Box>
		</Modal>
	);
};

export default FlowersCreateUpdateDeleteModal;
