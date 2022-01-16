import React from "react";
import { Pagination } from "@mui/material";

const StyledPagination = (props) => {
	return (
		<Pagination
			siblingCount={1}
			defaultPage={3}
			boundaryCount={1}
			{...props}
		/>
	);
};

export default StyledPagination;
