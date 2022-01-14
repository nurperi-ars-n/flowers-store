import React from "react";
import { Modal as MuiModal } from "@mui/material";
import Box from "@mui/material/Box";

const Modal = (props) => {
	const { open, title, children } = props;
	const style = {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		width: 400,
		bgcolor: "background.paper",
		border: "2px solid #000",
		boxShadow: 24,
		p: 4,
	};

	return (
		<MuiModal
			open={open}
			aria-labelledby='modal-modal-title'
			aria-describedby='modal-modal-description'
			{...props}
		>
			<div>
				<p>{title}</p>
				<div>
					<Box sx={style}>
						<div>{children}</div>
					</Box>
				</div>
			</div>
		</MuiModal>
	);
};
export default Modal;
